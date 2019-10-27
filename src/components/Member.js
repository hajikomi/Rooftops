import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
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
    text:{
        width:"90%",
        margin:"0 auto"
    }
})

class Member extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nName:"",
            nAccount:"",
            nPassword:"",
            nProfile:"",
            checkflag:false,
            open:false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.flagClose = this.flagClose.bind(this);
        this.flagOpen=this.flagOpen.bind(this);
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
    //ダイアログの開閉ファンクション
    handleOpen() {
        this.setState({open: true});
      }
    handleClose() {
        this.setState({open: false});
    }
    flagOpen(){
        this.setState({checkflag:true});
    }
    flagClose(){
        this.setState({checkflag:false});
    }
    onChangeValue(event){
        this.setState({[event.target.name]:event.target.value})
    }
    checkEntry(){
        if (this.state.nName !="" && this.state.nAccount != "" && this.state.nPassword != "") {
            this.setState({open:true})
        } else {
            this.setState({checkflag:true}) 
        }
    }
    openDialog(){
        const { classes } = this.props;
        return(
            <Dialog open={this.state.open} onClose={this.handleClose} fullwidth="true">
                <DialogTitle>アカウント登録確認</DialogTitle>
                    <DialogContentText className={classes.text}>
                        {`${this.state.nName}さんのアカウントを登録してよろしいですか？`}
                    </DialogContentText>
                    <DialogContentText className={classes.text}>
                        {`アカウントは、${this.state.nAccount}です。`}    
                    </DialogContentText>
                <DialogActions>
                    <Button>はい</Button>
                    <Button onClick={this.handleClose}>いいえ</Button>
                </DialogActions>
            </Dialog>
        );       
    }
    openAttend(){
        const {classes} = this.props;
        return(
            <Dialog opne={this.state.checkflag} onClose={this.flagClose} fullwidth="true">
                <DialogTitle>入力確認メッセージ</DialogTitle>
                    <DialogContentText className={classes.text}>
                        必須項目の入力漏れです。
                    </DialogContentText>
                <DialogActions>
                    <Button onClick={this.flagClose}>確認</Button>
                </DialogActions>
            </Dialog>
        );
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
                            <Button fullWidth="true" style={{marginTop:"5%",backgroundColor:"#0000CC",color:"white"}}
                                onClick={()=>this.checkEntry()}>登録</Button>
                            <Link to="/">
                                <Typography style={{marginTop:"20px",textDecoration:"none"}}>ログイン画面へ</Typography>
                            </Link>
                            {this.openDialog()}
                            {this.openAttend()}
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Member);