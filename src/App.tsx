import Router from './routes';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
