import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Images from '../Images/Images';
import './Comments.css';
import {Button,Badge } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const Comments = () => {
    let {postId}=useParams();
    const[comments,setComments]=useState([]);

    //material ui

    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;  
        fetch(url)
        .then(res=>res.json())
        .then(data=>{  
            setComments(data)
        })
    },[])

    return (
        <>
              <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label={        <Button variant="primary">
        Comments <Badge variant="light">{comments.length}</Badge>
                <span className="sr-only">unread messages</span>
                </Button>}
      />
      <div className={classes.container}>
        <Fade in={checked}>
          <Paper elevation={4} className={classes.paper}>
          <div className='display'>
             <div>
                {comments.length && <Images len={comments.length} ></Images>}
             </div>
             <div className="styleComment">
             {comments.map(comm=><p key={comm.id}>{comm.email}<br/>{comm.body}</p>)}
             </div>
           
         </div>
          </Paper>
        </Fade>
      </div>
    
    </div>
    <hr/>

        </>
    );
};

export default Comments;