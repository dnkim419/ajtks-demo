import { HashRouter, Routes, Route } from 'react-router-dom';
import Starting from './routes/Starting';
import Images from './routes/Images';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Images />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
