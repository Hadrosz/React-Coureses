import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
  {
    username: 'johnsmith',
    name: 'John Smith',
    isFollowing: true,
  },
  {
    username: 'janedoe',
    name: 'Jane Doe',
    isFollowing: false,
  },
  {
    username: 'sarahjones',
    name: 'Sarah Jones',
    isFollowing: true,
  },
  {
    username: 'mikebrown',
    name: 'Mike Brown',
    isFollowing: false,
  },
  {
    username: 'emilywilson',
    name: 'Emily Wilson',
    isFollowing: true,
  },
  {
    username: 'davidmiller',
    name: 'David Miller',
    isFollowing: false,
  },
  {
    username: 'maryjackson',
    name: 'Mary Jackson',
    isFollowing: true,
  },
  {
    username: 'peterlee',
    name: 'Peter Lee',
    isFollowing: false,
  },
  {
    username: 'amycarter',
    name: 'Amy Carter',
    isFollowing: true,
  },
  {
    username: 'roberttaylor',
    name: 'Robert Taylor',
    isFollowing: false,
  },
]

export const App = () => {
  return (
    <>
      {users.map(({ username, name, isFollowing }) => (
        <TwitterFollowCard
          key={username}
          username={username}
          isFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </>
  )
}

export default App
