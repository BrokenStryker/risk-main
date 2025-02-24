"use server"

import { getCodebaseStream } from "@/lib/utils/codebase-stream"
import { ActionState } from "@/types"
import fs from "fs/promises"
import path from "path"

export async function exportCodebaseAction(
  rootDir?: string
): Promise<ActionState<string>> {
  try {
    const projectRoot = rootDir || process.cwd()
    const stream = await getCodebaseStream(projectRoot)
    
    const outputPath = path.join(projectRoot, "codebase-context.txt")
    await fs.writeFile(outputPath, stream, "utf-8")

    return {
      isSuccess: true,
      message: "Codebase exported successfully",
      data: outputPath
    }
  } catch (error) {
    console.error("Error exporting codebase:", error)
    return { isSuccess: false, message: "Failed to export codebase" }
  }
} 