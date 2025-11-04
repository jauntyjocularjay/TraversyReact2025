// Nested Destructuring
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


//  






