import type { RegisterToolsFn } from "@tambo-ai/react";
import { healthTool } from "@/services/health-tool";

export const tools: RegisterToolsFn = {
  healthTool,
};
