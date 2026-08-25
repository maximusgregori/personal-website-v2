"use client";

import { GlobeIcon, PlusIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Suggestion } from "@/components/ai-elements/suggestion";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";

import { CHIPS, FALLBACK_ANSWER, GREETING, joinedAnswer } from "./copy";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

const GREETING_MESSAGE: ChatMessage = {
  id: "greeting",
  role: "assistant",
  content: GREETING,
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function AnswerBody({ content }: { content: string }) {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((paragraph, index) => {
        const parts = paragraph.split("[projects](/projects)");

        if (parts.length === 1) {
          return (
            <p className="text-pretty" key={index}>
              {paragraph}
            </p>
          );
        }

        return (
          <p className="text-pretty" key={index}>
            {parts[0]}
            <a className="underline" href="/projects">
              projects
            </a>
            {parts[1]}
          </p>
        );
      })}
    </div>
  );
}

export function AskMaxChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING_MESSAGE]);
  const [status, setStatus] = useState<"ready" | "streaming">("ready");
  const timerRef = useRef<number | null>(null);
  const inflightRef = useRef<{ id: string; answer: string } | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => () => clearTimer(), [clearTimer]);

  const streamAnswer = useCallback(
    (question: string, answer: string) => {
      clearTimer();

      const userId = nanoid();
      const assistantId = nanoid();

      setMessages((current) => {
        let next = current;
        const inflight = inflightRef.current;
        if (inflight) {
          next = next.map((message) =>
            message.id === inflight.id
              ? { ...message, content: inflight.answer }
              : message
          );
        }

        return [
          ...next,
          { id: userId, role: "user", content: question },
          { id: assistantId, role: "assistant", content: "" },
        ];
      });

      inflightRef.current = { id: assistantId, answer };
      setStatus("streaming");

      if (prefersReducedMotion()) {
        inflightRef.current = null;
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId
              ? { ...message, content: answer }
              : message
          )
        );
        setStatus("ready");
        return;
      }

      const tokens = answer.match(/\s+|\S+/g) ?? [answer];
      let index = 0;

      const tick = () => {
        index += 1;
        const next = tokens.slice(0, index).join("");
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId
              ? { ...message, content: next }
              : message
          )
        );

        if (index < tokens.length) {
          timerRef.current = window.setTimeout(tick, 18);
        } else {
          inflightRef.current = null;
          setStatus("ready");
        }
      };

      timerRef.current = window.setTimeout(tick, 80);
    },
    [clearTimer]
  );

  const handleChip = useCallback(
    (question: string) => {
      const chip = CHIPS.find((item) => item.question === question);
      if (!chip) {
        return;
      }
      streamAnswer(chip.question, joinedAnswer(chip.paragraphs));
    },
    [streamAnswer]
  );

  const handleSubmit = useCallback(
    (message: PromptInputMessage) => {
      const text = message.text.trim();
      if (!text) {
        return;
      }

      const chip = CHIPS.find(
        (item) => item.question.toLowerCase() === text.toLowerCase()
      );
      streamAnswer(
        chip?.question ?? text,
        chip ? joinedAnswer(chip.paragraphs) : FALLBACK_ANSWER
      );
    },
    [streamAnswer]
  );

  return (
    <div className="relative flex h-[min(72svh,36rem)] min-h-96 w-full min-w-0 flex-col overflow-hidden rounded-xl bg-glass backdrop-blur-xl inset-ring inset-ring-white/12 md:h-[min(70svh,36rem)] md:min-h-112 md:rounded-2xl">
      <ShineBorder
        borderWidth={1}
        duration={14}
        shineColor={["#A32938", "#F7F8F8", "#A32938"]}
      />
      <div className="relative z-10 flex h-9 shrink-0 items-center gap-2 border-b border-white/12 bg-white/6 px-4">
        <span aria-hidden className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-2.5 rounded-full bg-[#28C840]" />
        </span>
      </div>
      <Conversation className="min-h-0">
        <ConversationContent className="gap-5 p-4 sm:p-5">
          {messages.map((message) => (
            <Message from={message.role} key={message.id}>
              <MessageContent
                className={
                  message.role === "assistant"
                    ? "max-w-none text-base/7 sm:text-sm/6"
                    : "bg-white/10 text-base/7 sm:text-sm/6 group-[.is-user]:bg-white/10"
                }
              >
                {message.role === "assistant" ? (
                  <AnswerBody content={message.content || " "} />
                ) : (
                  message.content
                )}
              </MessageContent>
            </Message>
          ))}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>
      <div className="relative z-10 flex flex-col gap-2 border-t border-white/8 p-3 sm:gap-3 sm:p-4">
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap">
          {CHIPS.map((chip, index) => (
            <Suggestion
              key={chip.question}
              suggestion={chip.question}
              onClick={handleChip}
              variant="default"
              className={cn(
                "h-auto max-w-full justify-start px-3 py-2 text-left whitespace-normal hover:bg-primary-press md:px-4",
                index === 0 && "col-span-2"
              )}
            />
          ))}
        </div>
        <PromptInput onSubmit={handleSubmit}>
          <PromptInputBody>
            <PromptInputTextarea
              className="min-h-12 text-base/7 sm:text-sm/6"
              placeholder="Ask a question"
            />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputButton aria-label="Add attachment">
                <PlusIcon className="size-4 shrink-0" />
              </PromptInputButton>
              <PromptInputButton aria-label="Search the web">
                <GlobeIcon className="size-4 shrink-0" />
                Search
              </PromptInputButton>
            </PromptInputTools>
            <PromptInputSubmit
              className="bg-primary text-primary-foreground hover:bg-primary-press"
              disabled={status === "streaming"}
              status={status === "streaming" ? "streaming" : undefined}
            />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
}
