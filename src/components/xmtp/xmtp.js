import { useAccount, useSigner,useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Client } from '@xmtp/xmtp-js'
import {useState, useEffect} from 'react'



function Profile() {  
  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  const { data } = useSigner()

  const [client, setClient] = useState(null);


  console.log(data);


  const getXmtp = async (wallet) => {
    console.log(data);
    console.log(wallet);
    const xmtp = await Client.create(data)
    console.log(xmtp);
    setClient(xmtp);
    const allConversations = await xmtp.conversations.list()
    console.log(allConversations);

  }

  const getConversation = async (xmtp) => {
    const conversations = xmtp.conversations
    const allConversations = await xmtp.conversations.list()
    console.log(allConversations);
    // for (const conversation of allConversations) {
    //   console.log(`Saying GM to ${conversation.peerAddress}`)
    //   await conversation.send('gm')
    // }    
  }

  // const xmtp = await Client.create(signer)

  if (address)
    return (
      <div>
        Connected to {address}
        <button onClick={() => getXmtp()}>client</button>

        <button onClick={() => getConversation(client)}>Get Conversations</button>

        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  return <button onClick={() => connect()}>Connect Wallet</button>
}

export default Profile;