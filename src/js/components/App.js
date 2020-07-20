import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { routes } from '../constants/routes';
import rootReducer from '../reducers';
import styles from '../../sass/App.module.sass';

export default class App extends Component {
  constructor() {
    super();
    this.createHistory();
    this.createStore();
  }

  createHistory() {
    this.history = createBrowserHistory();
  }

  createStore() {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
    );
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router history={this.history}>
          <div className={styles.app_wrapper_outer}>
            <Header />
            <main className={styles.app_wrapper_inner}>
              <Sidebar />
              <section className={styles.content}>
                <Switch>
                  {routes.map(({ component, path }) => (
                    <Route
                      component={component}
                      exact
                      key={path}
                      path={`/${path}`}
                    />
                  ))}
                  <Redirect to="/" />
                </Switch>
              </section>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}
