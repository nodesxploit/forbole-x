import { makeStyles } from '@material-ui/core/styles'
import { CustomTheme } from '../../misc/theme'

const useStyles = makeStyles(
  (theme: CustomTheme) => ({
    container: {
      padding: theme.spacing(2),
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.menuBackground,
      },
    },
    name: {
      marginLeft: theme.spacing(1),
    },
    timeRangeButton: {
      borderColor: theme.palette.iconBorder,
      margin: theme.spacing(0, 1),
    },
    account: {
      '& svg': {
        overflow: 'visible',
      },
    },
  }),
  {
    name: 'HookGlobalStyles',
    index: 2,
  }
)

export default useStyles
