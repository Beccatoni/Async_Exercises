// Write a function that makes an asynchronous request using
//  `XMLHttpRequest` and logs the response.

const fetchData = async () =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    xhr.send();
    console.log(xhr); 
}