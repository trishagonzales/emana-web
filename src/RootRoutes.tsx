import RootLayout from '@pages/RootLayout';
import HomePage from '@pages/home/HomePage';
import PresalePage from '@pages/presale/PresalePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/presale' element={<PresalePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
