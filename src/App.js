import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Switch, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Reports from './pages/Reports';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
              <span role="img" aria-label="menu">📋</span> {/* Replace with menu icon */}
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            <ListItem button component={Link} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/users" onClick={toggleDrawer}>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button component={Link} to="/settings" onClick={toggleDrawer}>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button component={Link} to="/reports" onClick={toggleDrawer}>
              <ListItemText primary="Reports" />
            </ListItem>
          </List>
        </Drawer>
        <Toolbar /> {/* For spacing below the AppBar */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
