import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { GetPlaylistQuery } from "../../generated/graphql";
import AddVideo from "../../components/AddVideo";

export const GET_PLAYLIST = gql`
  query GetPlaylist($id: ID!) {
    playlist(id: $id) {
      id
      name
      videos {
        videoId
        title
      }
    }
  }
`;

export default function Playlists() {
  const router = useRouter();
  const { playlistId } = router.query;

  const { data, loading } = useQuery<GetPlaylistQuery>(GET_PLAYLIST, {
    variables: { id: playlistId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.playlist) {
    return <h1>Playlist not found</h1>;
  }

  const onRemove = (videoId: string) => {
    //TODO: Remove the video
    console.log(`Removing ${videoId} from ${playlistId}`);
  };

  return (
    <div>
      <h2>{data.playlist.name}</h2>
      <AddVideo playlistId={data.playlist.id} />
      <ul>
        {data.playlist.videos?.map((video) => (
          <li key={video.videoId}>
            <span>{video.title}</span>{" "}
            <button onClick={() => onRemove(video.videoId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
