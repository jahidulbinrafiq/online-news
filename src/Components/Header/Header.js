import React from 'react';
import { Jumbotron,Container } from 'react-bootstrap';



const Header = () => {
    return (
        <>
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