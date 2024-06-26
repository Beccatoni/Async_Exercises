// Write an asynchronous function using `async`/`await` to fetch and log data from an API.

const getData =  async (url)=>{
    const data = await fetch(url);
    const realData = await data.json();

    return realData;
 }

 getData('https://jsonplaceholder.typicode.com/todos/')
    .then((data) => console.log(data))
    .catch(err=> console.error('Error fetching', err))