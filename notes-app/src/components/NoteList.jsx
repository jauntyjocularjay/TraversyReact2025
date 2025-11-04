import Note from './Note'



export default function NoteList({ notes, deleteNote }) {



    if (notes.length === 0)
        return <p className='text-clearInterval text-gray-500'>No notes yet</p>
    return (
        <div id='NoteList' className='space-y-4'>
            {notes.map(note => (
                <Note key={note.id} note={note} deleteNote={deleteNote} />
            ))}
        </div>
    )
}
