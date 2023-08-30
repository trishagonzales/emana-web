import RootLayout from '@pages/RootLayout';
import AboutUsPage from '@pages/about/AboutUsPage';
import AccountBalance from '@pages/account/AccountBalance';
import AccountLayout from '@pages/account/AccountLayout';
import LoginPage from '@pages/login/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          {/* <Route path="/contact" element={<LoginPage />} /> */}
          <Route element={<AccountLayout />}>
            <Route path='balance' element={<AccountBalance />} />
            {/* <Route path="affiliates" element={<MembershipPage />} /> */}
            {/* <Route path="settings" element={<MembershipPage />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
