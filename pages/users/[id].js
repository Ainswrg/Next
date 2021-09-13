import { useRouter } from "next/dist/client/router";
import styles from '../../styles/User.module.scss';

export default function User({user}) {
  const {query} = useRouter();
  return (
    <div className={styles.user}>
      <h1>User with id {query.id}</h1>
      <div>User name - {user.name}</div>
    </div>
    )
}


export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: {user}, // will be passed to the page component as props
  }
}