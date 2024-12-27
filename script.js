document.getElementsByClassName("list")[0].innerHTML = localStorage.getItem("tasks");
function checkTasks(){
    let d = localStorage.getItem("tasks");
    if(d==''){
        document.getElementsByClassName("list")[0].innerHTML = "No ToDo tasks available";
    }else{
        document.getElementsByClassName("list")[0].innerHTML = d;
    }
}
checkTasks();
function addNote(){
    if(document.getElementsByClassName("input")[0].value==''){
        alert('Please enter a valid Todo Task');
    }else{
        if(document.getElementsByClassName("list")[0].innerHTML=='No ToDo tasks available'){
            document.getElementsByClassName("list")[0].innerHTML = '';
        }
        let text = document.getElementsByClassName("input")[0].value;
        let div = document.createElement("div");
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.classList = "remove";
        li.innerHTML = text;
        span.innerHTML = "⨉";
        div.appendChild(li);
        div.appendChild(span);
        document.getElementsByClassName("list")[0].appendChild(div);
        document.getElementsByClassName("input")[0].value = "";
        localStorage.setItem("tasks", document.getElementsByClassName("list")[0].innerHTML);
    }
}

document.addEventListener("click", function(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("Check");
        localStorage.setItem("tasks", document.getElementsByClassName("list")[0].innerHTML);
    }else if(e.target.classList.contains('remove')){
        e.target.parentElement.remove();
        localStorage.setItem("tasks", document.getElementsByClassName("list")[0].innerHTML);
        checkTasks();
    }
})
