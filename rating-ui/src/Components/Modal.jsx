import Button from './Button'

export default function Modal({ isOpen = false, rating = 0, onClose}){
    if (!isOpen) return null
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <h2>Thank You</h2>
                <p>
                    You rated us: {rating} star{rating > 1 && 's'}
                </p>
                <Button className={'close-btn'} text='Submit' onClick={onClose}/>
            </div>
        </div>
    )
}


