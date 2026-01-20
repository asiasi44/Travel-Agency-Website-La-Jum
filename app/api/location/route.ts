import { Params, withErrorHandler } from "@/lib/errorHandler";
import Location from "@/models/LocationModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params,
) {
  const allLocations = await Location.find({})
    .populate("country", "name")
    .lean();

  const locations = allLocations.map((loc: any) => ({
    id: loc._id.toString(),
    city: loc.city,
    countryId: loc.country?._id?.toString(),
    countryName: loc.country?.name ?? "",
  }));

  return NextResponse.json({
    success: true,
    locations,
  });
});

export const POST = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params,
) {
  const body = await request.json();
  const createdLocation = await Location.create({
    city: body.city,
    country: body.countryId,
  });
  console.log(createdLocation);
  return NextResponse.json({
    success: true,
    createdLocation,
  });
});
