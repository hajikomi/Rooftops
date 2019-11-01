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
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import * as firebase from "firebase/app";
import "firebase/database";
//import Portal from './Portal'

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
    text:{
        width:"90%",
        margin:"0 auto"
    }
})

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            click:false,
            account:"",
            password:"",
            members:[],
            key:[],
            flag:false
        }
        this.flagClose=this.flagClose.bind(this)
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
    componentDidMount() {
        const messagesRef = firebase.database().ref('Members');
        messagesRef.on('value', snapshot => {
            const messageObject = snapshot.val();
            //console.log(messageObject);
            if (messageObject) {
                for (var key in messageObject) {
                    const obj = messageObject[key]
                    this.setState({
                        members:this.state.members.concat(obj),
                        key:this.state.key.concat(key)
                    })
                    console.log(obj);
                    console.log(key)
                }
            }
        });
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
    flagClose(){
        this.setState({flag:false});
    }
    openCheck(){
        const {classes} = this.props;
        return(
            <Dialog open={this.state.flag} onClose={this.flagClose} fullwidth="true">
                <DialogTitle>入力確認メッセージ</DialogTitle>
                    <DialogContentText className={classes.text}>
                        必須項目に漏れがあります。
                    </DialogContentText>
                <DialogActions>
                    <Button onClick={this.flagClose}>確認</Button>
                </DialogActions>
            </Dialog>
        );
    }
    btnClick(){
        const members = this.state.members
        if (this.state.account == "" && this.state.password =="") {
            this.setState({flag:true});
        }else{
            this.setState({flag:false});


        }
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
                            variant="outlined" fullWidth="true" label="メールアドレス" required="true" onChange={(e) => this.changeAccount(e)}/>
                            {this.passChange()}                            
                            <FormControlLabel control={<Checkbox color="default" checked={this.state.click} onClick={() => this.changeClick()}/>} label="パスワードを表示する" />         
                            <Link to="/Portal">
                                <Button onClick={() => this.btnClick()} fullWidth="true" style={{marginTop:"10%",backgroundColor:"#00CC00",color:"white"}}>ログイン</Button>
                            </Link>
                            <Link to="/Member">
                                <Typography style={{marginTop:"20px",textDecoration:"none"}}>新規登録画面へ</Typography>
                            </Link>
                            {this.openCheck()}
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