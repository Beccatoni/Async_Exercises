const fetchUserTodos = async () => {

    const responses =  await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/todos")
    ])
    const todos = await responses[1].json()
    const users = await responses[0].json()

    users.forEach(element => {
       element.todo =  todos.filter(todo => todo.userId === element.id)     
    });

    // console.log(users)
    for (const iterator of users) {
        console.log(iterator)
        
    }
    
};

fetchUserTodos();
