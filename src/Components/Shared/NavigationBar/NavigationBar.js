import { Button } from '@mui/material';

import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    const { user, logOut } = useAuth();
      return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className='bg-gray-100 text-gray-600' variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/" >
                    <Button >

                        <h1 className=' text-slate-500 text-xl' >EXPLORE TRAVEL</h1>

                    </Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink}

                            style={{ color: '#4b5563', fontWeight: 'bolder' }}
                            to="/">Home</Nav.Link>

                        <Nav.Link as={NavLink}
                            style={{ color: '#4b5563', fontWeight: 'bolder' }}
                            activeStyle={{ color: 'red' }} to="/travels">Travels</Nav.Link>

                        {
                            user.email && <Nav.Link as={NavLink}
                                style={{ color: '#4b5563', fontWeight: 'bolder' }}
                                activeStyle={{ color: 'red' }} to="/travelPost">Travel Post</Nav.Link>
                        }
                        {
                            user.email && <Nav.Link as={NavLink}
                                style={{ color: '#4b5563', fontWeight: 'bolder' }}
                                activeStyle={{ color: 'red' }} to="/dashboard">Dashboard</Nav.Link>
                        }

                        {
                            user.displayName &&
                            <Nav.Link style={{ color: '#4b5563', fontWeight: 'bolder' }} >{user.displayName}</Nav.Link>
                        }
                        {user.email ?
                            <Nav.Link onClick={logOut} style={{ color: '#4b5563', fontWeight: 'bolder' }}> Logout</Nav.Link>
                            :
                            <Nav.Link as={NavLink} style={{ color: '#4b5563', fontWeight: 'bolder' }} activeStyle={{ color: 'red' }} to="/login">Login</Nav.Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;