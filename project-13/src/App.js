import {Route} from 'react-router-dom'
import Welcome from './components/Welcome';
import Product from './components/Products';
function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/prduct">
        <Product/>
      </Route>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
