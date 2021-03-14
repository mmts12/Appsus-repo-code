import { keepService } from "../../services/keepService.js";

export class NoteEdit extends React.Component {
    state = {
        note: {
            type: '',
            isPinned: false,
            info: '',
            style: {
                bgColor: '',
            },
        },
        placeholder: 'Change Something...',
        isTitled: false,
        todoList: '',
        originalNote: {},
    };

    componentDidMount() {
        const { note } = this.props;
        const { todos } = this.props.note.info;
        if (todos) this._renderTodos(todos);
        this._checkIfTitled(note);
        this.setState({ note, originalNote: note });
        // this.setState({ note, originalNote: note }, () => console.log('originalNote', this.state.originalNote));
    }

    handleChange = (ev) => {
        const copy = { ...this.state.note };
        if (copy.type === 'NoteTodos') {
            this.setState({ todoList: ev.target.value }, () => {
                // this.setState({ info: todoList })
            });
            // const todoFormated = keepService.formateTodo(this.state.todoList);
        }
        else if (copy.type === 'NoteText') copy.info.txt = ev.target.value;
        else copy.info[ev.target.name] = ev.target.value;
        this.setState({ note: copy });
    }

    onEdit = (ev, note) => {
        ev.preventDefault();
        const copy = { ...this.state.note };
        if (copy.type === 'NoteTodos') {
            const todoFormated = keepService.formateTodo(this.state.todoList);
            copy.info = {
                title: this.state.note.info.title,
                todos : todoFormated
            }
        }
        this.props.editNote(copy);
        this.props.toggleEditNote()
    }

    _checkIfTitled = (note) => {
        let isTitled = note.type === 'NoteText' ? false : true;
        this.setState({ isTitled });
    }

    _renderTodos = (todos) => {
        const todotxts = todos.map(todo => { return todo.txt });
        var todoList = todotxts.join();
        this.setState({ todoList }, () => {
            console.log('todolist is', this.state.todoList);
        });
    }

    _cancelEdit = () => {
        this.setState({ note: this.state.originalNote })
    }

    render() {
        const { type } = this.state.note;
        const { isTitled, todoList, note } = this.state;
        const { txt, url, todos } = this.state.note.info;
        console.log('todo in state', todos);
        return (
            <form className='edit-note flex col' style={{ display: 'inline-block' }} onSubmit={(ev) => { this.onEdit(ev, note) }}>
                <input hidden={!isTitled}
                    type="text"
                    name="title"
                    value={this.state.note.info.title || ''}
                    autoFocus
                    autoComplete="off"
                    placeholder={'Change Note\'s Title'}
                    onChange={this.handleChange}
                />

                <input
                    type="text"
                    name={type === "NoteTodos" ? "todos" : "url"}
                    value={txt || url || todoList}
                    autoFocus
                    autoComplete="off"
                    placeholder={'Change Note\'s Text \/ URL'}
                    onChange={this.handleChange}
                />
                <div className="btn-container flex space-between">
                    <button type="submit" className="save-btn" onSubmit={(ev) => { this.onEdit(ev, note) }}>Save</button>
                    <button type="button" className="cancel-btn" onClick={() => { this.props.toggleEditNote(), this._cancelEdit() }}>Cancel</button>
                </div>
            </form>
        )
    }
}