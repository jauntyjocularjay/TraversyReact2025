import { useState } from 'react'
import TextInput from './input/TextInput'
import TextAreaInput from './input/TextAreaInput'
import SelectInput from './input/SelectInput'



export default function NoteForm({ notes, setNotes }) {

    const options = {
        priority: ['Urgent', 'Medium', 'Low'],
        category: ['work', 'ideas', 'personal'],
    }
    const [formData, setFormData] = useState({
        title: '',
        priority: options.priority[1],
        category: options.category[0],
        description: '',
    })
    const [isFormVisible, setIsFormVisible] = useState(true)
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        // do nothing without a title, description
        if (!formData.title || !formData.description) return
        const newNote = {id: Date.now(), ...formData}

        notes = [newNote].concat(notes)
        setNotes(notes)
        
        setFormData({
            title: '',
            priority: options.priority[1],
            category: options.category[0],
            description: '',
        })
    }

    return (
        <>
            <button
                className='w-full bg-purple-100 border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 border-purple-300 transition mb-4'
                alt='expand/collapse'
                onClick={() => setIsFormVisible(!isFormVisible)}
            >
                {isFormVisible ? '× Hide Form' : '+ Add New Note'}
            </button>
            {isFormVisible && (
                <form className='mb-6' onSubmit={handleSubmit}>
                    <TextInput
                        name='title'
                        className='w-full p-2 border rounded-lg'
                        value={formData.title}
                        onChange={handleChange}
                        required={true}
                    />

                    <SelectInput
                        name='priority'
                        className='w-full p-2 border rounded-lg'
                        value={formData.priority}
                        values={options.priority}
                        onChange={handleChange}
                    />

                    <SelectInput
                        name='category'
                        className='w-full p-2 border rounded-lg'
                        value={formData.category}
                        values={options.category}
                        onChange={handleChange}
                    />

                    <TextAreaInput
                        name='description'
                        className='w-full p-2 border rounded-lg'
                        value={formData.description}
                        onChange={handleChange}
                        required={true}
                    />

                    <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600'>
                        Add Note
                    </button>
                </form>
            )}
        </>
    )
}
