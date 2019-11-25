document.addEventListener("DOMContentLoaded", function(){
	const selected = [];
	const allTasks = [];
	
	const removeAllBtn = document.getElementById('removeAll');
	const removeSelectBtn = document.getElementById('removeSelect');
	const taskMsg = document.querySelector("#taskMsg");
	const addTaskBtn = document.querySelector("#addTask");
	const mainTable = document.getElementById('mainTable');
	let count = 0
	// let taskMsgDynamic = taskMsg.value;
	const add = ()=> {
		count++
	const countCell = document.createElement("td");
	const msgCell = document.createElement("td");
	const taskMsg = document.querySelector("#taskMsg").value;
	const newRow = document.createElement('tr');
	msgCell.innerText = taskMsg;
	countCell.innerText = count;
	newRow.appendChild(countCell);
	newRow.appendChild(msgCell);
	
	
	
		mainTable.appendChild(newRow);
		console.log(taskMsg);
		
	};
	addTaskBtn.addEventListener('click', add);
	// taskMsg.addEventListener("keyup", ()=>{
	// 	taskMsgDynamic = taskMsg.value;
	// 	console.log(taskMsgDynamic);
	// })
	
	const select = () => {
		
	};
	const remove = () => {
		
	};
	const removeAll = () => {
		
	};
	const removeSelected = () => {
		
	};

})
