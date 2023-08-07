import { gql, useQuery } from '@apollo/client'
import {
  Container,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { DateTime } from 'luxon'

const GET_SYNC_STATUS = gql`
  query GetSyncStatus {
    syncStatus(orderBy: { interval: ASC }) {
      name
      lastSync
      nextSync
      interval
    }
  }
`
const StatusPage = () => {
  const { data, loading, error } = useQuery(GET_SYNC_STATUS, {
    pollInterval: 5000
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Container maxW={'70%'}>
      <TableContainer>
        <Table variant={'simple'}>
          <TableCaption placement={'top'}>Sync Status</TableCaption>
          <Thead>
            <Tr>
              <Th>Resource</Th>
              <Th>Until Next Sync</Th>
              <Th>Last Sync</Th>
              <Th>Next Sync</Th>
              <Th>Interval</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.syncStatus.map((status: any) => (
              <Tr key={status.name}>
                <Th>{status.name}</Th>
                <Th>{DateTime.fromISO(status.nextSync).toRelative()}</Th>
                <Th>
                  {DateTime.fromISO(status.lastSync).toLocaleString(
                    DateTime.DATETIME_FULL_WITH_SECONDS
                  )}
                </Th>
                <Th>
                  {DateTime.fromISO(status.nextSync).toLocaleString(
                    DateTime.DATETIME_FULL_WITH_SECONDS
                  )}
                </Th>
                <Th>{status.interval}</Th>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default StatusPage
