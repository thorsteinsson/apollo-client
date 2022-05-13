import { FormEvent, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  CreatePlaylistMutation,
  GetPlaylistsQuery,
} from "../generated/graphql";

const GET_PLAYLISTS = gql`
  query getPlaylists {
    playlists {
      id
      name
    }
  }
`;

const CREATE_PLAYLIST = gql`
  mutation createPlaylist($name: String!) {
    createPlaylist(input: { name: $name }) {
      id
      name
    }
  }
`;

export default function IndexPage() {
  const { data } = useQuery<GetPlaylistsQuery>(GET_PLAYLISTS);
  const [createPlaylist] = useMutation<CreatePlaylistMutation>(
    CREATE_PLAYLIST,
    {
      refetchQueries: [GET_PLAYLISTS],
    }
  );
  const [name, setName] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createPlaylist({ variables: { name } });
    setName("");
  };

  return (
    <div>
      <h2>Playlists</h2>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Create playlist</button>
      </form>
      {data?.playlists.map((playlist) => (
        <div key={playlist.id}>
          <h3>{playlist.name}</h3>
        </div>
      ))}
    </div>
  );
}
