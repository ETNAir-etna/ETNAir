import { Box, List, ListItemButton, ListItemText, Divider } from "@mui/material"


const AccountSidebare: React.FC  = () => {
    return (
        <Box
        color="secondary"
        sx={{
            width: 240,
            minHeight: "95vh",
            border: "1px solid grey",
            paddingTop: 5,
            borderRadius: "8px",
            display: { xs: "none", sm: "block" }, // Cacher sur mobile
            marginRight: "2vw", // Espace entre la sidebar et le contenu
            position: "sticky", // Pour que la sidebar reste visible même quand on défile
            top: 0, // Reste collée en haut
            backgroundColor: "#F3F3F3FF",
        }}
    >
        <List>
            <ListItemButton>
                <ListItemText primary="Page 1" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
                <ListItemText primary="Page 2" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
                <ListItemText primary="Page 3" />
            </ListItemButton>
        </List>
    </Box>
    );
};

export default AccountSidebare;

