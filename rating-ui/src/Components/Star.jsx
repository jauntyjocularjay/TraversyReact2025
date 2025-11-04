export default function Star({ star, rating, hover, color, ratingClick, ratingHover }) {
    return (
        <span
            className='star'
            style={{ color: star <= (hover || rating) ? color : 'lightgray' }}
            onClick={() => ratingClick(star)}
            onMouseEnter={() => ratingHover(star)}
            onMouseLeave={() => ratingHover(0)}
        >
            {'\u2605'}
        </span>
    )
}