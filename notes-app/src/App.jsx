import { useState, useEffect } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'



export default function App() {
    const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))
    return notes || []
})

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const deleteNote = (noteID) => {
        const confirmDelete = window.confirm(
            'Are you sure if you want to delete this note?'
        )
        confirmDelete && setNotes(notes.filter((note) => note.id !== noteID))
    }

    return (
        <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-llg'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Notes App</h2>
            <NoteForm notes={notes} setNotes={setNotes} />
            <NoteList notes={notes} deleteNote={deleteNote} />
        </div>
    )
}
