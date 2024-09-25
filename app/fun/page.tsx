import Link from "next/link";
import { topTracks, currentlyPlayingSong, mostRecentSong } from "./spotify";
import "./page.css";
import vinyl from "../../public/vinyl.png";
import Image from "next/image";

export const metadata = {
  title: "just for fun",
  description: "projects",
};

interface Track {
  id: string;
  name: string;
  artists: Artist[];
}
interface Artist {
  name: string;
}

export default async function Page() {
  const tracks_response = await topTracks();
  const tracks_data = await tracks_response.json();
  const tracks = tracks_data.items || [];
  let song: Track | null = null; // Provide explicit type
  try {
    const song_response = await currentlyPlayingSong();
    if (!song_response.ok) {
      console.error(
        "Error fetching currently playing song:",
        song_response.statusText
      );
      throw new Error(
        `Failed to fetch currently playing song: ${song_response.status}`
      );
    }
    const song_text = await song_response.text();
    if (song_text) {
      const song_data = JSON.parse(song_text);
      song = song_data?.item || null;
    } else {
      console.warn("Currently playing song response is empty.");
    }
  } catch (error) {
    console.error("Error fetching or parsing currently playing song:", error);
  }
  {
    /*}
  const recentSong_response = await mostRecentSong();
  const recentSong_data = await recentSong_response.json();
  const recentSong = recentSong_data.items || []; // Safely access the first track in the response
  console.log(recentSong);*/
  } //do this later, need to change the scope i think

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        tinkering on fun projects- coming soon!
      </h1>
      {/*<BlogPosts />*/}
      <div>Spotify</div>
      {/* Display Spotify currently playing song */}
      <div>Currently Playing</div>
      {song ? (
        <div>
          <p>
            {song.name} by{" "}
            {song.artists.map((artist: any) => artist.name).join(", ")}
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
        <p>No song is currently playing.</p>
      )}

      {/* Display Top Tracks */}
      <div>Top Tracks from last ~4 weeks</div>
      {tracks.length > 0 ? (
        <ul>
          {tracks.map((track) => (
            <li key={track.id}>
              {track.name} by{" "}
              {track.artists.map((artist) => artist.name).join(", ")}
              <br />
              <iframe
                src={`https://open.spotify.com/embed/track/${track.id}`}
                width="300"
                height="80"
                allow="encrypted-media"
              ></iframe>
            </li>
          ))}
        </ul>
      ) : (
        <p>No top tracks found.</p>
      )}
    </section>
  );
}
