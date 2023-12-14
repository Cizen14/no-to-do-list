

let taskList =[];
//add button select
const addBtn = document.querySelector('#form-btn');
//listen to click event in the bottom
addBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    //select taskname and get value 
    const taskName = document.querySelector('.task-input').value;
    //select taskhr and get value 
    const taskHour = document.querySelector('.hrs-input').value;
    // create each task object 

    const task = {
        name: taskName,
        hour: taskHour,
    };
    taskList.push(task);
    
    // display task 
    displayTasks();

})


//add the above to do list to the table 

// select table body

const tableBody =document.querySelector('#task-list');
//create each table row with td datas

//create seperate function to append each table row

//call function - pass the table row

//add the to-do list to the table body
// const newTodoTask = document.createElement('tr');
// newTodoTask.innerHTML=`
// <td>1</td>
// <td>${taskName}</td>
// <td>${taskHour}</td>
// <td class ="text-end">
//     <button class = "btn btn-danger">
//         <i class="fa-solid fa-trash">
//         </i>
//     </button>
//     <button class = " btn btn-success">
//         <i class="fa-solid fa-right-long"></i>
//     </button>
    
// </td>
// `
// addRow(newTodoTask);

// });
const displayTasks = () => {
    let tableRow = ''
;    //loop over the task list and create each table row
    taskList.forEach((task, index) =>{
        
        tableRow = tableRow +`
        <tr>
            <td>${index+1}</td>
            <td>${task.name}</td>
            <td>${task.hour}</td>
            <td class ="text-end">
                <button onClick = "deleteTask(${index})" class = "btn btn-danger">
                    <i class="fa-solid fa-trash">
                    </i>
                </button>
                <button class = " btn btn-success">
                    <i class="fa-solid fa-right-long"></i>
                </button>
                
            </td>
        </tr>

        `

    })
    addRows(tableRow);
}

const addRows = (tableRow) =>{
    const tableBody = document.querySelector('#task-list');
    tableBody.innerHTML= tableRow;
}

//delete
// add onclick btn listener 



const deleteTask= (index) =>{
    taskList = taskList.filter((task, i)=> i !== index);
 
    displayTasks();
}