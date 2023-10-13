import { Counter } from "./components/Counter";
import { Provider } from "react-redux";
import {store} from './components/redux/store'

function App() {
  return (

    <Provider store={store}>
      <Counter />
    </Provider>
  
  );
}

export default App;
