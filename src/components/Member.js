import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import {Link} from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/database";

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

class Member extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nName:"",
            nAccount:"",
            nPassword:"",
            nProfile:"",
        }
        const firebaseConfig = {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            databaseURL: process.env.DATABASE_URL,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
        };
        firebase.initializeApp(firebaseConfig);
    }
    onChangeValue(event){
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Container className={classes.constyle}>
                    <Typography align="center" variant="h3" style={{margin:"30px"}}>
                        アカウント登録
                    </Typography>
                    <Typography>※は必須項目です</Typography>
                    <Paper className={classes.paper}>
                        <div className={classes.standard}>
                            <TextField style={{backgroundColor:"#EEFFFF"}}  margin="dense" 
                                variant="outlined" fullWidth="true" label="ニックネーム" 
                                required="true" name="nName" onChange={(e) => this.onChangeValue(e)}/>
                            <TextField style={{backgroundColor:"#EEFFFF"}} type="email" margin="dense" 
                                variant="outlined" fullWidth="true" label="メールアドレス" 
                                required="true" name="nAccount" onChange={(e) => this.onChangeValue(e)}/>
                            <TextField style={{backgroundColor:"#EEFFFF"}} type="password" margin="dense" 
                                variant="outlined" fullWidth="true" label="パスワード" 
                                required="true" name="nPassword" onChange={(e) => this.onChangeValue(e)}/>
                            <TextField style={{backgroundColor:"#EEFFFF"}} margin="dense"
                                variant="outlined" fullWidth="true" label="プロフィール" 
                                multiline="true" rows="5" name="nProfile" onChange={(e) => this.onChangeValue(e)}/>
                            <Button fullWidth="true" style={{marginTop:"10%",backgroundColor:"#0000CC",color:"white"}}>登録</Button>
                            <Link to="/">
                                <Typography style={{marginTop:"30px",textDecoration:"none"}}>ログイン画面へ</Typography>
                            </Link>
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Member);