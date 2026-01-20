import { HashRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import { Main } from '@/pages/main';
import { Galerie } from '@/pages/galerie';
import { Fragen } from '@/pages/fragen';
import { Petra } from '@/pages/petra';
import { Kontakt } from '@/pages/kontakt';
import { Legal } from '@/pages/legal';

export const Routes = () => {
  return (
    <Router>
      <RouterRoutes>
        <Route path='/' element={<Main />} />
        <Route path='/galerie' element={<Galerie />} />
        <Route path='/fragen' element={<Fragen />} />
        <Route path='/petra' element={<Petra />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/legal' element={<Legal />} />
      </RouterRoutes>
    </Router>
  );
};
