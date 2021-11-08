parent.onmouseover = parent.onmouseout = handler;

function handler(event){
    if (event.type == 'mouseover') {
        event.target.style.background = 'pink';
        // event.relatedTarget.style.background = '';
      }
      if (event.type == 'mouseout') {
        event.target.style.background = '';
        event.relatedTarget.style.background = '';
      }
}