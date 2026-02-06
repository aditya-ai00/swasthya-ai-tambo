import type { TamboTool } from "@tambo-ai/react";
import { z } from "zod";

export const healthTool: TamboTool = {
  name: "healthAssistant",
  description: "Provides basic health advice for common symptoms",
  inputSchema: z.object({
    symptom: z.string(),
  }),
  outputSchema: z.object({
    advice: z.string(),
  }),
  tool: async ({ symptom }) => {
    if (symptom.toLowerCase().includes("fever")) {
      return {
        advice:
          "Rest, drink plenty of fluids, and monitor your temperature. If fever persists or is very high, consult a doctor.",
      };
    }

    return {
      advice: "Please consult a doctor if symptoms persist.",
    };
  },
};
