import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { settings } from '../interfaces/settings';

type SlideMenuProps = {
    items: settings[];
    children: React.ReactNode;
    anchor?: 'top' | 'bottom' | 'left' | 'right';
    onItemClick: (item: settings) => void;
};

export default function SlideMenu({ items, children, anchor = 'right', onItemClick}: SlideMenuProps) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleItemClick = (item: settings) => {
        setOpen(false);
        onItemClick(item);
    };

    return (
        <div>
            <div onClick={toggleDrawer(true)}>{children}</div>
            <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
            <Box
            sx={anchor === 'top' || anchor === 'bottom' ? { width: 'auto' } : { width: 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {(items).map((item) => (
                    <ListItem key={item.menuItem} disablePadding>
                        <ListItemButton onClick={() => handleItemClick(item)}>
                            <ListItemText primary={item.menuItem} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
            </Drawer>
        </div>
    );
}
