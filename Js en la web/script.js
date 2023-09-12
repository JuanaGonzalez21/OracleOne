import checkComplete from "./components/checkComplete.js";
import checkDelete from "./components/checkDelete.js";


    const btn = document.querySelector("[data-form-btn]")

    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]")
        const inputData = input.value;
        const list = document.querySelector("[data-list]")
        const task = document.createElement("li")
        task.classList.add("card")
        //backticks

        const taskContent = document.createElement('div')
        taskContent.appendChild(checkComplete())
        const titleTask = document.createElement("span")
        titleTask.classList.add('task')
        titleTask.innerHTML = inputData
        taskContent.appendChild(titleTask)
       
        //task.innerHTML = content
        task.appendChild(taskContent)
        input.value = ''

        task.appendChild(checkDelete())
        list.appendChild(task);

    };
    //listener

    btn.addEventListener("click", createTask);

    
