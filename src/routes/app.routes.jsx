import { Routes, Route } from 'react-router-dom';

import { Preview } from '../pages/Preview';
import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';
import { New } from '../pages/New';

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/preview" element={<Preview/> } />
      <Route path="/profile" element={<Profile/> } />
      <Route path="/" element={<Home/> } />
      <Route path="/new" element={<New/> } />
    </Routes>
  )
}