import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  (theme) => ({
    table: {
      border: `1px solid ${theme.palette.grey[100]}`,
      borderRadius: theme.shape.borderRadius,
    },
    tableRow: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
    tableCell: {
      borderBottom: 'none',
    },
    validatorAvatar: {
      width: theme.spacing(3.5),
      height: theme.spacing(3.5),
      marginRight: theme.spacing(1),
    },
    tabIndicator: {
      backgroundColor: theme.palette.text.primary,
    },
  }),
  {
    name: 'HookGlobalStyles',
    index: 2,
  }
)

export default useStyles