import { BrowserRouter, Route } from 'react-router-dom';

import {Home} from '../src/pages/Home'
import {NewRoom} from '../src/pages/NewRoom'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/> 
      <Route path="/rooms/new" component={NewRoom}/>
    </BrowserRouter>

  );
}

export default App;
