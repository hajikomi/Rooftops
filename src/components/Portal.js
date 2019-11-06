import React from 'react';
//import Container from '@material-ui/core/Container';
//import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import {Link} from "react-router-dom";
//import Dialog from '@material-ui/core/Dialog';
//import DialogTitle from '@material-ui/core/DialogTitle';
//import DialogActions from '@material-ui/core/DialogActions';
//import DialogContentText from '@material-ui/core/DialogContentText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
//import {BrowserRouter} from "react-router-dom";
//import Grid from '@material-ui/core/Grid';
import Calender from './Calender';

const styles = (theme) => ({
    root: {
        display: 'flex',
      },
      paper: {
        marginRight: theme.spacing(2),
      },
})


class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flag:false,
            month:""
        }
        let date=new Date();
        this.monthCange= this.setState({month:date.getMonth()})
    }    
    changeFlag(){
        this.setState({flag:!this.state.flag})
    }
    clickCalender(){
        if (this.state.flag) {
            return(
                <Calender month={this.state.month}/>
            );
        } else {
            return
        }
    }

    render(){
        const { classes } = this.props;
        return(
            <div style={{display:"flex",alignItems:"flex-start"}}>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <MenuList>
                            <MenuItem>ホーム</MenuItem>
                            <MenuItem>インフォ</MenuItem>
                            <MenuItem>掲示板</MenuItem>
                            <MenuItem>フォルダ</MenuItem>
                            <MenuItem onClick={() => this.changeFlag()}>スケジュール</MenuItem>
                        </MenuList>
                    </Paper>
                </div>
                <div>
                  {this.clickCalender()}  
                </div>
                
            </div>
            
        );
    }
}

export default withStyles(styles)(Portal);