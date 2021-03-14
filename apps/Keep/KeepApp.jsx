import { KeepAdd } from "./cmps/KeepAdd.jsx";
import { KeepList } from "./cmps/KeepList.jsx";
import { keepService } from "./services/keepService.js";
import { NoteEdit } from "./cmps/notes/NoteEdit.jsx";
import { KeepFilter } from "./cmps/KeepFilter.jsx";

export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: {
            type: '',
            text: '',
        }
    };

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        const notes = keepService.query()
        this.setState({ notes });
    }

    addNote = (newNote) => {
        console.log('father got', newNote);
        keepService.addNote(newNote);
        this.loadNotes();
    }

    deleteNote = (noteId) => {
        keepService.deleteNote(noteId);
        this.loadNotes();
    }

    pinnNote = (noteId) => {
        keepService.pinnNote(noteId);
        this.loadNotes();
    }

    changeBgcNote = (noteId, color) => {
        keepService.changeBgcNote(noteId, color);
        this.loadNotes();
    }

    cloneNote = (noteId) => {
        keepService.cloneNote(noteId);
        this.loadNotes();
    }

    filterNote = (value) => {
        this.setState({ filterBy: value });
        this.getNotesForDisplay();
    }

    checkTodo = (todo, list) => {
        // console.log('todo', todo);
        keepService.checkTodo(todo, list);
        this.loadNotes();
    }

    editNote = (note) => {
        // console.log('got note', note);
        keepService.editNote(note);
        this.loadNotes();
    }

    getNotesForDisplay = () => {
        const filter = this.state.filterBy;
        const { notes } = this.state;
        // console.log('filtering by', filter);
        switch (filter.type) {
            case 'NoteText':
                return notes.filter(note => {
                    // console.log('note', filter.text);
                    let txt = note.info.txt;
                    return note.type === ('NoteText') && txt.toLowerCase().includes(filter.text);
                })
            case 'NoteImg':
                return notes.filter(note => {
                    console.log('note', note);
                    let txt = note.info.title;
                    return note.type === ('NoteImg') && txt.toLowerCase().includes(filter.text);
                })
            case 'NoteVideo':
                return notes.filter(note => {
                    let txt = note.info.title;
                    return note.type === ('NoteVideo') && txt.toLowerCase().includes(filter.text);
                })
            case 'NoteTodos':
                return notes.filter(note => {
                    let txt = note.info.title;
                    return note.type === ('NoteTodos') && txt.toLowerCase().includes(filter.text);
                })
            case '':
            case 'All':
                return notes.filter(note => {
                    let txt = note.info.title || note.info.txt;
                    return txt.toLowerCase().includes(filter.text);
                })
        }
    }

    render() {
        const { notes } = this.state;
        if (!notes || !notes.length) return <h1>Loading...</h1>;
        return (
            <section className="keep-app main-layout">
                <KeepFilter filterNote={this.filterNote} />
                <div className="add-area">
                    <KeepAdd addNote={this.addNote} />
                </div>

                <div className="notes-container">
                    <KeepList notes={this.getNotesForDisplay()} onDeleteNote={this.deleteNote} onPinnNote={this.pinnNote}
                        onChangeBgcNote={this.changeBgcNote} onCloneNote={this.cloneNote}
                        onDone={this.checkTodo} editNote={this.editNote} />
                </div>
            </section>
        );
    }
}





