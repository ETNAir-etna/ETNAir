import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Container, Toolbar } from '@mui/material';

const MainLayout = () => {
    return (
        <>
            <Navbar />
                <Toolbar />
                <Container>
                    <Outlet />
                </Container>
            <Footer />
        </>
    );
};

export default MainLayout;
