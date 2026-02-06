import type { TamboTool } from "@tambo-ai/react";
import { healthTool } from "@/services/health-tool";

export const tools: TamboTool[] = [healthTool];
