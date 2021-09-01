const cryptocurrencies: { [key: string]: Cryptocurrency } = {
  DARIC: {
    name: 'DARIC',
    prefix: 'desmos',
    ledgerAppName: 'Desmos',
    ecosystem: 'cosmos',
    chainId: 'morpheus-apollo-2',
    chainName: 'Apollo 2 Testnet',
    image: '/static/images/cryptocurrencies/dsm.png',
    coinType: 852,
    graphqlHttpUrl: 'https://gql.morpheus.desmos.network/v1/graphql',
    graphqlWsUrl: 'wss://gql.morpheus.desmos.network/v1/graphql',
    blockExplorerBaseUrl: 'https://morpheus.desmos.network',
    rpcEndpoint: 'https://rpc.morpheus.desmos.network',
    ibcChains: [
      {
        name: 'Apollo 2 Testnet',
        image: '/static/images/cryptocurrencies/dsm.png',
        channel: 'channel 1',
        chainId: 'morpheus-apollo-2',
        addressPrefix: 'desmos',
        crypto: 'DARIC',
      },
    ],
    defaultGasFee: {
      amount: {
        amount: 0.01,
        denom: 'udaric',
      },
      gas: {
        '/cosmos.bank.v1beta1.MsgSend': '200000',
        '/cosmos.staking.v1beta1.MsgDelegate': '400000',
        '/cosmos.staking.v1beta1.MsgBeginRedelegate': '400000',
        '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': '200000',
        '/cosmos.staking.v1beta1.MsgUndelegate': '400000',
        '/ibc.applications.transfer.v1.MsgTransfer': '400000',
        '/cosmos.gov.v1beta1.MsgSubmitProposal': '400000',
        '/cosmos.gov.v1beta1.MsgDeposit': '400000',
        '/cosmos.gov.v1beta1.MsgVote': '400000',
      },
    },
  },
}

export default cryptocurrencies
