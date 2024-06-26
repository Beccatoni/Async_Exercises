// Using the Fetch API, write a function 
// to fetch data from an API endpoint and 
// log the response to the console.

const getData =  (url)=>{
   return fetch(url)
}


getData('https://jsonplaceholder.typicode.com/todos/')
.then((data)=> data.json())
.then(data => console.log(data))