const searh = document.querySelector(".search .textarea"),
   todoLists = document.querySelector(".todoLists"),
   pendingNum = document.querySelector(".pending-num"),
   clearButton = document.querySelector(".clear-button");

   searh.addEventListener("click" , (e) => {
let inputVal = searh.value.trim();

    if(e.key === "Enter" && inputVal > 0){
        console.log(inputVal);

    }
})