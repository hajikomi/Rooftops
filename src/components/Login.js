import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = {
    constyle:{
        margin:0,
        padding:0,
        fontFamily: "メイリオ",
        boxSizing: "border-box",
        textDecoration: "none",
        listStyleType: "none",
        textAlign:"center",
    },
    paper:{
        margin:"0 auto",
        padding:"3% 5%",
        width:"45%",
    
        backgroundColor:"#EEEEEE",
        textAlign:"center",
    },
    input:{
        border:1,
        borderRadius: 3,
    },
    standard:{
        textAlign:"left",
        width:"70%",
        margin:"0 auto",
    }
}

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            click:false
        }
    }
    changeClick(){
        this.setState({click:!this.state.click});
    }
    passChange(){
        if (this.state.click) {
            return(
                <TextField style={{backgroundColor:"#EEFFFF"}} type="text" margin="dense" 
                            variant="outlined" fullWidth="true" label="パスワード" required="true"/>
            );
        }else{
            return(
                <TextField style={{backgroundColor:"#EEFFFF"}} type="password" margin="dense" 
                                variant="outlined" fullWidth="true" label="パスワード" required="true"/>
            );
        }
    }


    render(){
        const { classes } = this.props;
        return(
            <div>
                <Container className={classes.constyle}>
                    <Typography align="center" variant="h3" style={{margin:"30px"}}>
                        Roof Tops
                    </Typography>
                    <Paper className={classes.paper}>
                        <div className={classes.standard}>
                            <TextField style={{backgroundColor:"#EEFFFF"}} margin="dense" 
                            variant="outlined" fullWidth="true" label="アカウント" required="true"/>
                            {this.passChange()}                            
                            <FormControlLabel control={<Checkbox color="default" checked={this.state.click} onClick={() => this.changeClick()}/>} label="パスワードを表示する" />         
                            <Button fullWidth="true" style={{marginTop:"10%",backgroundColor:"#00CC00",color:"white"}}>ログイン</Button>
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }
}

//Login.propTypes = {
    //classes: PropTypes.object,
//};

export default withStyles(styles)(Login);