document.querySelector(".start").onclick = function(){
    document.querySelector(".first-form").style.display = 'none';
    document.querySelector(".second-form").style.display = 'block';
    document.querySelector(".field").style.display = 'none';
    return false;
}; 
document.querySelector(".play").onclick = function(){
    document.querySelector(".first-form").style.display = 'none';
    document.querySelector(".second-form").style.display = 'none';
    return false;
}; 
document.querySelector(".start2").onclick = function(){
    document.querySelector(".first-form").style.display = 'none';
    document.querySelector(".second-form").style.display = 'none';
    document.querySelector(".field").style.display = 'block';
    return false;
}; 