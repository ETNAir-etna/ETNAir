import { useTranslation } from "react-i18next";
import { ThemeSwitcherButton } from "./Button";
import { AppBar, Container } from '@mui/material';
import { LanguagesSelect } from "./Select";



const Navbar = () => {

    const { t } = useTranslation('components/navbar');

    return (
        <AppBar component="nav">
            <Container maxWidth="xl">
                
                <ThemeSwitcherButton />
                <LanguagesSelect />
                <span> ETNAir</span>
                {/* <List>
                    {(t('list', { returnObjects: true }) as string[]).map( (el: string, i: number) => (
                        <ListItem key={i}>{el}</ListItem>
                    ))}
                </List> */}
            </Container>
        </AppBar>
    );
};

export default Navbar;
