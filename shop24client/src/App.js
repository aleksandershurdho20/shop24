
import Home from 'containers/Home';
import GlobalStyle from './globalStyles';
import Routes from './routes/routes'
import { Toaster } from 'react-hot-toast';
import './App.css'
function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <Toaster />

    </>
  );
}

export default App;
