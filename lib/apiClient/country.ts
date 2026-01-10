import axios from "axios";
import { CountryType } from "../formSchemas/countries/schema";

export async function createCountry(data: CountryType) {
  const response = await axios.post("/api/country", data);
  return response.data;
}

export async function getAllCountries() {
  const response = await axios.get("/api/country");
  return response.data;
}

export async function updateCountry({
  id,
  data,
}: {
  id: String | null;
  data: CountryType;
}) {
  if (id === null) {
    return {
      message: "Cannot Update without Valid Id",
      success: false,
    };
  }
  const response = await axios.patch(`/api/country/${id}`, data);
  return response.data;
}

export async function deleteCountry(id: string | null) {
  if (id === null) {
    return {
      message: "Cannot Delete without Valid Id",
      success: false,
    };
  }
  const response = await axios.delete(`/api/country/${id}`);
  return response.data;
}
