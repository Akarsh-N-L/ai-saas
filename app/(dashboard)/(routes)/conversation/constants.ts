import * as zod from "zod";

export const fromSchema = zod.object({
  prompt: zod.string().min(1, {
    message: "Prompt is required",
  }),
});
