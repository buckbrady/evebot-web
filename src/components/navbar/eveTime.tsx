import { Center, Text, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'

const EVETime = () => {
  const [eveTime, setEveTime] = useState('')
  const [localTime, setLocalTime] = useState('')
  const dsLocal = DateTime.local()
  const dsEVE = dsLocal.setZone('GMT')

  useEffect(() => {
    const interval = setInterval(() => {
      setEveTime(
        dsEVE.toLocaleString({
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hourCycle: 'h23'
        })
      )
      setLocalTime(
        dsLocal.toLocaleString({
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hourCycle: 'h23'
        })
      )
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <Center>
      <Text>Time: </Text>
      <Stack direction={'column'} paddingLeft={'10px'} textAlign={'center'}>
        <Text as={'sup'}>EVE</Text>
        <Text as={'sub'}>{eveTime}</Text>
      </Stack>
      <Stack direction={'column'} paddingLeft={'10px'} textAlign={'center'}>
        <Text as={'sup'}>POD</Text>
        <Text as={'sub'}>{localTime}</Text>
      </Stack>
    </Center>
  )
}

export default EVETime
