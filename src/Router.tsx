import { HashRouter, Routes, Route } from 'react-router-dom';
import Starting from './routes/Starting';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Starting />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
