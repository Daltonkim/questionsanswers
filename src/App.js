import { Provider } from 'react-redux';
import { store } from './redux/store';
import './assets/main.scss';
import Home from './modules/home';
import { ModalRoot } from './modules/modals';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Header from './components/header';
import { AddButton } from './modules/modals/createdModals/addButton';
import Tooltip from './components/tooltip';

function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <ModalRoot />
        <div className='app__column'>
          <Header />
          <Home />
        </div>
        <div className='app__column'>
          <p>Here you can find a few questions. Feel free to create your own questions!

            <Tooltip tip="Add more questions"/>
          </p>
          <AddButton />
        </div>
      </div>
    </Provider>
  );
}

export default App;
