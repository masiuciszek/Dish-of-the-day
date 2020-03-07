/* eslint-disable import/extensions */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/styled/layout/Layout';
import Dishes from './components/dishes/Dishes';
import DishOfToday from './components/dish_of_today/DishOfToday';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Dishes} />
        <Route exact path="/dish-of-today" component={DishOfToday} />
      </Switch>
    </Layout>
  );
}

export default App;
