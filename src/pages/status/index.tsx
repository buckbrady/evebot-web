import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react'
import SyncStatus from '@pages/status/syncStatus.tsx'
import ServerStats from '@pages/status/serverStats.tsx'

const StatusPage = () => {
  return (
    <Container maxW={'90%'} paddingTop={'1em'}>
      <Tabs>
        <TabList>
          <Tab>Server Stats</Tab>
          <Tab>Sync Stats</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ServerStats />
          </TabPanel>
          <TabPanel>
            <SyncStatus />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default StatusPage
