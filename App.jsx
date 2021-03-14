import { AppHeader } from './cmps/AppHeader.jsx';
import { EmailApp } from './apps/Mail/EmailApp.jsx';
import { KeepApp } from './apps/Keep/KeepApp.jsx';
import { About } from './pages/About.jsx';
import { Home } from './pages/home.jsx';
import { EmailDetails } from './apps/Mail/pages/EmailDetails.jsx';

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

// Simple React Component
export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Switch>
          <Route path="/mail/:mailId" component={EmailDetails} />
          <Route exact path="/mail" component={EmailApp} />
          <Route exact path="/keep" component={KeepApp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </section>
    </Router>
  );
}

// Using Class:
// export class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <header>
//                     <h1>Lets Play</h1>
//                 </header>
//                 <main>
//                     <Home />
//                 </main>
//             </div>
//         )
//     }
// }
