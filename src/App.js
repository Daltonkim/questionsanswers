import { Provider } from 'react-redux';
import { store } from './redux/store';
import './assets/main.scss';
import Home from './modules/home';
import { ModalRoot } from './modules/modals';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Header from './components/header';
import { AddButton } from './modules/modals/createdModals/addButton';
import { QuestionDeleteAllButton } from './modules/modals/createdModals/questionDeleteAllButton';
import learnonline from './assets/images/learn-online.gif'

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
          <div className='app__column-image'>
            <img style={{ width: '90%' }} src={learnonline} alt=''></img>
            <QuestionDeleteAllButton />
          </div>
          <AddButton />
        </div>
      </div>
    </Provider>
  );
}

export default App;
