# Traversy React 2025 Notes

## VanillaJS Refresher

### Nested Destructuring

const classSummary = {
    subject: "biology",
    date: '20250420',
    topic: "cell parts",
    notes: ['Mitochondria is the powerhouse of the cell', '\nThe wall is a protective barrier that keeps the parts within the cell.']
}

const { subject, date, topic, notes: [...notes] } = classSummary;

const images = null

console.log(
`subject: ${subject}
date: ${date}
topic: ${topic}
${notes}
`)

// Optional Chaining
classSummary.notes?.forEach(note => console.log(`${note}, `))
if(!images) console.log('\nimages is not null.')

// Nullish Operator '??'

let value = true
let nullResult = 'return string A' ?? null
let negResult = value || "return string B"
let posResult = value && "return string C"

console.log(nullResult)
console.log(negResult)
console.log(posResult)


## What Are Hooks?

A hook is a special function in React that lets you "hook into" built-in features like
 - state
 - lifecycle methods
 - context
inside functional components. The begin with "use-"

```const [clicked, useClicked] = useState(false)```

## Component Lifecycle and useEffect Hook

1. mounting to dom
    1. component will mount
    1. render
    1. component did mount
1. updating
    1. component will receive props
    1. should component update
    1. component will update
    1. render
    1. component did update
1. unmounting from dom
    1. component will unmount

the `useEffect` hook uses these lifecycle points. Renders the state live. 

`useEffect` is used to fetch data from APIs



