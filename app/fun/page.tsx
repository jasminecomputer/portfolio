"use client";

import Link from "next/link";
import "./page.css";
import vinyl from "../../public/vinyl.png";
import Image from "next/image";
import { useState, useEffect } from "react";

// export const metadata = {
//   title: "just for fun",
//   description: "projects",
// };

interface Track {
  id: string;
  name: string;
  artists: Artist[];
}
interface Artist {
  name: string;
}

export default function Page() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  //const [tokenExpiration, setTokenExpiration] = useState<number | null>(null);
  const [song, setSong] = useState<Track | null>(null); // Track or null
  const [timeLastPlayed, setTimeLastPlayed] = useState<string | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]); // Array of Track objs

  // Fetch Spotify Access Token via Next.js API Route
  const fetchAccessToken = async () => {
    const res = await fetch("/api/spotify", {
      method: "GET",
      cache: "no-store", //
    });

    if (!res.ok) {
      console.error("Error fetching access token");
      return null;
    }

    const data = await res.json();

    setAccessToken(data.access_token);
    //setTokenExpiration(data.expires_at); // Store when the token will expire
    return data.access_token;
  };

  const fetchPlayingOrLastPlayed = async () => {
    const accessToken = await fetchAccessToken();
    if (!accessToken) return;

    const nowPlayingResponse = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const songData = await nowPlayingResponse.json();
    setSong(songData?.item || null);
    return;
  };

  // // If nothing is currently playing, fetch last played song
  // const lastPlayedResponse = await fetch(
  //   "https://api.spotify.com/v1/me/player/recently-played?limit=1",
  //   {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  // if (!lastPlayedResponse.ok) {
  //   console.error(
  //     "Error fetching last played song:",
  //     lastPlayedResponse.statusText
  //   );
  //   return;
  // }

  // const lastPlayedData = await lastPlayedResponse.json();
  // if (lastPlayedData.items.length > 0) {
  //   const lastSong = lastPlayedData.items[0].track;
  //   setSong(lastSong); // Set last played song

  //   const datetimeLastPlayed = new Date(lastSong.played_at)
  //     .toISOString()
  //     .split("T")[0]; // Extract YYYY-MM-DD

  //   setTimeLastPlayed(datetimeLastPlayed);
  // } else {
  //   console.warn("No songs found in recently played.");
  // }

  useEffect(() => {
    fetchPlayingOrLastPlayed();
    const interval = setInterval(fetchPlayingOrLastPlayed, 10000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      {/* <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Spotify listening analysis
      </h1> */}

      <div>
        spotify
        {song ? (
          <div>
            <h2>🎵 currently listening to 🎵 </h2>
            <p>
              {song.name} by{" "}
              {song.artists.map((artist) => artist.name).join(", ")}
            </p>
            <div className="image-container">
              <Image
                className="image1"
                src={vinyl}
                alt="vinyl record"
                width={200}
                height={200}
              />
              <div className="circle image2">
                <iframe
                  src={`https://open.spotify.com/embed/track/${song.id}`}
                  width="300"
                  height="200"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
        ) : (
          <p>
            not listening at the moment
            {/* not listening at the moment, last listened to {song} at{" "}
            {timeLastPlayed}{" "} */}
          </p>
        )}
      </div>
    </section>
  );
}

// export default async function Page() {
//   console.log("refresh", process.env.SPOTIFY_REFRESH_TOKEN);
//   const tracks_response = await topTracks();
//   const tracks_data = await tracks_response.json();
//   const tracks = tracks_data.items || [];
//   let song: Track | null = null; // Provide explicit type
//   try {
//     const song_response = await currentlyPlayingSong();
//     if (!song_response.ok) {
//       console.error(
//         "Error fetching currently playing song:",
//         song_response.statusText
//       );
//       throw new Error(
//         `Failed to fetch currently playing song: ${song_response.status}`
//       );
//     }
//     const song_text = await song_response.text();
//     if (song_text) {
//       const song_data = JSON.parse(song_text);
//       song = song_data?.item || null;
//     } else {
//       console.warn("Currently playing song response is empty.");
//     }
//   } catch (error) {
//     console.error("Error fetching or parsing currently playing song:", error);
//   }
//   {
//     /*}
//   const recentSong_response = await mostRecentSong();
//   const recentSong_data = await recentSong_response.json();
//   const recentSong = recentSong_data.items || []; // Safely access the first track in the response
//   console.log(recentSong);*/
//   } //do this later, need to change the scope i think

//   return (
//     <section>
//       <h1 className="font-semibold text-2xl mb-8 tracking-tighter"></h1>
//       {/* <div>
//         recent discoveries and/or obsessions:
//         <li> Hobbiton, Huberman podcast 3.9.24 </li>
//         <li> Challengers + soundtrack </li>
//         <li> 11.8.24 </li>
//         <div>past </div>
//         <li> NTS </li>
//         <li> mindfulness studies </li>
//         <li> omelettes </li>
//         <div> 10.22.24 </div>
//       </div> */}
//       {/*<BlogPosts />*/}
//       <div>Spotify listening analysis</div>
//       {/* Display Spotify currently playing song */}
//       <div>Currently Playing</div>
//       {song ? (
//         <div>
//           <p>
//             {song.name} by{" "}
//             {song.artists.map((artist: any) => artist.name).join(", ")}
//           </p>
//           <div className="image-container">
//             <Image
//               className="image1"
//               src={vinyl}
//               alt="vinyl record"
//               width={200}
//               height={200}
//             />
//             <div className="circle image2">
//               <iframe
//                 src={`https://open.spotify.com/embed/track/${song.id}`}
//                 width="300"
//                 height="200"
//                 allow="encrypted-media"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>No song is currently playing.</p>
//       )}

//       {/* Display Top Tracks */}
//       <div>Top Tracks from last ~4 weeks</div>
//       {tracks.length > 0 ? (
//         <ul>
//           {tracks.map((track) => (
//             <li key={track.id}>
//               {track.name} by{" "}
//               {track.artists.map((artist) => artist.name).join(", ")}
//               <br />
//               <iframe
//                 src={`https://open.spotify.com/embed/track/${track.id}`}
//                 width="300"
//                 height="80"
//                 allow="encrypted-media"
//               ></iframe>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No top tracks found.</p>
//       )}
//     </section>
//   );
// }
