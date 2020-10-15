import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/Orphanage';
import OrphanagesCreate from './pages/CreateOrphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/details/:id" component={OrphanagesDetails} />
        <Route path="/create" component={OrphanagesCreate} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
