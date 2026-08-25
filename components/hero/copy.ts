export const HERO_NAME = "Max Gregori";
export const HERO_LABELS = "Founder · Operator · Builder";

export const FALLBACK_ANSWER =
  "Use one of the questions below.";

export const CHIPS = [
  {
    question: "What has Max founded?",
    paragraphs: [
      "Max has founded and co-founded a number of ventures. The first was in high school, with his friend Sebastian: a low-cost web design agency for nonprofits in New York City, because their budgets were too small for the existing players.",
      "Max reconciled multiple government databases to index every 501(c) nonprofit across the five boroughs, evaluated their fit, called potential clients one by one, and pitched each one on a low-cost website.",
      "Most recently he started Protea, which builds on his years in healthcare IT by automating healthcare technology delivery: the process of how operators and vendors procure, deliver, and manage their technology.",
    ],
  },
  {
    question: "What exceptional work has Max done?",
    paragraphs: [
      "He turned a simple IT staffing agency into a national provider of end-to-end IT solutions for outpatient healthcare.",
      "When Max joined Integrity HIT as head of business development, the firm was primarily placing project managers and nursing informaticists into healthcare IT positions. Staff were already deeply embedded in healthcare operations, and Max saw a way to expand the service lines, especially where clinics wanted someone on site.",
      "He built the line from there: hiring technicians city by city, pitching the work himself to existing customers and then to new ones, and handling many of the early jobs himself. Once it had grown, he automated intake, scheduling, and invoicing through an AI agent orchestrator so the client experience could keep up.",
      "The client base went from three healthcare operators to eight of the largest MSOs in the country. Revenue doubled in the lower millions, and they delivered on-site services at over 100 sites.",
    ],
  },
  {
    question: "What has Max built?",
    paragraphs: [
      "A lot of people were saying you could exploit weather markets on Polymarket and Kalshi with an automated bot for cheap arbitrage.",
      "Max has always been naturally curious, so rather than taking that at face value he made a project out of rebuilding the solution to see if it was actually true.",
      "Those markets resolve against NOAA and National Weather Service temperature data, so he built a bot on EC2 in us-east-1 to read NOAA's public S3 buckets on the same backbone. The bot priced each city's daily high against the markets and paper-traded until it was obvious the edge was already gone to the market makers. More of what he has built is in [projects](/projects).",
    ],
  },
] as const;

export const joinedAnswer = (paragraphs: readonly string[]) =>
  paragraphs.join("\n\n");
