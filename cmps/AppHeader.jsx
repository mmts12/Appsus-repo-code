import { AppMenu } from "./AppMenu.jsx";

const { Link } = ReactRouterDOM;

export class AppHeader extends React.Component {

  state = {
    displayMenu: false,
    opacity: 1,
  }

  toggleApps = () => {
    var { displayMenu, opacity } = this.state;
    opacity = (!opacity) ? 0 : 1;
    this.setState({ displayMenu: !displayMenu, opacity });
  }

  render() {
    const { displayMenu, opacity } = this.state;

    return (
      <div className="header-stam-leshnia-ahat">
        <nav className="apps-header main-layout">
          <ul className="clean-list flex space-between align-center">
            <Link to="/"><h1 className="logo fab fa-google-drive"><span> Appsus</span></h1></Link>
            <i className="fas fa-th menu" onClick={this.toggleApps}>
              {displayMenu && <AppMenu opacity={opacity} toggleApps={this.toggleApps} />}
            </i>
          </ul>
        </nav >
      </div>
    )
  }
}

