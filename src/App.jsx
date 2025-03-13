import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './components/Routes/routes';
import "./styles/hero.scss"
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
// import { store } from './components/redux/ToDoList/ToDoList';

function App() {

  // const [cart, setCart] = useState([]);

  // const addToCart = useCallback((product) => {
  //     setCart((prevCart) => [...prevCart, product]);
  // });

  return (
    <div className="App">
        <Provider store={store}>
            <RouterProvider router={routes} />;
        </Provider>
    </div>
  );
  
}

export default App;
