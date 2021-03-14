import { EmailList } from './cmps/EmailList.jsx';
import { EmailHeader } from './cmps/EmailHeader.jsx';
import { emailService } from './services/emailService.js';
import { SideBar } from './cmps/SideBar.jsx';
import { ComposeModal } from './cmps/ComposeModal.jsx';

export class EmailApp extends React.Component {
  state = {
    emails: [],
    staredEmails: [],
    sentEmails: [],
    filterBy: {
      readMails: 'all',
      subject: '',
    },
    emailsUnreaded: 0,
    modalShow: false,
    emailsToShow: 'inbox',
    status: {},
    isShowMenu: false,
  };

  getEmailsStatus = () => {
    let status = {
      starred: this.state.staredEmails.length,
      sent: this.state.sentEmails.length,
    };
    this.setState({ status });
  };

  onOpenModal = () => {
    this.setState({ modalShow: true });
  };
  onCloseModal = () => {
    this.setState({ modalShow: false });
  };

  onAddNewMail = () => {
    console.log('add');
  };

  componentDidMount() {
    this.loadEmails();
    this.countUnreadedeEmails();
  }

  countUnreadedeEmails = () => {
    let emailsUnreaded = emailService.countUnreadEmails();
    this.setState({ emailsUnreaded });
  };

  loadEmails = () => {
    emailService.query().then((emails) => {
      this.setState({ emails });
      this.getStaredEmailsForDisplay();
      this.getSentEmailsForDisplay();
      this.getEmailsStatus();
    });
    emailService.getDeletedEmails().then((deletedEmails) => {
      this.setState({ deletedEmails });
    });
  };

  setFilter = (filterBy) => {
    this.setState({ filterBy });
  };

  filterEmailTypeForDisplay = () => {
    let { emailsToShow } = this.state;
    const { emails, staredEmails, sentEmails, deletedEmails } = this.state;
    switch (emailsToShow) {
      case 'inbox':
        return emails;
      case 'stared':
        return staredEmails;
      case 'sent':
        return sentEmails;
      case 'deleted':
        return deletedEmails;
    }
  };

  getEmailsForDisplay = () => {
    const { filterBy } = this.state;
    const emailsForDisplay = this.filterEmailTypeForDisplay();
    const filter = filterBy.subject.toLowerCase();
    if (filterBy.readMails === 'Read') {
      return emailsForDisplay.filter((email) => {
        let emailTofilter = email.subject.toLowerCase();
        return email.isRead && emailTofilter.includes(filter);
      });
    } else if (filterBy.readMails === 'Unread') {
      return emailsForDisplay.filter((email) => {
        let emailTofilter = email.subject.toLowerCase();
        return !email.isRead && emailTofilter.includes(filter);
      });
    } else {
      return emailsForDisplay.filter((email) => {
        let emailTofilter = email.subject.toLowerCase();
        return emailTofilter.includes(filter);
      });
    }
  };

  getSentEmailsForDisplay = () => {
    const { emails } = this.state;
    let sentEmails = emails.filter((email) => email.isSent);
    this.setState({ sentEmails });
  };

  getStaredEmailsForDisplay = () => {
    const { emails } = this.state;
    let staredEmails = emails.filter((email) => email.isStar);
    this.setState({ staredEmails });
  };

  onShowSentEmails = () => {
    this.onToggleMenu();
    if (this.state.sentEmails.length === 0) return;
    let emailsToShow = this.state.emailsToShow;
    emailsToShow = 'sent';
    this.setState({ emailsToShow });
  };

  onShowStarsEmails = () => {
    this.onToggleMenu();
    let emailsToShow = this.state.emailsToShow;
    emailsToShow = 'stared';
    this.setState({ emailsToShow });
  };
  onShowInbox = () => {
    this.onToggleMenu();
    let emailsToShow = this.state.emailsToShow;
    emailsToShow = 'inbox';
    this.setState({ emailsToShow });
  };
  onShowDeleted = () => {
    this.onToggleMenu();
    let emailsToShow = this.state.emailsToShow;
    emailsToShow = 'deleted';
    this.setState({ emailsToShow });
  };

  onSetStars = () => {
    console.log('star');
    this.loadEmails();
  };

  onAddNewMail = (mail) => {
    emailService.addNewMail(mail);
    this.loadEmails();
    this.countUnreadedeEmails();
  };

  onDelete = (id) => {
    emailService.deleteEmail(id).then((emails) => {
      this.setState({ emails });
      this.countUnreadedeEmails();
      this.loadEmails();
      this.getEmailsStatus();
    });
  };

  onReadEmail = (emailToMArk) => {
    emailService.markEmailRead(emailToMArk).then(() => {
      this.loadEmails();
    });
    this.countUnreadedeEmails();
  };

  onToggleMenu = () => {
    this.setState({ isShowMenu: !this.state.isShowMenu });
  };
  render() {
    return (
      <section className="app-main">
        <div
          className={`main-screen ${this.state.isShowMenu ? 'savta' : ''}`}
          onClick={this.onToggleMenu}
        ></div>
        <EmailHeader
          emailsStatus={this.state.status}
          emailsUnreaded={this.state.emailsUnreaded}
          setFilter={this.setFilter}
        />
        <main className="email-main flex space-between">
          <SideBar
            isShowMenu={this.state.isShowMenu}
            onShowDeleted={this.onShowDeleted}
            onShowSentEmails={this.onShowSentEmails}
            onShowInbox={this.onShowInbox}
            onShowStarsEmails={this.onShowStarsEmails}
            addEmail={this.onOpenModal}
          />
          <div className="menu-btn" onClick={this.onToggleMenu}>
            <i className="hamburger-btn fas fa-bars"></i>
          </div>
          <div className="email-list">
            <EmailList
              emailsToShow={this.state.emailsToShow}
              onSetStars={this.onSetStars}
              markReadEmail={this.onReadEmail}
              emailDelete={this.onDelete}
              emails={this.getEmailsForDisplay()}
            />

            {this.state.modalShow && (
              <ComposeModal
                onAddNewMail={this.onAddNewMail}
                closeModal={this.onCloseModal}
              />
            )}
          </div>
        </main>
      </section>
    );
  }
}
