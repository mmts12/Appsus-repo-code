import { InfoCmp } from "./InfoCmp.jsx";

export class KeepAdd extends React.Component {

  state = {
    note: {
      type: 'NoteText',
      isPinned: false,
      info: { txt: '' },
      style: {
        bgColor: 'rgb(246, 221, 152)',
      },
    },
    placeholder: 'Add Something...',
    isTitled: false,
    infoDisplay: {
      height: 0,
      opacity: 0,
      zIndex: (-1),
    },
  };

  componentDidMount() {
  }

  onText = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteText';
    copy.info = { txt: '' };
    this.setState({
      note: copy,
      placeholder: 'Enter your text...',
      isTitled: false
    });
  }

  onImg = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteImg';
    copy.info = { title: '', url: '' };
    this.setState({
      note: copy,
      placeholder: 'Enter Image Or GIF URL...',
      isTitled: true,
    });
  }

  onVideo = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteVideo';
    copy.info = { title: '', url: '' };
    this.setState({
      note: copy,
      placeholder: 'Enter Video URL...',
      isTitled: true
    });
  }

  onAudio = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteAudio';
    this.setState({ note: copy, placeholder: 'I\'m listening...' });
  }

  onTodos = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteTodos';
    copy.info = { title: '', todos: '' };
    this.setState({
      note: copy,
      placeholder: 'Enter comma seperated todo\'s...',
      isTitled: true
    }, () => { console.log('note format', this.state.note) });
  }

  handleChange = (ev) => {
    const copy = { ...this.state.note };

    switch (copy.type) {
      case 'NoteText':
        copy.info.txt = ev.target.value;
        return this.setState({ note: copy });
      case 'NoteImg':
      case 'NoteVideo':
        copy.info[ev.target.name] = ev.target.value;
        return this.setState({ note: copy });
      case 'NoteTodos':
        copy.info[ev.target.name] = ev.target.value;
        return this.setState({ note: copy });
    }
  }

  onAdd = (ev) => {
    ev.preventDefault();
    const copy = { ...this.state.note };
    console.log('child sent', copy);
    this.props.addNote(copy);
    this._resetNote();
  }

  toggleInfo = () => {
    var height = this.state.infoDisplay.height === 450 ? 0 : 450;
    var opacity = this.state.infoDisplay.opacity === 1 ? 0 : 1;
    var zIndex = this.state.infoDisplay.opacity === 1 ? -1 : 1;
    this.setState({ infoDisplay: { opacity, height, zIndex } });
  }

  _resetNote = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteText';
    copy.info = { txt: '' };
    this.setState({ note: copy, placeholder: 'Something else?..', isTitled: false });
  }

  render() {
    const { txt, url, todos } = this.state.note.info;
    const { type } = this.state.note;
    const { isTitled } = this.state;
    return (
      <form onSubmit={this.onAdd}>
        <i className="fas fa-info" title="info" onClick={this.toggleInfo}></i>
        <InfoCmp display={this.state.infoDisplay} toggleInfo={this.toggleInfo} />

        <input hidden={!isTitled}
          type="text"
          name="title"
          value={this.state.note.info.title || ''}
          autoFocus
          autoComplete="off"
          placeholder="Enter Title Here..."
          onChange={this.handleChange}
        />

        <input
          type="text"
          name={type === "NoteTodos" ? "todos" : "url"}
          value={txt || url || todos || ''}
          autoFocus
          autoComplete="off"
          placeholder={this.state.placeholder}
          onChange={this.handleChange}
        />

        <i className="fas fa-font" title="Text" onClick={this.onText}></i>
        <i className="far fa-image" title="Image" onClick={this.onImg}></i>
        <i className="fab fa-youtube" title="Video" onClick={this.onVideo}></i>
        {/* <i className="fas fa-volume-up" onClick={this.onAudio}></i> */}
        <i className="fas fa-list-ul" title="List" onClick={this.onTodos}></i>
        <button type="submit" style={{ display: 'none' }}></button>
      </form>
    );
  }
}





