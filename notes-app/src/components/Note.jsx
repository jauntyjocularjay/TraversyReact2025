import React from 'react'
import { priorityColor } from '../Helpers'




export default function Note({note, deleteNote}) {
  return (
      <div
          key={note.id}
          className={`p-4 ${priorityColor(
              note.priority
          )} rounded-lg shadow-md border-l-4`}
      >
          <h3 className='text-lg font-bold'>{note.title}</h3>
          <p className='text-sm text-gray-600'>
              <strong>Category: {note.category}</strong>
          </p>
          <p className='text-sm text-gay-600'>Priority: {note.priority}</p>
          <p className='mt-2 '>{note.description}</p>
          <button
              className='mt-3 text-red-500 cursor-pointers transition hover:text-red-700'
              onClick={() => deleteNote(note.id)}
          >
              × Delete
          </button>
      </div>
  )
}
