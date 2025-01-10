import { Box, List, ListItemButton, ListItemText, ListItem } from "@mui/material"
import { settings } from "../interfaces/settings";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { clearUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

const AccountSidebare: React.FC  = () => {

    const { t } = useTranslation("components/navbar");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleItemClick = (selectedItem: settings) => {

            if (selectedItem.value === "logout") {
                fetch('/api-etnair/auth/logout',
                    {method: 'POST'}
                )
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Erreur HTTP : ${response.status}`);
                        }
                        navigate('/auth');
                        dispatch(clearUser());
                    })
                    .catch(error => {
                        console.error('Erreur lors de la déconnexion :', error);
                        alert("Une erreur est survenue lors de la déconnexion. Veuillez réessayer.");
                    });
            }else{
                navigate(selectedItem.value);
            }
        
        
    };


    return (
        <Box
        color="secondary"
        sx={{
            width: 240,
            minHeight: "95vh",
            border: "1px solid grey",
            paddingTop: 5,
            borderRadius: "8px",
            display: { xs: "none", sm: "block" },
            marginRight: "2vw",
            position: "sticky", 
            top: 0, 
            backgroundColor: "#F3F3F3FF",
        }}
    >
        <List>
            {(t("settings.private", { returnObjects: true }) as settings[]).map((item) => (
                <ListItem key={item.menuItem} disablePadding>
                    <ListItemButton onClick={() => handleItemClick(item)}>
                        <ListItemText primary={item.menuItem} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
    );
};

export default AccountSidebare;

