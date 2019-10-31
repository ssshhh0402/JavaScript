axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response)
        return response.data
    })
console.log('bye')