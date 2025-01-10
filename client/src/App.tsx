import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { AccountLayout, HostingLayout, MainLayout } from './layout';
import { Travel, Home, Search, User, Reservation, Auth, Account, Profile, Wishlist, Hosting, Dashboard, Property } from './pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from './store/userSlice';

function App() {

  const ProtectedRoute = ({ requiredRole }: { requiredRole?: string }) => {

    const isAuthenticated = true;
    const userRole = 'admin';
    const dispatch = useDispatch();


    if (!isAuthenticated) {
      dispatch(clearUser()); 
      return <Navigate to="/auth" />;
    }
  
    if (requiredRole && userRole !== requiredRole) {
      return <Navigate to="/" />;
    }
  
    return <Outlet />;
  };

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  };
  
  
  return (
      <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Main Layout */}
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/property/:propertyId' element={<Property />} />
        </Route>

        <Route path='/property/:propertyId/reservation' element={<Reservation />}  />

        {/* Auth Routes */}
        <Route path='/auth/*' element={<Auth />} />

        <Route path='authenticated' element={<ProtectedRoute />} >

          {/* Account Routes */}
          <Route path='account' element={<AccountLayout />}>
            <Route index element={<Account />} />
            <Route path='profile' element={<Profile />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path="travel" element={<Travel />} />
          </Route>

          {/* Hosting Routes */}
          <Route path='hosting' element={<HostingLayout />}>
            <Route index element={<Hosting />} />
          </Route>

          {/* Admin Routes */}
          <Route path='admin' element={<ProtectedRoute requiredRole="admin" />}>
            <Route index element={<Dashboard />} />
          </Route>

        </Route>

      </Routes>
      </BrowserRouter>

  )
}

export default App
