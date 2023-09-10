import { Outlet } from 'react-router-dom';
import Navbar from './_layout/navbar/Navbar';
import Footer from './_layout/Footer';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
