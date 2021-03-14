import { ColorCmp } from "./ColorCmps.jsx";
import { NoteEdit } from "./notes/NoteEdit.jsx";

export class KeepEdit extends React.Component {

  state = {
    display: 'flex',
    palleteOpacity: 0,
    editDisplay: false,
  }

  onHover = () => {
    console.log('im hovered');
    this.setState({ display: 'none' })
  }

  changeBgcNote = (color) => {
    this.props.onChangeBgcNote(this.props.note.id, color)
  }

  togglePallete = () => {
    var opacity = this.state.palleteOpacity === 1 ? 0 : 1;
    this.setState({ palleteOpacity: opacity });
  }

  toggleEditNote = () => {
    let { editDisplay } = this.state;
    editDisplay = !editDisplay;
    this.setState({ editDisplay });
  }

  render() {
    const { display, editDisplay } = this.state;
    const { note, onDeleteNote, onPinnNote, onCloneNote } = this.props;
    return (
      <div className="tools-container flex col">
        <div className="keep-tools flex space-between" style={{ display }}>
          <i className="fas fa-thumbtack" onClick={() => onPinnNote(note.id)}></i>
          <i className="fas fa-edit" onClick={() => this.toggleEditNote(note.id)}></i>
          <i className="fas fa-palette" onClick={this.togglePallete}></i>
          <ColorCmp onChangeBgcNote={this.changeBgcNote} opacity={this.state.palleteOpacity} togglePallete={this.togglePallete} />
          <i className="far fa-clone" onClick={() => onCloneNote(note.id)}></i>
          <i className="fas fa-trash-alt delete-btn" onClick={() => onDeleteNote(note.id)}></i>
        </div>
        {editDisplay && <NoteEdit note={note} toggleEditNote={this.toggleEditNote} editNote={this.props.editNote} />}
      </div>

    )
  }
}




