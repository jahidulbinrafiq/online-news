import React from 'react';
import { Jumbotron,Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import './Header.css'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Header = () => {
    const classes = useStyles();

    return (
        <>
           <div className='headerStyle'>
           <h6 className={classes.root}>Currently Update News: <Badge badgeContent={50} color="secondary">
                       <FiberNewIcon />
                       </Badge></h6>
           </div>
            <Jumbotron >
                    <Container>
                        <h1>Online News</h1>
                        <p>You right to know What happend in the World</p>
                        <h3>See the latest update</h3>
                    </Container>
            </Jumbotron>
        </>
    );
};

export default Header;