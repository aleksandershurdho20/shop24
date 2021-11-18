
import Home from 'containers/Home';
import GlobalStyle from './globalStyles';
import Routes from './routes/routes'
import { Toaster } from 'react-hot-toast';
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
