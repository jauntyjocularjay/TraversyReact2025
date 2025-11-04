import { BarLoader } from 'react-spinners'

const override = {
    display: 'block',
    margin: '0 auto',
}

export default function Spinner({ color = 'blue', size = '150', cssOverride=override }) {
    return (
        <div>
            <BarLoader
                {...{
                    color,
                    size,
                    cssOverride,
                    'aria-label': 'Loading...',
                }}
            />
        </div>
    )
}
