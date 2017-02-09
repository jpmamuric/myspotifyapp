import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App    from '../App';
import Home   from '../components/views/Home';
import Search  from '../components/views/Search';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='search' component={Search}/>
  </Route>
)
