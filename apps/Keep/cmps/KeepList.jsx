import { KeepPreview } from "./KeepPreview.jsx"
import { KeepEdit } from "./KeepEdit.jsx"
import { NoteEdit } from "./notes/NoteEdit.jsx"

export function KeepList({ notes, onDeleteNote, onPinnNote, onChangeBgcNote, onCloneNote, onDone , editNote }) {
  // console.log('notes in list', notes);

  return notes.map((note, idx) => {
    return < article className="note flex col" key={idx} style={{ backgroundColor: `${note.style.bgColor}` }}>
      <KeepPreview currCmp={note.type} info={note.info} onDone={onDone} />
      <KeepEdit note={note} onDeleteNote={onDeleteNote}
        onPinnNote={onPinnNote} onChangeBgcNote={onChangeBgcNote}
        onCloneNote={onCloneNote} editNote={editNote}/>
    </article >

  })

}

