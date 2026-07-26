// Academic Planner

function addTask() {

let input = document.getElementById("taskInput");

let task = input.value.trim();

if(task === ""){

alert("Please enter a task.");

return;

}

let li = document.createElement("li");

li.innerHTML = task + " ";

let completeButton = document.createElement("button");

completeButton.innerHTML = "Complete";

completeButton.onclick = function(){

li.style.textDecoration = "line-through";

li.style.color = "green";

};

let deleteButton = document.createElement("button");

deleteButton.innerHTML = "Delete";

deleteButton.onclick = function(){

li.remove();

};

li.appendChild(completeButton);

li.appendChild(deleteButton);

document.getElementById("taskList").appendChild(li);

input.value = "";

}



// Contact Form Validation

document.addEventListener("DOMContentLoaded", function(){

let form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();

let email = document.getElementById("email").value.trim();

let phone = document.getElementById("phone").value.trim();

let message = document.getElementById("message").value.trim();

if(name==="" || email==="" || phone==="" || message===""){

alert("Please fill in every field.");

return;

}

alert("Thank you, your message has been received!");

form.reset();

});

}

});



// Welcome Message

window.onload = function(){

console.log("Welcome to Abdulrahman's Portfolio Website");

};
