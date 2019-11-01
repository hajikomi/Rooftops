import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    text:{
        width:"90%",
        margin:"0 auto"
    }
})
class MyDialog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checkflag:this.props.flag
        }
        this.flagClose=this.flagClose.bind(this)
    }
    
    flagClose(){
        this.setState({checkflag:false});
    }
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Dialog open={this.state.checkflag} onClose={this.flagClose} fullwidth="true">
                <DialogTitle>{this.props.title}</DialogTitle>
                    <DialogContentText className={classes.text}>
                        {this.props.text}
                    </DialogContentText>
                <DialogActions>
                    <Button onClick={this.flagClose}>確認</Button>
                </DialogActions>
            </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(MyDialog);