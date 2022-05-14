import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { GetPlaylistsQuery } from "../generated/graphql";

export const GET_PLAYLISTS = gql`
  query GetPlaylists {
    playlists {
      id
      name
    }
  }
`;

export default function Playlists() {
  const { data } = useQuery<GetPlaylistsQuery>(GET_PLAYLISTS);
  console.log(data)
  return (
    <ul>
      {data?.playlists.map((playlist) => (
        <li key={playlist.id}>
          <Link href={`/playlists/${playlist.id}`}>{playlist.name}</Link>
        </li>
      ))}
    </ul>
  );
}
