const add= document.querySelector(".add .textarea1"),
   todoLists = document.querySelector(".todoLists"),
   pendingNum = document.querySelector(".pending-num"),
   btn = document.querySelector(".btn");
    
   function allTasks(){
    let tasks = document.querySelector(".pending");
   }

   add.addEventListener("keyup" , (e) => {
    let inputVal = add.value.trim();
    ;


       if (e.key === "Enter" && inputVal.length > 0){
          let litag = `<li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox">
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash-alt" onclick= "deleteTask(this)"></i>
          </li>`;

          todoLists.insertAdjacentHTML("beforeend", litag);
          add.value = "";
          allTasks();
       }
    });
      
    function deleteTask(e){
        e.parentElement.remove(); 
    }

    function handleStatus(e){
        const checkbox = e.querySelector("input");
        console.log(checkbox)
        checkbox.checked = checkbox.checked ? false : true;
        e.classList.toggle("pending")
    } 

    btn.addEventListener("click" , () => {
        todoLists.innerHTML = "";
    })
      

    