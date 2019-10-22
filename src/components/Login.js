import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from "react-router-dom";

const styles = (theme) => ({
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
        [theme.breakpoints.down('sm')]: {
            width:"80%",
          },
    },
    input:{
        border:1,
        borderRadius: 3,
    },
    standard:{
        textAlign:"left",
        width:"70%",
        margin:"0 auto",
        [theme.breakpoints.down('sm')]: {
            width:"90%",
        },
    },
})

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            click:false,
            account:"",
            password:"",
            members:[],
            key:[]
        }
    }
    changeAccount(event){
        this.setState({account:event.target.value})
    }
    changePassword(event){
        this.setState({password:event.target.value})
    }
    changeClick(){
        this.setState({click:!this.state.click});
    }
    passChange(){
        if (this.state.click) {
            return(
                <TextField style={{backgroundColor:"#EEFFFF"}} type="text" margin="dense" 
                            variant="outlined" fullWidth="true" label="パスワード" required="true" onChange={(e) => this.changePassword(e)}/>
            );
        }else{
            return(
                <TextField style={{backgroundColor:"#EEFFFF"}} type="password" margin="dense" 
                                variant="outlined" fullWidth="true" label="パスワード" required="true" onChange={(e) => this.changePassword(e)}/>
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
                            <TextField style={{backgroundColor:"#EEFFFF"}} type="email" margin="dense" 
                            variant="outlined" fullWidth="true" label="アカウント" required="true" onChange={(e) => this.changeAccount(e)}/>
                            {this.passChange()}                            
                            <FormControlLabel control={<Checkbox color="default" checked={this.state.click} onClick={() => this.changeClick()}/>} label="パスワードを表示する" />         
                            <Link to="/Member" style={{textDecoration:"none"}}>
                                <Button fullWidth="true" style={{marginTop:"10%",backgroundColor:"#00CC00",color:"white"}}>ログイン</Button>
                            </Link>
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }
}

//Login.propTypes = {
    //classes:PropTypes.object,
//};

export default withStyles(styles)(Login);