# AGENTS.md — maxgregori.me v2

Do not create `CLAUDE.md`.

This folder is the new site. `../personal-site-v1/` is the live GitHub Pages site. Do not edit v1 unless Max asks. Do not change CNAME or deploy to maxgregori.me until he says to switch.

## Write only here

`Documents/Work/Dev/Personal-Website/`

Do not write anywhere else unless Max asks. The Kronos vault is allowed when he asks to update Career / portfolio notes.

## What this is

Public site for job applications. Not a resume. Projects, story, places lived, a bit about Max, what people say about him.

## Hard rule: never design from scratch

Every visible UI element comes from these sources. Install with the CLI. Adapt copy. If nothing fits, stop and ask Max.

1. **Shadcn Blocks (Pro)** — https://www.shadcnblocks.com/
   - Key: `.env` → `SHADCNBLOCKS_API_KEY` (gitignored)
   - Copy the install command from the block page
   - Registry URL must use `www.shadcnblocks.com`
2. **Aceternity UI** — https://ui.aceternity.com/templates
3. **Magic UI** — https://magicui.design/
4. **AI Elements** — mock chat only (`npx shadcn add @ai-elements/<name>`). No live model, no API key, no AI SDK runtime.

Never put the API key in git. Never invent jobs, dates, quotes, or bio.

## Writing

Before any prose, read `Vaults/Kronos/05 System/Skills/AI Writing Tells.md`. Follow it. Do not draft slogan lines. Max writes hero copy, or we draft it later in a copy pass.

## Stack

Not scaffolded yet. Do not add a framework until Max says so.
