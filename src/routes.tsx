import { Routes as Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/505'
// if you did not get the refecence, I know the error code is 404 but ...

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route element={<NotFound />} />
    </Switch>
  )
}

export default Routes
