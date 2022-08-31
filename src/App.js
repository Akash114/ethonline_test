import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import Profile from './components/Profile'

function App() {

  const client_ = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
  })


  return(
    <div className="App">

    <WagmiConfig client={client_}>
      <Profile />
    </WagmiConfig>

      {/* <Conversations /> */}

    </div>
  );
}

export default App;
