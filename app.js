document.addEventListener("DOMContentLoaded", function () {
    const allTasks = [];
    const selected = [];

    const removeAllBtn = document.querySelector(`removeAll`);
    const removeSelecteBtn = document.querySelector(`removeSelect`);
    const taskMsg = document.querySelector(`#taskMsg`);
    const addTaskBtn = document.querySelector("#addTask");
    constMain = document.getElementById(`mainTable`);
    let count = 0;

    // let taskMsgDynamic = taskMsg.value;
    const add = () => {
        const taskMsg = document.querySelector("#taskMsg").value;
        const newRow = document.createElement('tr');
        mainTable.innetText = taskMsg;
        mainTable.appendChild(newRow);
        console.log(taskMsg);

    };
    addTaskBtn.addEventListener('click', add());
    // taskMsg.addEventListener("keydown", ()=>{
    // taskMsgDynamic= taskMsg.value;
    // console.log(taskMsgDynamic)
    // })


    const remove = () => {

    };
    const removeAll = () => {

    };
    const removeSelevted = () => {

    };
    const select = () => {

    };
})