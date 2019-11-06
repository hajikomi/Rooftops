import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const uuid = require('uuid');
const weekdays = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
const cardStyle = { margin: 1 }

const Calendar = (props)=>{
  const begining = new Date();

  const calendar = []
  Array.apply(null, {length: begining.getDay()}).map(Number.call, Number).forEach((e)=>{
    calendar.push(<GridListTile key={uuid()}><Card /></GridListTile>);
  });
  Array.apply(null, {length: 32}).map(Number.call, Number).forEach((i)=>{
    const day = new Date(begining.getFullYear(), begining.getMonth(), 1+i);
    if(day.getMonth() === begining.getMonth()){
      calendar.push(
        <GridListTile>
          <Card style={cardStyle}><CardContent><Typography>{day.toLocaleDateString()}</Typography></CardContent></Card>
        </GridListTile>
      );
    }
  });

  return <Paper>
    <GridList cols={7} cellHeight='auto'>
      {
        weekdays.map((w)=>{
          const styles = {};
          if(w == 'Sun.'){styles.color = 'red'}
          if(w == 'Sat.'){styles.color = 'blue'}
          return <GridListTile key={w}>
            <Card style={cardStyle}>
              <CardContent><Typography style={styles}>{w}</Typography></CardContent>
            </Card>
          </GridListTile>
        })
      }
      {calendar}
    </GridList>
  </Paper>
}

export default Calendar 