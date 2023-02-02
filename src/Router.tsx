import { HashRouter, Routes, Route } from 'react-router-dom';
import Generator from './routes/Generator';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Generator />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
