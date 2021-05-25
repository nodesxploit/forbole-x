/* eslint-disable camelcase */
declare module '*.svg' {
  const content: any
  export default content
}

interface Account {
  walletId: string
  address: string
  crypto: string
  index: number
  name: string
  fav: boolean
  createdAt: number
}

type TokenAmount = {
  [unit: string]: {
    amount: number
    price: number
  }
}

interface AccountBalance {
  balance: {
    available: TokenAmount
    delegated: TokenAmount
    rewards: TokenAmount
    commissions: TokenAmount
    unbonding: TokenAmount
  }
  timestamp: number
}

interface AccountWithBalance extends Account {
  balances: AccountBalance[]
}

interface CreateAccountParams {
  walletId: string
  crypto: string
  name: string
}

interface UpdateAccountParams {
  name?: string
  fav?: boolean
}

interface Wallet {
  name: string
  id: string
  createdAt: number
}

interface WalletBalance {
  balance: number // in USD
  timestamp: number
}

interface WalletWithBalance extends Wallet {
  balances: WalletBalance[]
}

interface Cryptocurrency {
  name: string
  image: string
  coinType: number
  graphqlHttpUrl: string
  graphqlWsUrl: string
  blockExplorerBaseUrl: string
  defaultGasFee: {
    amount: Array<{ amount: string; denom: string }>
    gas: string
  }
}

interface Validator {
  rank: number
  address: string
  image: string
  name: string
  commission: number
  votingPower: number
  selfRatio: number
  status: string
  isActive: boolean
  rewards?: TokenAmount
  delegated?: TokenAmount
  unbonding?: TokenAmount
}

interface Unbonding {
  amount: TokenAmount
  validator: {
    address: string
    image: string
    name: string
  }
  height: number
  completionDate: Date
}

interface Redelegation {
  amount: TokenAmount
  fromValidator: {
    address: string
    image: string
    name: string
  }
  toValidator: {
    address: string
    image: string
    name: string
  }
  height: number
  completionDate: Date
}

interface Activity {
  ref: string
  date: string
  tab: string
  tag: string
  success: boolean
  detail?: any
  amount?: TokenAmount
}

interface VoteDetail {
  voter: {
    name: string
    image: string
  }
  votingPower: number
  votingPowerPercentage: number
  votingPowerOverride: number
  answer: string
}

interface DepositDetail {
  depositor: {
    name: string
    image: string
    address: string
  }
  amount: TokenAmount
  time: string
}

interface Proposal {
  id: number
  proposer: {
    name: string
    address: string
    image: string
  }
  type: string
  isActive: boolean
  tag: string
  title: string
  description: string
  votingStartTime: string
  votingEndTime: string
  submitTime: string
  depositEndTime: string
  duration: number
  depositDetails?: DepositDetail[]
  voteDetails?: VoteDetail[]
}

interface TokenUnit {
  denom: string
  exponent: number
  token: {
    token_units: Array<{
      denom: string
      exponent: number
    }>
  }
}

interface TokenPrice {
  unit_name: string
  price: number
  timestamp: string
  token_unit: TokenUnit
}

interface CreateWalletParams {
  name: string
  cryptos: string[]
  mnemonic: string
  securityPassword: string
}

interface UpdateWalletParams {
  name?: string
  securityPassword?: string
  newSecurityPassword?: string
}

interface TransactionMsgDelegate {
  type: 'delegate'
  delegator: string
  validator: string
  amount: number
  denom: string
}

interface TransactionMsgUndelegate {
  type: 'undelegate'
  delegator: string
  validator: string
  amount: number
  denom: string
}

interface TransactionMsgRedelegate {
  type: 'redelegate'
  delegator: string
  fromValidator: string
  toValidator: string
  amount: number
  denom: string
}

interface TransactionMsgWithdrawReward {
  type: 'withdraw reward'
  delegator: string
  validator: string
}

interface TransactionMsgSend {
  type: 'send'
  from: string
  to: string
  amount: number
  denom: string
}

type TransactionMsg =
  | TransactionMsgDelegate
  | TransactionMsgUndelegate
  | TransactionMsgRedelegate
  | TransactionMsgWithdrawReward
  | TransactionMsgSend

type ChromeMessage =
  | {
      event: 'ping'
    }
  | { event: 'reset' }
  | {
      event: 'getWallets'
      data: { password: string }
    }
  | {
      event: 'getAccounts'
      data: { password: string }
    }
  | {
      event: 'addWallet'
      data: { wallet: CreateWalletParams; password: string }
    }
  | {
      event: 'updateWallet'
      data: { wallet: UpdateWalletParams; id: string; password: string }
    }
  | {
      event: 'deleteWallet'
      data: { id: string; password: string }
    }
  | {
      event: 'addAccount'
      data: { account: CreateAccountParams; password: string; securityPassword: string }
    }
  | {
      event: 'updateAccount'
      data: { account: UpdateAccountParams; address: string; password: string }
    }
  | {
      event: 'deleteAccount'
      data: { address: string; password: string }
    }
  | {
      event: 'generateMnemonic'
    }
  | {
      event: 'verifyMnemonic'
      data: {
        mnemonic: string
      }
    }
  | {
      event: 'verifyMnemonicBackup'
      data: {
        backupPhrase: string
        password: string
      }
    }
  | {
      event: 'viewMnemonicPhrase'
      data: {
        id: string
        securityPassword: string
        password: string
      }
    }
  | {
      event: 'viewMnemonicPhraseBackup'
      data: {
        id: string
        securityPassword: string
        backupPassword: string
        password: string
      }
    }
  | {
      event: 'signAndBroadcastTransactions'
      data: {
        address: string
        securityPassword: string
        password: string
        transactions: any[]
        gasFee: any
        memo?: string
      }
    }
