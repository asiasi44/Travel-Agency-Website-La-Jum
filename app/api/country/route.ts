import dbConnect from "@/lib/database/mongodb";
import { CountryType } from "@/lib/formSchemas/countries/schema";
import Country from "@/models/CountryModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    const createdCountry = await Country.create({
      name: body.name,
    });

    const data: CountryType = createdCountry.toJSON() as CountryType;

    return NextResponse.json({
      success: true,
      country: data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error,
        message: error?.message ?? "Some Error Occured",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const fetchedCountries = await Country.find({});
    return NextResponse.json({
      success: true,
      countries: fetchedCountries,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}
