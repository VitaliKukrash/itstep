

document.forms.kotiki.onsubmit = function(){

   let name = document.getElementById("cat-name").value;
   console.log(name);
  
    let table = document.getElementById("list");
    let td = table.children[0].children[0].children[0].innerHTML = name;
    console.log(td);

    return false;
};
