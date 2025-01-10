
import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom"; // Assurez-vous que vous avez Outlet dans votre projet React Router
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AccountSidebare from "../components/AccountSideBare";

const AccountLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl" sx={{ display: "flex", minHeight: "100vh", paddingY: 15 }}>
            <AccountSidebare />
                <Box sx={{ flexGrow: 1 }}>
                    <Outlet />
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default AccountLayout;
