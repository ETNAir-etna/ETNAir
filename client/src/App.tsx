import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css'
import { AccountLayout, HostingLayout, MainLayout } from './layout';
import { Home, Search, User, Reservation, Auth, Account, Profile, Wishlist, Hosting, Dashboard } from './pages';
import Travel from './pages/Travel';
import { useEffect } from 'react';

function App() {

  const ProtectedRoute = ({ requiredRole }: { requiredRole?: string }) => {
    const isAuthenticated = true; // TODO : Implémenter la logique
    const userRole = 'admin'; // Exemple : rôle utilisateur
  
    if (!isAuthenticated) {
      return <Navigate to="/auth/signIn" />;
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
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Main Layout */}
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/user/:userId' element={<User />} />
        </Route>

        <Route path='/propery/:propertyId/reservation' element={<Reservation />}  />

        {/* Auth Routes */}
        <Route path='/auth/*' element={<Auth />} />

        <Route path='authenticated/*' element={<ProtectedRoute />} >

          {/* Account Routes */}
          <Route path='account/*' element={<AccountLayout />}>
            <Route index element={<Account />} />
            <Route path='profile' element={<Profile />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route index element={<Travel />} />
          </Route>

          {/* Hosting Routes */}
          <Route path='hosting/*' element={<HostingLayout />}>
            <Route index element={<Hosting />} />
          </Route>

          {/* Admin Routes */}
          <Route path='admin/*' element={<ProtectedRoute requiredRole="admin" />}>
            <Route index element={<Dashboard />} />
          </Route>

        </Route>

      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
