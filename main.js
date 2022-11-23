const inputField = document.querySelector(".input-field textarea"),
   todoLists = document.querySelector(".todoLists"),
   pendingNum = document.querySelector(".pending-num"),
   clearButton = document.querySelector(".clear-button");

inputField.addEventListener("click" , (e) => {
let inputVal = inputField.value.trim();

    if(e.key === "Enter" && inputVal > 0){
        console.log(inputVal);

    }
})