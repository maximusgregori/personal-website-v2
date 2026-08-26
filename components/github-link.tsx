import { siGithub } from "simple-icons";

import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  className?: string;
  size?: "sm" | "md";
};

const GitHubLink = ({ href, label, className, size = "md" }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn("relative shrink-0", className)}
    >
      <span
        className="pointer-fine:hidden absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2"
        aria-hidden="true"
      />
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={cn(
          "shrink-0 fill-muted-foreground hover:fill-foreground",
          size === "sm" ? "size-5" : "size-6"
        )}
      >
        <title>GitHub</title>
        <path d={siGithub.path} />
      </svg>
    </a>
  );
};

export { GitHubLink };
