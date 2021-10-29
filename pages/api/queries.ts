import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import useAlert from "../hooks/set-alert";

export const GET_EVENTS = gql`
query Events {
  events {
    id
    value
    timestamp
  }
}
`;

export default function eventData() {

  const { open, setOpen } = useAlert()

  const { error, loading, data } = useQuery(GET_EVENTS);

  useEffect(() => {
    if (data) {
      setOpen(true)
    }
  }, [data])

  if (data) {
    return data
  } else return loading || error
}