export class SideBar extends React.Component {
  render() {
    return (
      <section
        className={`email-side-bar ${this.props.isShowMenu ? 'open-menu' : ''}`}
      >
        <i onClick={this.props.addEmail} className="fas fa-plus btn-compose">
          New Mail
        </i>

        <div className="side-bar-menu flex col space-around">
          <ul className="menu-list clean-list">
            <li onClick={this.props.onShowInbox}>
              <i className="fas fa-inbox"></i>
              <span>Inbox</span>
            </li>

            <li onClick={this.props.onShowStarsEmails}>
              <i className="far fa-star starred-btn"></i>
              <span>Starred</span>
            </li>

            <li onClick={this.props.onShowSentEmails}>
              <i className="fas fa-paper-plane"></i>
              <span>Sent</span>
            </li>

            <li onClick={this.props.onShowDeleted}>
              <i className="fas fa-trash"></i>
              <span>Trash</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
