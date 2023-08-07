import { gql, useQuery } from '@apollo/client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartOptions,
  Decimation
} from 'chart.js'
import 'chartjs-adapter-luxon'
import { Line } from 'react-chartjs-2'
import { DateTime } from 'luxon'
import {
  Divider,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber
} from '@chakra-ui/react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Decimation
)

export const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  animation: false,
  // parsing: true,
  // interaction: {
  //   mode: 'nearest',
  //   axis: 'x',
  //   intersect: false
  // },
  // options: {
  plugins: {
    decimation: {
      enabled: true,
      algorithm: 'lttb'
    }
  },
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'day'
      }
    }
  }
}

// language=GraphQL
const SERVER_STATS_24_HOURS = gql`
  query GetServerStats24Hours {
    status(orderBy: { timestamp: ASC }, limit: 86400) {
      players
      serverVersion
      startTime
      timestamp
      vip
    }
  }
`
// language=GraphQL
const SERVER_STATS_NOW = gql`
  query GetServerStatsNow {
    status(orderBy: { timestamp: DESC_NULLS_LAST }, limit: 1) {
      players
      serverVersion
      startTime
      timestamp
      vip
    }
  }
`

const ServerStatsNow = () => {
  const { data, loading, error } = useQuery(SERVER_STATS_NOW, {
    pollInterval: 15000
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Flex direction={'row'} align={'center'} textAlign={'center'}>
      <Stat>
        <StatLabel>Server</StatLabel>
        <StatNumber>{data.status[0].vip ? 'No' : 'Yes'}</StatNumber>
        <StatHelpText>Online</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Players</StatLabel>
        <StatNumber>{data.status[0].players}</StatNumber>
        <StatHelpText>Online</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Server</StatLabel>
        <StatNumber>{data.status[0].serverVersion}</StatNumber>
        <StatHelpText>Version</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Server Start Time</StatLabel>
        <StatNumber>
          {DateTime.fromISO(data.status[0].startTime).toLocaleString({
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23'
          })}
        </StatNumber>
        <StatHelpText>{DateTime.local().zoneName}</StatHelpText>
      </Stat>
    </Flex>
  )
}

const ServerStats24Hours = () => {
  const { data, loading, error } = useQuery(SERVER_STATS_24_HOURS, {
    pollInterval: 300000
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const now = DateTime.now()
  const chartPoints: { x: number; y: number }[] = []
  const labels: number[] = []
  for (let i = 0; i < data.status.length; i++) {
    chartPoints.push({
      x: DateTime.fromISO(data.status[i].timestamp).toMillis(),
      y: data.status[i].players
    })
  }
  for (let i = 48; i > 0; i--) {
    labels.push(now.minus({ hours: i }).toMillis())
  }
  const chartData = {
    // labels: labels,
    datasets: [
      {
        label: 'Players Online',
        radius: 1,
        borderWidth: 2,
        borderColor: 'rgba(38, 194, 129, 1)',
        data: chartPoints
      }
    ]
  }

  return <Line options={chartOptions} data={chartData} />
}

const ServerStats = () => {
  return (
    <>
      <ServerStatsNow />
      <Divider />
      <ServerStats24Hours />
    </>
  )
}

export default ServerStats
