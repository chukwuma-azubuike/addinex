import { useQuery, gql } from "@apollo/client";

export default function EventData() {

  const GET_EVENTS = gql`
  query {
    events {
      id
      value
      timestamp
    }
  }
`;

  interface Event {
    id: number
    value: number
    timestamp: number
  }

  const { error, loading, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error occured: (</p>

  if (data) {
    console.log(data)
    return data.events.map(({ id, value, timestamp }: Event) => (
      <div key={id}>
        <p>
          {id}: {value} : {timestamp}
        </p>
      </div>
    ));
  }
}