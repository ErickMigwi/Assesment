let allTods = document.getElementById("allTodos")
let completedTodos= document.getElementById("completedTodos")
let uncompletedTodos = document.getElementById("uncompletedTodos")
let data = ''
allTodos.innerHTML+=`<h1>1.All task to be done</h1>`
completedTodos.innerHTML+=`<h1>2.All completed tasks</h1>`
uncompletedTodos.innerHTML+=`<h1>3.All uncompleted tasks</h1>`
 fetch  ('https://dummyjson.com/todos')
 .then(res => res.json())
 .then(data =>{
    data.todos.forEach(element => {
        console.log(element)
        allTods.innerHTML+= `<div id="allTasks"><li>
        <h2>Task Number:${element.id}</h2>
        <h3>Task to be done: ${element.todo}</h3>
        <h4>is it completed:${element.completed}</h4>
        <h5>userId:${element.userId}</h5>
        </li></div>`
        if(element.completed===true){
            
            completedTodos.innerHTML+= `<div id="completed">
            
            <li>
            
            <h2>Task Number:${element.id}</h2>
            <h3>Task to be done: ${element.todo}</h3>
            <h4>is it completed:${element.completed}</h4>
            <h5>userId:${element.userId}</h5>
            </li></div>`
        } 
        else{
            uncompletedTodos.innerHTML+= `<div id= "uncompleted"><li>
            <h2>Task Number:${element.id}</h5>
            <h3>Task to be done: ${element.todo}</h3>
            <h4>is it completed:${element.completed}</h4>
            <h5>userId:${element.userId}</h5>
            </li></div>`
        }
    });
     //function displayCompleted(){}
   
 })