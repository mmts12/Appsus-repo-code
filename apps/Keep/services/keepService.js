import { utilService } from '../../../services/utilService.js';

export const keepService = {
    query,
    deleteNote,
    pinnNote,
    editNote,
    changeBgcNote,
    cloneNote,
    addNote,
    checkTodo,
    formateTodo,
}

var notes = [
    {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Sprint - Day 1',
            url: 'https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif',
        },
        style: {
            bgColor: 'pink',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteText',
        isPinned: false,
        info: {
            txt: 'Whether You Think You Can Or Can\'t, You Are Right!',
        },
        style: {
            bgColor: 'rgb(246, 221, 152)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Venice',
            url: 'https://i.picsum.photos/id/164/200/200.jpg?hmac=UA4QhIt441pdFJ6Uam2yCxzda_KjWgQgy8fYs_-NFEM',
        },
        style: {
            bgColor: 'rgb(246, 221, 152)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Sprint - Day 2',
            url: 'https://media.giphy.com/media/zHd8x7Pik0Ftm/giphy.gif',
        },
        style: {
            bgColor: 'rgb(164, 255, 164)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteVideo',
        isPinned: false,
        info: {
            title: 'Chillax Man',
            url: 'https://www.youtube.com/embed/CN_NPmKjWDM',
        },
        style: {
            bgColor: 'rgb(167, 255, 235)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Don\'t Forget, even though it\'s sprint time:',
            todos:
                [
                    { txt: 'Eat', isDone: true },
                    { txt: 'Take a shower', isDone: false },
                    { txt: 'Keep it together', isDone: false },
                    { txt: 'Smile', isDone: true },
                    { txt: 'Have Fun', isDone: false },
                ]
        },
        style: {
            bgColor: 'rgb(246, 221, 152)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteVideo',
        isPinned: false,
        info: {
            title: 'Jungle',
            url: 'https://www.youtube.com/embed/Vn8phH0k5HI',
        },
        style: {
            bgColor: 'rgb(167, 255, 235)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Sprint - Day 3',
            url: 'https://media.giphy.com/media/ToMjGpIYtgvMP38WTFC/giphy.gif',
        },
        style: {
            bgColor: 'rgb(246, 221, 152)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Grocery List:',
            todos: [
                { txt: 'Milk', isDone: false },
                { txt: 'Eggs', isDone: true },
                { txt: 'Water', isDone: false },
            ]
        },
        style: {
            bgColor: 'rgb(174, 203, 250)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteText',
        isPinned: false,
        info: {
            txt: 'Everyone Wants To Eat, Few Are Willing To Hunt',
        },
        style: {
            bgColor: 'whitesmoke',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Best Trip Ever',
            url: 'https://i.picsum.photos/id/1035/200/300.jpg?hmac=744aBtkMLjfDyn2TzkMxsFzw2T0L57TMlNGFlX-Qgq0',
        },
        style: {
            bgColor: 'pink',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Sprint - Day 4',
            url: 'https://media.giphy.com/media/KbBij8I7dRDZNEL5Az/giphy.gif',
        },
        style: {
            bgColor: 'rgb(246, 221, 152)',
        },
    },
]

function query() {
    return notes;
}

function deleteNote(id) {
    // console.log('service got id', id);
    var notesToEdit = notes;
    const filteredNotes = notesToEdit.filter(note => { return note.id !== id });
    // console.log('filtered notes in service', filteredNotes);
    notes = filteredNotes;
    return notes;
}

function pinnNote(id) {
    // console.log('service got id', id);
    var notesToEdit = notes;
    const foundNote = notesToEdit.findIndex(note => note.id === id);
    notesToEdit[foundNote].isPinned = true;
    const pinnedNote = notesToEdit[foundNote];
    const filteredNotes = notesToEdit.filter(note => { return note.id !== id });
    notes = [pinnedNote, ...filteredNotes];
    return notes;
}

function editNote(newNote) {
    console.log('the new note', newNote);
    var notesToEdit = notes;
    const foundNote = notesToEdit.findIndex(note => note.id === newNote.id);
    notesToEdit[foundNote] = newNote;
    notes = notesToEdit;
    console.log('note that didnt changed', notes[0]);
    console.log('note that changed', notes[foundNote]);
}

function changeBgcNote(id, color) {
    var notesToEdit = notes;
    const foundNote = notesToEdit.findIndex(note => note.id === id);
    console.log('note to chande', notesToEdit[foundNote]);
    notesToEdit[foundNote].style.bgColor = color;
    notes = notesToEdit;
    return notes;
}

function cloneNote(id) {
    var notesToEdit = notes;
    const foundNote = notesToEdit.find(note => note.id === id);
    var clonedNote = { ...foundNote };
    clonedNote.id = utilService.makeId();
    notes = [clonedNote, ...notesToEdit];
}

function checkTodo(todo, list) {
    var notesToEdit = notes;
    const filteredNotes = notesToEdit.find(note => { return note.type === 'NoteTodos' && note.info.title === list.title });
    var todoIdx = filteredNotes.info.todos.findIndex(task => { return task.txt === todo.txt });
    filteredNotes.info.todos[todoIdx].isDone = !filteredNotes.info.todos[todoIdx].isDone;
}

function formateTodo(strTodos) {
    console.log(strTodos);
    var todos = strTodos.split(',');
    return todos.map(todo => {
        return {
            txt: todo,
            isDone: false,
        }
    })

}

function addNote(note) {
    const newNote = {
        id: utilService.makeId(),
        ...note,
    }
    let noteToAdd = null;
    switch (newNote.type) {
        case 'NoteText':
            console.log('new note', newNote);
            noteToAdd = { ...newNote };
            return notes = [noteToAdd, ...notes];
        case 'NoteImg':
            console.log('new note', newNote);
            noteToAdd = { ...newNote };
            return notes = [noteToAdd, ...notes];
        case 'NoteVideo':
            console.log('new note', newNote);
            noteToAdd = { ...newNote };
            return notes = [noteToAdd, ...notes];
        case 'NoteTodos':
            var strTodos = newNote.info.todos;
            var formatedTodos = formateTodo(strTodos);
            newNote.info.todos = formatedTodos;
            console.log('new note', newNote);
            return notes = [newNote, ...notes];
    }
}

