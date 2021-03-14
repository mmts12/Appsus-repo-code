export class ComposeModal extends React.Component {
  state = {
    senderName: '',
    subject: '',
    bodyTxt: '',
  };

  handleInputs = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState({ [name]: value });
  };

  addNewMail = () => {
    let newMail = { ...this.state };
    if (!newMail.senderName || !newMail.subject || !newMail.bodyTxt) return;
    this.props.onAddNewMail(newMail);
    this.props.closeModal();
  };

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    return (
      <section className="email-add-section" >
        <div className="new-email-header">
          <label>New Massage</label>
          <button
            className="close-new-email-btn"
            onClick={this.props.closeModal}
          >
            X
          </button>
        </div>
        <div className="new-email-main-content">
          <div className="email-subject-input">
            <input
              ref={(input) => {
                this.nameInput = input;
              }}
              type="text"
              name="subject"
              placeholder="Subject Here"
              onChange={this.handleInputs}
            />
          </div>
          <div className="email-to-input">
            <input
              type="text"
              name="senderName"
              placeholder="Send to"
              onChange={this.handleInputs}
            />
          </div>
          <textarea
            name="bodyTxt"
            cols="30"
            rows="10"
            placeholder="Write your Email here"
            onChange={this.handleInputs}
          ></textarea>
          <button onClick={this.addNewMail}>Send</button>
        </div>
      </section>
    );
  }
}
