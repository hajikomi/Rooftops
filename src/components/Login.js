import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

class Login extends React.Component{
    render(){
        const classes = useStyles();
        return(
            <div>
                <Container maxWidth="md">
                    <Typography align="center" variant="h3">
                        Roof Tops
                        <Button　className={classes.root}>テスト</Button>
                    </Typography>
                    <Button　color="inherit" size="large" variant="contained">
                        ログイン
                    </Button>
                </Container>
            </div>
        );
    }
}

export default Login