import React from 'react'
import { Box, Divider, Typography, useTheme } from '@material-ui/core'
import useTranslation from 'next-translate/useTranslation'
import WithdrawIcon from '../../../assets/images/icons/icon_withdraw_tx.svg'
import ValidatorAvatar from '../../ValidatorAvatar'
import cryptocurrencies from '../../../misc/cryptocurrencies'

interface SetWithdrawAddressContentProps {
  msgs: TransactionMsgSetWithdrawAddress[]
  account: Account
}

const SetWithdrawAddressContent: React.FC<SetWithdrawAddressContentProps> = ({ msgs, account }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" my={4}>
        <Typography variant="h4">{t('edit reward address')}</Typography>
      </Box>
      <Divider />
      {msgs.map((msg, i) => (
        <React.Fragment key={String(i)}>
          <Box my={1}>
            <Typography>{t('delegator address')}</Typography>
            <Typography color="textSecondary">{msg.value.delegatorAddress}</Typography>
          </Box>
          <Divider />
          <Box my={1}>
            <Typography>{t('new reward address')}</Typography>
            <Typography color="textSecondary">{msg.value.withdrawAddress}</Typography>
          </Box>
          <Divider />
        </React.Fragment>
      ))}
    </>
  )
}

export default SetWithdrawAddressContent
