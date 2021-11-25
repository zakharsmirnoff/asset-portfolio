import { Grommet } from 'grommet'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../src/components/navigation.component.js'
import Charts from './components/charts.components'

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
      <Routes>
        <Route exact path='/' element={<NavBar />} />
        <Route path='/charts' element={<Charts />} />
      </Routes>
    </Grommet>
  );
}

export default App;
