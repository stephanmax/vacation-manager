import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import ViewColleagues from './components/ui/ViewColleagues'
import ViewRequest from './components/ui/ViewRequest'
import ViewApproval from './components/ui/ViewApproval'
import storeFactory from './store'

import './main.css'

ReactDOM.render(
  <Provider store={storeFactory()}>
    <HashRouter>
      <Switch>
        <Route path="/colleagues" component={ViewColleagues} />
        <Route path="/request" component={ViewRequest} />
        <Route path="/approval" component={ViewApproval} />
        <Redirect from="/" to="/colleagues" />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
