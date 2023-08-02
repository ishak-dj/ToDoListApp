var btn = document.querySelector('#btn');
var input = document.querySelector('#input');
var tasksContainer = document.querySelector('#tasks');

var tasksList = [];
getDataFromLocal();

if(localStorage.getItem('tasks')){
  tasksList = JSON.parse(localStorage.getItem('tasks'))
}

btn.addEventListener('click',()=>{
  if(input.value !== ""){
    createData(input.value);
    input.value = "";
  }
})

function createData(taskText){
  task = {
    id : Date.now(),
	title : taskText,
	completed : false,
  }
  tasksList.push(task);
  addElements(tasksList);
  setDataToLocal(tasksList);
}

function addElements(tasksList){
  tasksContainer.innerHTML = "";
  tasksContainer.innerHTML = "";
  tasksList.forEach((task)=>{
    //create element
    let div = document.createElement('div');
	let p = document.createElement('p');
	let span = document.createElement('span');
	//element value and class
	div.className = "task";
	div.setAttribute("id" , task.id)
	span.innerHTML = "remove";
	span.className = "span";
	p.innerHTML = task.title;
	//append child
	div.appendChild(p);
	div.appendChild(span);
	tasksContainer.appendChild(div);
	//done 
	div.addEventListener('click',()=>{})
	//remove button
	span.addEventListener('click',()=>{
	  span.parentElement.remove();
	  removeFromArray(span.parentElement.getAttribute('id'));
	})
  })
}
function setDataToLocal(tasksList){
  localStorage.setItem('tasks' , JSON.stringify(tasksList));
}
function getDataFromLocal(){
  let data = localStorage.getItem('tasks');
  if(data){
    let tasks = JSON.parse(data);
	addElements(tasks);
  }
}

function removeFromArray(taskId){
  tasksList = tasksList.filter((task)=> task.id != taskId);
  setDataToLocal(tasksList);
}

