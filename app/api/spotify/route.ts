import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Error refreshing access token:", data);
    return NextResponse.json(
      { error: data.error_description },
      { status: 500 }
    );
  }

  return NextResponse.json({
    access_token: data.access_token,
    //expires_in: data.expires_in,
    // expires_at,
    refresh_token: data.refresh_token || process.env.SPOTIFY_REFRESH_TOKEN, // Keep refresh token if not returned
  });
}
