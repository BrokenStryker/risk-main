"use server"

import { exportCodebaseAction } from "@/actions/codebase-actions"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const rootDir = body.rootDir as string
  
  const result = await exportCodebaseAction(rootDir)
  
  if (result.isSuccess) {
    return NextResponse.json({ 
      message: result.message, 
      path: result.data 
    })
  }

  return NextResponse.json({ 
    error: result.message 
  }, { status: 500 })
} 