import { gql, useQuery } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query RecentLaunches {
    launchesPast(limit: 10) {
      mission_name
    }
  }
`;

function RecentLaunches() {
  const { data, loading, error } = useQuery(LAUNCHES_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <h1>Launches</h1>
      {data.launchesPast.map((launch) => (
        <div>{launch.mission_name}</div>
      ))}
    </div>
  );
}

export default function IndexPage() {
  return (
    <div>
      <h2>Hello World</h2>
      <RecentLaunches />
    </div>
  );
}
