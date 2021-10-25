import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from '@material-ui/core'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { format } from 'date-fns'
import TablePagination from '../TablePagination'
import CloseIcon from '../../assets/images/icons/icon_cross.svg'
import useStyles from './styles'
import useIconProps from '../../misc/useIconProps'
import { formatTokenAmount } from '../../misc/utils'

interface VestingDialogProps {
  open: boolean
  onClose(): void
  account: Account
  totalAmount: TokenAmount
  vestingPeriods: VestingPeriod[]
}

const VestingDialog: React.FC<VestingDialogProps> = ({
  open,
  onClose,
  account,
  totalAmount,
  vestingPeriods,
}) => {
  const { t, lang } = useTranslation('common')
  const classes = useStyles()
  const iconProps = useIconProps()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={onClose}>
      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseIcon {...iconProps} />
      </IconButton>
      <DialogTitle>{t('vesting')}</DialogTitle>
      <DialogContent>
        <Box m={1}>
          <Typography>{t('total vesting')}</Typography>
          <Typography variant="h5">
            {formatTokenAmount(totalAmount, account.crypto, lang)}
          </Typography>
        </Box>
        <Box my={2}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>{t('amount')}</TableCell>
                <TableCell align="right" className={classes.tableCell}>
                  {t('vesting period date')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vestingPeriods.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((v) => {
                return (
                  <TableRow key={v.date} className={classes.tableRow}>
                    <TableCell className={classes.tableCell}>
                      {formatTokenAmount(v.amount, account.crypto, lang)}
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell}>
                      {format(v.date, 'dd MMM, yyyy HH:mm')}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          <TablePagination
            page={page}
            rowsPerPage={rowsPerPage}
            rowsCount={vestingPeriods.length}
            onPageChange={setPage}
            onRowsPerPageChange={setRowsPerPage}
          />
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default VestingDialog
