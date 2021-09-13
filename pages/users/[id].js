import { useRouter } from "next/dist/client/router";

export default function () {
  const {query} = useRouter();
  return (
    <div>
      <h1>User with id {query.id}</h1>
    </div>
    )
}