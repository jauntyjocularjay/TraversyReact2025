import { useState } from 'react'
import Star from './Star'
import Modal from './Modal'
import Button from './Button'

export default function Rating({
    heading = 'Rate Your Experience',
    color = 'gold',
    feedback_message = ['Terrible', 'Alright', 'Tepid', 'Good', 'Great'],
}) {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1)
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const disableSubmit = () => rating === 0 // <--- Kept only for using disableSubmit as self-documenting code
    const handleSubmit = boolean => setSubmitted(boolean)
    const closeModal = () => {
        setSubmitted(false)
        setRating(0)
        setHover(0)
    }

    feedback_message = ['Offer Feedback'].concat(feedback_message)

    return (
        <div className='rating-container'>
            <h2>{heading}</h2>
            <div className='stars'>
                {stars.map(star => (
                    <Star
                        key={star}
                        star={star}
                        rating={rating}
                        hover={hover}
                        color={color}
                        ratingClick={setRating}
                        ratingHover={setHover}
                    />
                ))}
            </div>
                {<p className='feedback'>
                    {
                        hover > 0
                            ? feedback_message[hover]
                            : feedback_message[rating] // <--- Added an element to feedback_message to avoid having to add -1
                    }
                </p>}

            <Button
                className='submit-btn'
                disabled={disableSubmit()} // <--- Not under an anon function because we want it to run on render
                onClick={handleSubmit}
                text='Submit'
            />
            {submitted && (
                <Modal
                    isOpen={submitted}
                    rating={rating}
                    onClose={closeModal}
                />
            )}
        </div>
    )
}
