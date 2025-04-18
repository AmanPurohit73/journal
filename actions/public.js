import { unstable_cache } from "next/cache";

export const getDailyPrompt = unstable_cache(
  async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-store",
      });
      const data = await res.json();
      return data.slip.advice;
    } catch (e) {
      return {
        success: false,
        data: "What's on youy mind Today ?",
      };
    }
  },
  ["daily-prompt"],
  {
    revalidate: 56400,
    tags: ["daily-prompt"],
  }
);
