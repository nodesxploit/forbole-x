/* eslint-disable camelcase */
import { Dialog, DialogTitle, IconButton, DialogContent, Box, Typography } from '@material-ui/core'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import invoke from 'lodash/invoke'
import CloseIcon from '../../assets/images/icons/icon_cross.svg'
import useStyles from './styles'
import useIconProps from '../../misc/useIconProps'
import SelectRecipients from './SelectRecipients'
import { useWalletsContext } from '../../contexts/WalletsContext'
import { getEquivalentCoinToSend, getTokenAmountFromDenoms } from '../../misc/utils'
import useIsMobile from '../../misc/useIsMobile'
import { useGeneralContext } from '../../contexts/GeneralContext'
import ImageDefaultDark from '../../assets/images/image_default_dark.svg'
import ImageDefaultLight from '../../assets/images/image_default_light.svg'
import cryptocurrencies from '../../misc/cryptocurrencies'

interface SendDialogProps {
  account: Account
  availableTokens: AvailableTokens
  open: boolean
  onClose(): void
}

const SendDialog: React.FC<SendDialogProps> = ({ account, availableTokens, open, onClose }) => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const iconProps = useIconProps()
  const { password } = useWalletsContext()
  const isMobile = useIsMobile()
  const [loading, setLoading] = React.useState(false)
  const { theme } = useGeneralContext()
  const crypto = account ? cryptocurrencies[account.crypto] : Object.values(cryptocurrencies)[0]

  const availableAmount = React.useMemo(
    () => getTokenAmountFromDenoms(availableTokens.coins, availableTokens.tokens_prices),
    [availableTokens]
  )

  const confirm = React.useCallback(
    async (
      recipients: Array<{ amount: { amount: number; denom: string }; address: string }>,
      memo: string
    ) => {
      try {
        setLoading(true)
        const msgs = recipients
          .map((r) => {
            const coinsToSend = getEquivalentCoinToSend(
              r.amount,
              availableTokens.coins,
              availableTokens.tokens_prices
            )
            return {
              typeUrl: '/cosmos.bank.v1beta1.MsgSend',
              value: {
                fromAddress: account.address,
                toAddress: r.address,
                amount: [{ amount: coinsToSend.amount.toString(), denom: coinsToSend.denom }],
              },
            }
          })
          .filter((a) => a)
        await invoke(window, 'forboleX.sendTransaction', password, account.address, {
          msgs,
          memo,
        })
        setLoading(false)
        onClose()
      } catch (err) {
        setLoading(false)
      }
    },
    [availableTokens]
  )

  React.useEffect(() => {
    if (open) {
      setLoading(false)
    }
  }, [open])

  return (
    <Dialog
      fullWidth
      maxWidth={availableAmount[crypto.name]?.amount > 0 ? 'md' : 'sm'}
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
    >
      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseIcon {...iconProps} />
      </IconButton>
      <>
        <DialogTitle>{t('send')}</DialogTitle>
        {availableAmount[crypto.name]?.amount > 0 ? (
          <SelectRecipients
            loading={loading}
            account={account}
            availableAmount={availableAmount}
            onConfirm={confirm}
          />
        ) : (
          <DialogContent className={classes.dialogContent}>
            <Box justifyContent="center" display="flex" mt={6}>
              {theme === 'light' ? <ImageDefaultLight /> : <ImageDefaultDark />}
            </Box>
            <Box textAlign="center" mt={4} mb={8}>
              <Typography>{t('no available token yet')}</Typography>
            </Box>
          </DialogContent>
        )}
      </>
    </Dialog>
  )
}

export default SendDialog
