"use server"

import fs from "fs/promises"
import path from "path"

interface CodebaseStreamOptions {
  excludeDirs?: string[]
  extensions?: string[]
}

async function getAllFilePaths(
  dir: string, 
  options: CodebaseStreamOptions = {}
): Promise<string[]> {
  const excludeDirs = options.excludeDirs ?? [
    "node_modules",
    ".git",
    ".next",
    "dist",
    ".vercel",
    ".vscode",
    "public",
    "scripts"
  ]
  
  const excludeFiles = [
    ".env",
    ".env.local",
    ".gitignore",
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "next.config.js",
    "next.config.mjs",
    "tailwind.config.js",
    "tailwind.config.ts",
    ".eslintrc.json",
    "postcss.config.js"
  ]
  
  const extensions = options.extensions ?? [
    ".ts",
    ".tsx",
    ".js",
    ".jsx"
  ]
  
  const files: string[] = []

  async function scan(currentDir: string) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)
      const relativePath = path.relative(dir, fullPath)

      if (entry.isDirectory()) {
        if (!excludeDirs.includes(entry.name)) {
          await scan(fullPath)
        }
        continue
      }

      if (entry.isFile() && 
          extensions.some(ext => entry.name.endsWith(ext)) && 
          !excludeFiles.includes(entry.name)) {
        files.push(relativePath)
      }
    }
  }

  await scan(dir)
  return files
}

function generateFileTree(filePaths: string[]): string {
  const tree = ['File Tree:', '└── root']
  const sortedPaths = [...filePaths].sort()
  
  for (const filePath of sortedPaths) {
    const parts = filePath.split(path.sep)
    const indent = '    '.repeat(parts.length)
    tree.push(`${indent}└── ${parts[parts.length - 1]}`)
  }

  return tree.join('\n')
}

export async function getCodebaseStream(
  rootDir: string,
  options: CodebaseStreamOptions = {}
): Promise<string> {
  const filePaths = await getAllFilePaths(rootDir, options)
  const fileTree = generateFileTree(filePaths)
  const codeStream: string[] = [fileTree, '\n=== File Contents ===\n']

  for (const filePath of filePaths) {
    const fullPath = path.join(rootDir, filePath)
    
    try {
      const content = await fs.readFile(fullPath, "utf-8")
      codeStream.push(
        `\n==== FILE START: ${filePath} ====\n${content}\n==== FILE END: ${filePath} ====\n`
      )
    } catch (error) {
      console.error(`Skipping ${filePath}: ${error}`)
    }
  }

  return codeStream.join("")
} 