let inputs = document.getElementById("inp");
let text = document.querySelector(".texts");
function Add(){
    if(inputs.value == ""){
        alert("Enter Your task")
    }else{
        let newEl = document.createElement("ul");
        newEl.innerHTML= ` <IC class="fa-solid fa-circle-check"></IC>${inputs.value} <i class="fa-solid fa-trash-can"></i>`;
        text.appendChild(newEl);
        inputs.value="";
        newEl.querySelector("i").addEventListener("click",remove);
        function remove() {
            newEl.remove();
        }
         newEl.querySelector("IC").addEventListener("click", toggleCompleted);

        function toggleCompleted() {
            newEl.classList.toggle("completed");
        }
    }    
}

inputs.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        Add(); 
    }
});