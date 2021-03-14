import { emailService } from '../services/emailService.js';
const { Link } = ReactRouterDOM;
export function EmailPreview({
  email,
  emailDelete,
  markReadEmail,
  onSetStars,
  emailsToShow,
}) {
  const markEmail = (email, ev) => {
    markReadEmail(email);
  };
  const starMail = () => {
    emailService.markEmailStared(email.id);
    onSetStars();
  };
  {
    if (emailsToShow !== 'deleted')
      return (
        <li className={email.isRead ? 'read' : 'unread'}>
          <i
            onClick={(ev) => starMail()}
            className={
              email.isStar
                ? 'star-btn-active fas fa-star'
                : 'star-btn far fa-star'
            }
          ></i>
          <Link to={`/mail/${email.id}`}>
            <div className="email-details-container">
              <div className="sender-name">{email.senderName}</div>
              <div className="subject-email">{email.subject}</div>
              <div className="flex email-actions">
                <div>{email.sentAt}</div>
              </div>
            </div>
          </Link>
          {emailsToShow !== 'deleted' && (
            <i
              onClick={() => emailDelete(email.id)}
              className="fas fa-trash-alt email-delete-btn"
            ></i>
          )}

          <i
            onClick={(ev) => markEmail(email, ev)}
            className={
              email.isRead
                ? 'envelope fas fa-envelope-open'
                : 'envelope fas fa-envelope'
            }
          ></i>

          {/* <input
        type="checkbox"
        checked={email.isRead ? true : false}
        onChange={(ev) => markEmail(email, ev)}
      /> */}
        </li>
      );
    else
      return (
        <li className={email.isRead ? 'read' : 'unread'}>
          <i
            className={
              email.isStar
                ? 'star-btn-active fas fa-star'
                : 'star-btn far fa-star'
            }
          ></i>

          <div className="email-details-container">
            <div className="sender-name">{email.senderName}</div>
            <div className="subject-email">{email.subject}</div>
            <div className="flex email-actions">
              {/* <div>{email.sentAt}</div> */}
            </div>
          </div>

          {emailsToShow !== 'deleted' && (
            <i className="fas fa-trash-alt email-delete-btn"></i>
          )}

          <i
            className={
              email.isRead
                ? 'envelope fas fa-envelope-open'
                : 'envelope fas fa-envelope'
            }
          ></i>

          {/* <input
    type="checkbox"
    checked={email.isRead ? true : false}
    onChange={(ev) => markEmail(email, ev)}
  /> */}
        </li>
      );
  }
}

//  <Link to={`/mail/${email.id}`}></Link>
