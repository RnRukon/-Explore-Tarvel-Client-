import { Button } from '@mui/material';

import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    const { user, logOut } = useAuth();
    const style = {
        fontWeight: "bold",
        color: "Yellow"
    }

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: 'black' }} variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/" >
                    <Button sx={{ color: 'yellow' }}>

                        EXPLORE TRAVEL

                    </Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} style={style} to="/"><Button sx={{ color: 'yellow' }}>Home</Button></Nav.Link>
                        <Nav.Link as={NavLink} style={style} to="/travels"><Button sx={{ color: 'yellow' }}>Travels</Button></Nav.Link>

                        {
                            user.email && <Nav.Link as={NavLink} style={style} to="/travelPost"><Button sx={{ color: 'yellow' }}>Travel Post</Button></Nav.Link>
                        }
                        {
                            user.email && <Nav.Link as={NavLink} style={style} to="/dashboard"><Button sx={{ color: 'yellow' }}>Dashboard</Button></Nav.Link>
                        }

                        {
                            user.displayName &&
                            <Nav.Link ><Button sx={{ color: '#fff' }} style={style} variant="text">{user.displayName}</Button></Nav.Link>
                        }
                        {user.email ?
                            <Nav.Link ><Button sx={{ color: '#fff' }} style={style} onClick={logOut}>Logout</Button></Nav.Link>
                            :
                            <Nav.Link as={NavLink} to="/login"><Button style={style} sx={{ color: '#fff', display: 'inline' }}>Login</Button></Nav.Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;