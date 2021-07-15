import React from 'react';
// Name import - not the default one { }
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import useStyles from './styles';

// Making hook = funciton call makeStyles - we pass in call back function immediately return object returing all the styles
/*
const useStyles = makeStyles((theme) => ({
    // Styles from Material-ui
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    }
})); // Make another styles.js and export from there --> const classes = useStyles(); 
     // --> can use className on dom element 
*/

// 9 different images - loop over the images 
// cards.map(() => )
const cards = [1,2,3,4,5,6,7,8,9]

// Functional react componenet
// Where we can learn more of material-ui props: ComponenetAPI https://material-ui.com/api/typography/
const App = () => {
    const classes = useStyles();
    return (
        <header>
            <CssBaseline /> 
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" style={{marginTop: '50px'}}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone this is a photo album and I'm trying to make this sentence as long as possible so that I can see how it would be seen on the screen
                        </Typography>
                        
                    <div className={classes.button}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    
                    <Grid container spaceing={4}>
                        {cards.map((card) => (
                            // making into responsive design of the size, xs, sm, md
                            <Grid item key ={card} xs={12} sm={6} md={4}> 
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Random Image"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterbottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer classNmame={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="text-secondary">
                            Something here to give the footer a purpose!
                    </Typography>
            </footer>
        </header>
    );
}

export default App;