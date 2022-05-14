import CreateForm from "../components/CreateForm";
import Playlists from "../components/Playlists";

export default function IndexPage() {
  return (
    <div>
      <h2>Playlists</h2>
      <CreateForm />
      <Playlists />
    </div>
  );
}
