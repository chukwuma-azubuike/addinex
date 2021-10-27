import { useQuery, gql } from "@apollo/client";

export default function eventData() {

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

  if (data) {
    return data
  }
}