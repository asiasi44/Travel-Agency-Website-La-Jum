import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/database/mongodb";


export type Params = { params: Promise<{ id: string }> };

export type Handler<TContext> = (
  request: NextRequest,
  context: TContext,
) => Promise<NextResponse>;

export function withErrorHandler<TContext>(handler: Handler<TContext>) {
  return async (request: NextRequest, context: TContext) => {
    try {
      await dbConnect();
      return await handler(request, context);
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { success: false, error: "Internal Server Error" },
        { status: 500 },
      );
    }
  };
}
