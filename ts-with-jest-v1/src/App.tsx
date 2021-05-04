import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Todo from './components/Todo';
import Detail from './components/Detail';
import store from './store/store';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/about" component={About} />
            <Route exact path="/todo/:id" component={Detail} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
