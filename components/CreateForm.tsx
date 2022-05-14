import { FormEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { CreatePlaylistMutation } from "../generated/graphql";
import { GET_PLAYLISTS } from "./Playlists";

const CREATE_PLAYLIST = gql`
  mutation createPlaylist($name: String!) {
    createPlaylist(input: { name: $name }) {
      id
      name
    }
  }
`;

export default function CreateForm() {
  const [name, setName] = useState("");
  const [createPlaylist] = useMutation<CreatePlaylistMutation>(
    CREATE_PLAYLIST,
    {
      refetchQueries: [GET_PLAYLISTS],
    }
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createPlaylist({ variables: { name } });
    setName("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Create playlist</button>
    </form>
  );
}
