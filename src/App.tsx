import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Author from "./features/authorPages";
import TasksPages from "./features/TasksPages";
import Navigation from "./features/TasksPages/Navigation";
import TaskPages from "./features/TasksPages"

import { toAuthor, toTask, toTasks } from "./routes";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toTask()}>
        <TaskPages />
      </Route>
      <Route path={toTasks()}>
        <TasksPages />
      </Route>
      <Route path={toAuthor()}>
        <Author />
      </Route>
      <Route>
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
)

export default App;