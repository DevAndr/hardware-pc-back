import useSwr from 'swr'
import Link from 'next/link'
import axios from "axios";

const fetcher = (url) => fetch(url).then((res) => res.json())
const fetchData = async() => {
  const res = await axios('/api/test');
  return res.data;
  // setData(res.data)
  // console.log(res.data)
}

export default function Index() {
  const { data, error } = useSwr('/api/users', fetcher)
  const { hw, errorHw } = useSwr('/api/users', fetchData)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`}>
            <a>{`User ${user.id}`}</a>
          </Link>
        </li>
      ))}
      {
        JSON.stringify(hw)
      }
    </ul>
  )
}
