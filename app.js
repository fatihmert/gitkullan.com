function copyClipboard(){
    let willCopy = this.innerHTML;
    let input = document.createElement("input");
    input.setAttribute("value", willCopy);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
}

let commands = document.getElementsByClassName('cmd');
for(let i = 0; i < commands.length; i++){
    commands[i].addEventListener('click',copyClipboard,false);
}
