import { EmailPreview } from './EmailPreview.jsx';

export function EmailList({
  emails,
  emailDelete,
  markReadEmail,
  onSetStars,
  emailsToShow,
}) {
  return (
    <section>
      <ul>
        {emails.map((email) => {
          return (
            <EmailPreview
              emailsToShow={emailsToShow}
              onSetStars={onSetStars}
              markReadEmail={markReadEmail}
              emailDelete={emailDelete}
              key={email.id}
              email={email}
            />
          );
        })}
      </ul>
    </section>
  );
}
