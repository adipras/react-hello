import Header from './components/Header';
import NotFound from './components/NotFound';

import Dictionary from './pages/Dictionary';
import Customers from './pages/Customers';
import Employees from './pages/Employees';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Definition from './pages/Definition';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/customers' element={<Customers />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path='/dictionary/:search' element={<Definition />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
