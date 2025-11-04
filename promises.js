// const myPromise = new Promise((resolve, reject) => {
//     setTimeout( () => resolve('Promise Resolved'), 2000)
//     setTimeout(() => reject("Promise rejected"), 2000)
// })

// myPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const url = 'https://jsonplaceholder.typicode.com/posts/1'
let id
let data

// Fetch
fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data))

// async await
const fetchData = async () => {
    const response = await fetch(url)
    data = await response.json()
}

console.log(`fetchData: ${fetchData} \n`);
console.log(`data: ${data}\n`);
console.log(`post_id: ${id}\n`);

await fetchData() // 
id = data.id

console.log(`data: ${data}\n`)
console.log(`post_id: ${id}`)



