import { makeStyles } from '@material-ui/core/styles'
import { CustomTheme } from '../../misc/theme'

const useStyles = makeStyles(
  (theme: CustomTheme) => ({
    button: {
      flex: 1,
    },
    card: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(1, 2),
      boxShadow: theme.shadows[7],
      position: 'absolute',
      zIndex: 1000,
      left: 0,
      right: 0,
    },
    closeButton: {
      position: 'absolute',
      top: theme.spacing(2),
      right: theme.spacing(2),
    },
    backButton: {
      position: 'absolute',
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
    dialogContent: {
      overflowY: 'auto',
    },
    marginLeft: {
      marginLeft: theme.spacing(1),
    },
    marginBottom: {
      marginBottom: theme.spacing(2),
    },
    avatar: {
      width: theme.spacing(3.5),
      height: theme.spacing(3.5),
    },
    largeAvatar: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      marginRight: theme.spacing(1),
    },
    percentageTextField: {
      width: theme.spacing(16),
      marginLeft: theme.spacing(2),
    },
    numberInput: {
      paddingRight: 0,
      marginRight: theme.spacing(-1),
    },
    fullWidthButton: {
      flex: 1,
      margin: theme.spacing(4, 2),
    },
    listItem: {
      '&:hover': {
        backgroundColor: theme.palette.grey[100],
      },
    },
  }),
  {
    name: 'HookGlobalStyles',
    index: 2,
  }
)

export default useStyles
