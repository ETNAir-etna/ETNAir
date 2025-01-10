import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Tooltip,
    Divider,
    Stack,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import HolidayVillageRoundedIcon from "@mui/icons-material/HolidayVillageRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSelector";
import SlideMenu from "./SlideMenu";
import { settings } from "../interfaces/settings";
import { clearUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

function ResponsiveAppBar() {

    const { t } = useTranslation("components/navbar");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [navbarSettings, setNavbarSettings] = useState<settings[]>([]);
    const user = useSelector(selectUser);
    useEffect(() => {

        if (user) {
            setNavbarSettings(t("settings.private", { returnObjects: true }) as settings[]);

        } else {
            setNavbarSettings(t("settings.public", { returnObjects: true }) as settings[]);

        }

    }, [t, user]);

    const handleSelect = (selectedItem: settings) => {
        if (selectedItem.value === "logout") {
            fetch('/api-etnair/auth/logout',
                { method: 'POST' }
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
        } else {
            navigate(selectedItem.value);
        }
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <HolidayVillageRoundedIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        ETNAir
                    </Typography>
                    <HolidayVillageRoundedIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        ETNAir
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                        <SlideMenu items={navbarSettings} onItemClick={handleSelect} >
                            <Tooltip title={(t('sttings.tooltip'))}>
                                <IconButton size="medium" >
                                    <Stack
                                        sx={{
                                            border: "#ffff 2px solid",
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: "30px",
                                            color: "white",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                        direction="row"
                                        spacing={2}
                                        divider={<Divider orientation="vertical" flexItem />}
                                    >
                                        <MenuRoundedIcon />
                                        {user ?
                                            <Avatar sx={{ width: 20, height: 20 }} alt={`${user.firstName} ${user.lastName}`} src={user.profileImg as string} />
                                            :
                                            <AccountCircleRoundedIcon fontSize="medium" />
                                        }

                                    </Stack>
                                </IconButton>
                            </Tooltip>
                        </SlideMenu>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
