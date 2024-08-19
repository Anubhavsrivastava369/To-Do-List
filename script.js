const input_text = document.querySelector('.input_text');
const addBtn = document.querySelector('.addBtn');
const todolist = document.querySelector('.todolist');

let action = null;

const ListAdd = () =>{
      if(input_text.value == ""){
        alert("Enter some task...");
        return;
      }
      if(addBtn.innerHTML === "Edit"){
        action.target.previousElementSibling.innerHTML = input_text.value.trim();
        addBtn.innerHTML = "Add";
        input_text.value = "";
        action = null; 
        saveData();
      }
      else{
        const li = document.createElement('li');

        /* For span Button */
        const span = document.createElement('span');
        span.innerHTML =  input_text.value.trim();
        li.appendChild(span);
        input_text.value = "";
        

         /* For Edit Button */
         const Editbtn = document.createElement('button')
         Editbtn.innerHTML = "Edit";
         Editbtn.classList.add('Editbtn');
         li.appendChild(Editbtn);


        /* For Remove Button */
        const Removebtn = document.createElement('button')
        Removebtn.innerHTML = "Remove";
        Removebtn.classList.add('Removebtn');
        li.appendChild(Removebtn);


        todolist.appendChild(li);
        saveData();
      }
}
const update = (e)=>{
    if(e.target.innerHTML === 'Remove'){
        todolist.removeChild(e.target.parentElement);
        saveData();
    }
    else if(e.target.innerHTML === 'Edit'){
          input_text.value = e.target.previousElementSibling.innerHTML.trim();
          input_text.focus();
          addBtn.innerHTML = "Edit";
          action = e;
          saveData();
    }
}

addBtn.addEventListener('click' ,ListAdd);
todolist.addEventListener('click',update);

// Add event listener for 'Enter' key press
input_text.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        ListAdd();
    }
});
function saveData(){
  localStorage.setItem('data',todolist.innerHTML);
}
function showData(){
  todolist.innerHTML = localStorage.getItem('data');
}
showData();