const addBtn = document.querySelector(".addBtn")
const tasks = document.querySelector(".tasks")
const input = document.querySelector(".input")
const task_list = document.querySelector(".task-list")
const deleteBtn = document.querySelector("u")

window.addEventListener("load", () => {
    let alltodos = JSON.parse(localStorage.getItem("todos"))

    for(let i=0;i<alltodos.length;i++){
      if(alltodos[i] != null){
       addTodoUI(alltodos[i])
      }   
    }
})

addBtn.addEventListener("click",(event) => {
    let inputValue = input.value
    if(inputValue != ""){
    //Create li
    addTodoUI(inputValue)
    addStorge(inputValue)
    event.preventDefault()
    input.value = ""
    }
})

task_list.addEventListener("click",(event) => {
    event.target.parentElement.parentElement.remove()
    
    content = event.target.parentElement.parentElement.firstChild.textContent
    console.log(content)
    removeFromStorge(content)
})

function addTodoUI(inputValue){
    let li = document.createElement("li")
    li.classList = "task"
    //create task-content
    let task_content = document.createElement("div")
    task_content.classList = "task-content"
    task_content.textContent = inputValue
    //create buttons
    let buttons = document.createElement('div')
    buttons.classList = "buttons"
    let deleteButton = document.createElement("button")
    deleteButton.classList = "deleteBtn"
    //append buttons
    deleteButton.textContent = "DELETE"
    buttons.append(deleteButton)
    //append li
    li.append(task_content)
    li.append(buttons)
    //li.setAttribute("id",Date.now())
    //append ul
    task_list.append(li)
}

function addStorge(inputValue){
    if(!localStorage.getItem('todos')){
        let todos = []
        todos.push(inputValue)
        localStorage.setItem('todos',JSON.stringify(todos))
        //console.log("salam")
        console.log(localStorage.getItem['todos'])
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'))
        todos.push(inputValue)

        localStorage.setItem("todos",JSON.stringify(todos))
    }
}

addStorge()


function removeFromStorge(todo){
    let todos = JSON.parse(localStorage.getItem("todos"))

    let new_todos = todos.filter((t) => t != todo )

    localStorage.setItem("todos",JSON.stringify(new_todos))
}