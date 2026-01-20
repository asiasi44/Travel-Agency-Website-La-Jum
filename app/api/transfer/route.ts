import { Params, withErrorHandler } from "@/lib/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params,
) {
  return NextResponse.json({
    success: true,
    transfers: [],
  });
});

export const POST = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params,
) {
  const body = await request.json();
  return NextResponse.json({
    success: true,
  });
});
