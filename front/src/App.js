import { Grommet } from 'grommet'
import NavBar from './components/navigation.component';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};


function App() {
  return (
    <Grommet theme={theme}>
      <NavBar />
    </Grommet>
  );
}

export default App;
