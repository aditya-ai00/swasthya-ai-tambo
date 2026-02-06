import { createTools } from "@tambo-ai/react";
import { healthTool } from "@/services/health-tool";

export const tools = createTools({
  health: healthTool,
});
