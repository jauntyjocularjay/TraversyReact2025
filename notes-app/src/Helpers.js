export function priorityColor(priorityString) {
    switch (priorityString) {
        case 'Urgent':
            return 'border-l-red-500'
        case 'Medium':
            return 'border-l-yellow-500'
        case 'Low':
            return 'border-l-green-500'
        default:
            return 'border-l-black'
    }
}

