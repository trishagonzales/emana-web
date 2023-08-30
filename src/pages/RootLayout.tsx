import { Outlet } from "react-router-dom";
import Navbar from "./_layout/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
