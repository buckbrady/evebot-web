import { gql, useQuery } from '@apollo/client'

const GET_SYNC_STATUS = gql`
  query GetSyncStatus {
    syncStatus {
      name
      lastSync
      nextSync
      interval
    }
  }
`
const StatusPage = () => {
  const { data, loading, error } = useQuery(GET_SYNC_STATUS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <h1>Status Page</h1>
      {data.syncStatus}
    </div>
  )
}

export default StatusPage
