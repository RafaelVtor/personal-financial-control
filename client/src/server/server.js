import axios from 'axios'

let data = []
axios.get('http://localhost:3001/api/transaction/findAll').then((response) => {
    data = response.data
})

// const instance = axios.create({
//     baseURL: 'http://localhost:3001/api/transaction/findAll',
//     timeout: 1000,
//     headers: { 'X-Custom-Header': 'foobar' }
// });

// console.log(instance)
console.log(data)
export default data