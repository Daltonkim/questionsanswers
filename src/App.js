import { Provider } from 'react-redux';
import { store } from './redux/store';
import './assets/main.scss';
import Home from './modules/home';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className='app__column'>
          <p>Here you can find 1 question. Feel free to create your own questions!</p>
        </div>
        <div className='app__column'>
          <h1>Question and Answer tool</h1>
          <Home/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
