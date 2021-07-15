import { makeStyles } from '@material-ui/core/styles'

// Making hook = funciton call makeStyles - we pass in call back function immediately return object returing all the styles
const useStyles = makeStyles((theme) => ({
    // Styles from Material-ui
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },

    icon: {
        marginRight: '20px',
    },

    button: {
        marginTop: '40px',
    },

    cardGrid: {
        padding: '20px 0',
    },

    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    cardMedia: {
        paddingTop: '56.25%' // 16:9 ratio
    },

    cardContent: {
        flexgrow: '1',
    },

    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));

export default useStyles