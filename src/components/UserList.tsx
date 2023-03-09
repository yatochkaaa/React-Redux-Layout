import React from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypeSelector'

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector(state => state.user)
  const { fetchUsers } = useActions()

  React.useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error !== null) {
    return <h1>{error}</h1>
  }

  return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                    {user.name}
                </div>
            )}
        </div>
  )
}

export default UserList
