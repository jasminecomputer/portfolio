const getAccessToken = async () => {
  console.log("SPOTIFY_CLIENT_ID:", process.env.SPOTIFY_CLIENT_ID);

  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!refresh_token) {
    throw new Error("Missing Spotify refresh token.");
  }

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
      refresh_token,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error getting access token:", errorData);
    throw new Error(
      `Failed to fetch access token: ${
        errorData.error_description || response.statusText
      }`
    );
  }
  console.log("response line 34", response.json());
  return response.json();
};

export const topTracks = async () => {
  const { access_token } = await getAccessToken();
  console.log("access token toptracks", access_token);
  return fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

export const mostRecentSong = async () => {
  const { access_token } = await getAccessToken();
  return fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// lib/spotify.js

export const topArtists = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
