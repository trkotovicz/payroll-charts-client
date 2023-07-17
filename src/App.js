import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Charts from './pages/Charts';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/charts" element={ <Charts /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
