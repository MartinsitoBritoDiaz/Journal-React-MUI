import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar';
import { SideBar } from '../components';

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar drawerWidth={drawerWidth}/>
            
            <SideBar drawerWidth={drawerWidth} />
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                { children }
            </Box>

        </Box>
    )
}