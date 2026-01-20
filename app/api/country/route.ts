import { CountryType } from "@/lib/clientSchema/countries/schema";
import Country from "@/models/CountryModel";
import { NextRequest, NextResponse } from "next/server";
import { Params, withErrorHandler } from "@/lib/errorHandler";

export const POST = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params,
) {
  const body = await request.json();

  const createdCountry = await Country.create({
    name: body.name,
  });

  const data: CountryType = createdCountry.toJSON() as CountryType;

  return NextResponse.json({
    success: true,
    addedCountry: data,
  });
});

export const GET = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params,
) {
  const fetchedCountries = await Country.find({});
  return NextResponse.json({
    success: true,
    countries: fetchedCountries,
  });
});
