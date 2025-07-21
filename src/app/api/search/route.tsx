import { mediaSchemaList } from "@/app/lib/schemas/media";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=true&language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from TMDB" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const parsedData = mediaSchemaList.parse(data.results);
    console.log(parsedData)
    return NextResponse.json(parsedData, { status: 200 });
  } catch (error) {
    console.error("search_query error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
