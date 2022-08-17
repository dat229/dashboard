import './App.scss';
import Layout from './components/layout/Layout';
import {BrowserRouter} from 'react-router-dom'

import '../src/assets/boxicons-2.0.7/css/boxicons.min.css';
import '../src/assets/css/grid.css';
import '../src/assets/css/index.css';
import '../src/assets/css/theme.css';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
