import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

const MainLayout = () => {
    return (
        <>
            <Navbar />
                <Container maxWidth="xl" sx={{mt :3}}>
                    <Outlet />
                </Container>
            <Footer />
        </>
    );
};

export default MainLayout;
