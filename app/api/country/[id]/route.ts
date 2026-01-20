import { CountryType } from "@/lib/clientSchema/countries/schema";
import dbConnect from "@/lib/database/mongodb";
import Country from "@/models/CountryModel";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  },
) {
  try {
    await dbConnect();
    const body = await request.json();
    const { id } = await params;
    const updatedCountry = await Country.findByIdAndUpdate(id, body);

    const data: CountryType = updatedCountry?.toJSON() as CountryType;

    return NextResponse.json({
      success: true,
      message: "Added Successfully",
      updatedCountry: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const deletedCountry = await Country.findByIdAndDelete(id);

    const data: CountryType = deletedCountry?.toJSON() as CountryType;

    return NextResponse.json({
      success: true,
      message: "Deleted Successfully",
      deletedCountry: data,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Error Deleting Country",
      error,
    });
  }
}
