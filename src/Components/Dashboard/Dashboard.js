import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import UpdateTravels from './UpdateTravels/UpdateTravels';
import UpdateTravelsFrom from './UpdateTravels/UpdateTravelsFrom/UpdateTravelsFrom'
import AdminRoute from './AdminRoute/AdminRoute';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Review from './UserDashboard/Review/Review';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PreviewIcon from '@mui/icons-material/Preview';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../Hooks/useAuth';
import AddedTravel from './AddedTravels/AddedTravels';
import ManageAllPosts from './ManageAllPost/ManageAllPosts';
import MyPosts from './UserDashboard/MyPost/MyPosts';
import TravelsDetails from '../Home/Travelers/TravelsDetails/TravelsDetails';
import "./Dashboard.css"
import { makeStyles } from '@material-ui/core/styles';
 const drawerWidth = 240;



const useStyles = makeStyles({
    paper: {
        background: '#c3e6f7',
        color: '#4b5563',
        fontWeight:'bold'
    }
});
function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut, user } = useAuth();
    const dashboard = () => {
        setMobileOpen(!mobileOpen);
    };
    let { path, url } = useRouteMatch();
    const styles = useStyles();
    const drawer = (
        <div>

            <ListItem button>
                <AccountCircleIcon className=' text-cyan-800' /> <Typography variant="h6" className=' text-cyan-800'>{user.displayName}</Typography>
            </ListItem>
            <Toolbar />
            <Divider />
            <Link to='/' className="text-decoration-none hover:text-cyan-600 "> <ListItem button>
                <HomeIcon />Go to Home
            </ListItem>
            </Link>
            <List>
                {!admin && <Box>
                    <Link to={`${url}`} className="text-decoration-none hover:text-cyan-600 ">
                        <ListItem button>
                            <PreviewIcon />My Post
                        </ListItem>
                    </Link>
                    <Link to={`${url}/review`} className="text-decoration-none hover:text-cyan-600 ">
                        <ListItem button>
                            <PreviewIcon />Review
                        </ListItem>
                    </Link>
                </Box>}

                {admin && <Box>
                    <Link to={`${url}`} className="text-decoration-none  hover:text-cyan-600 ">
                        <ListItem button >
                            <AdminPanelSettingsIcon />   Manage All Post
                        </ListItem>
                    </Link>
                    <Link to={`${url}/makeAdmin`} className="text-decoration-none hover:text-cyan-600 ">
                        <ListItem button>
                            <AdminPanelSettingsIcon />  Make Admin
                        </ListItem>
                    </Link>

                    <Link to={`${url}/UpdateTravels`} className="text-decoration-none hover:text-cyan-600 ">
                        <ListItem button>
                            <AddPhotoAlternateIcon /> Update Travels
                        </ListItem>
                    </Link>
                    <Link to={`${url}/addedTravels`} className="text-decoration-none hover:text-cyan-600 ">
                        <ListItem button>
                            <LogoutIcon />  Add a Travels
                        </ListItem>
                    </Link>

                </Box>}

                <ListItem button onClick={logOut} >
                    <ListItemIcon className='hover:text-cyan-600 '>
                        <InboxIcon /><span >Logout</span>
                    </ListItemIcon>
                </ListItem>
            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex ' }} className='h-screen overflow-y-auto overflow-x-hidden DashboardBG'>
            <CssBaseline />
            <AppBar

                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    display: 'flex',
                    bgcolor:'#008eae'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={dashboard}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">

                        Dashboard

                    </Typography>


                </Toolbar>

            </AppBar>
            <Box
                component="nav"

                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"

            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer

                    container={container}
                    classes={{ paper: styles.paper }}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={dashboard}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}


                    sx={{

                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    classes={{ paper: styles.paper }}

                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>

                    {!admin && <Route exact path={path}>
                        <MyPosts></MyPosts>
                    </Route>}
                    {admin && <Route exact path={path}>
                        <ManageAllPosts></ManageAllPosts>
                    </Route>}

                    <Route exact path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/UpdateTravels`}>
                        <UpdateTravels></UpdateTravels>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/travelsDetails/:id`}>
                        <TravelsDetails></TravelsDetails>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/updateTravelsFrom/:id`}>
                        <UpdateTravelsFrom></UpdateTravelsFrom>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addedTravels`}>
                        <AddedTravel></AddedTravel>
                    </AdminRoute>

                </Switch>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
