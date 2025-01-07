import { ThemeSwitcherButton } from "./Button";
import { AppBar, Container } from "./muiComponents";

const Navbar = () => {
    return (
        <AppBar component="nav">
            <Container maxWidth="xl">
                < ThemeSwitcherButton />
                <span>  ETNAir</span>
            </Container>
        </AppBar>
    );
};

export default Navbar;
