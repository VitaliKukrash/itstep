/* неправильно
document.forms.todo_form.onsubmit = function(){
   
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.innerHTML = `Новое задание`;
    list.append(li);
    console.log(list);
    return false;
} 

document.querySelector("ul").onclick = function(event){

 let li = event.target;
 if (li.tagName =="LI"){
     li.classList.toggle("checked");
 }  
}; */

document.forms.todo_form.onsubmit = function(){
    let item = this.task.value;
    if (item.trim() == "")
    return false;

    let li = document.createElement("li");
    li.textContent = item.trim();
    let close = document.createElement("span");
    close.classList.add("close");
    close.textContent = "x";
    li.append(close);
    list.append(li);
    this.task.value = "";
    return false;
}

document.querySelector("ul").onclick = function(event){
    let current = event.target;

    if(current.tagName != "LI")
    return false;
    else  {
        current.classList.toggle("checked");
    }
    

    return false;
}

document.querySelector("ul").addEventListener("click", function (event){
    let current = event.target;

    if(current.tagName != "SPAN")
    return false;
     current.parentElement.remove();
    return false;
});

document.querySelector("ul").addEventListener("click", function (event){
    let current = event.target;

    if(current.tagName != "edit")
    return false;
     current.parentElement.remove();
    return false;
});
