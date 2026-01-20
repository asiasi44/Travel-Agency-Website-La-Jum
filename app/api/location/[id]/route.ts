import { Params, withErrorHandler } from "@/lib/errorHandler";
import Location from "@/models/LocationModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params,
) {
  const { id } = await params;
  const body = await request.json();
  const { city, countryId } = body;
  const updatedLocation = await Location.findByIdAndUpdate(id, {
    city,
    country: countryId,
  });
  return NextResponse.json({
    success: true,
    updatedLocation,
  });
});

export const DELETE = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params,
) {
  const { id } = await params;
  const deletedLocation = await Location.findByIdAndDelete(id);
  return NextResponse.json({
    success: true,
    deletedLocation,
  });
});
