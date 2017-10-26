window.onload = function()
{
    var count = 0;
    var addButton = document.getElementById('addButton');
    addButton.onclick = function ()
    {
        var val = document.getElementById('input').value;
        if (val === '' || val.trim() === '') {
            alert("This can not be empty !!!");
        } else {
            addItem(val);

        var divChild = document.createElement("div");
        divChild.id = "divChild"+(count++);
        //divChild.className = "divClass";

        var label = document.createElement("input");
        label.setAttribute("id","label");
        label.type = "text";
        label.disabled = true;
        //var txt = document.createTextNode(val);
        label.value = val;
        label.className = "labelClass";
        //label.appendChild(txt);

        var childButtonDone = document.createElement("button");
        childButtonDone.setAttribute("id","childButtonDone");
        childButtonDone.value = "childButtonDone";
        childButtonDone.innerText = "Done";
        childButtonDone.className = "buttonClass";
        var param = divChild.id;
        childButtonDone.setAttribute("onclick","doneDiv("+param+")");

        var childButtonEdit = document.createElement("button");
        childButtonEdit.setAttribute("id","childButtonEdit");
        childButtonEdit.value = "childButtonEdit";
        childButtonEdit.innerText = "Edit";
        childButtonEdit.className = "buttonClass";
        var param = divChild.id;
        childButtonEdit.setAttribute("onclick","editDiv("+param+")");

        var childButtonDelete = document.createElement("button");
        childButtonDelete.setAttribute("id","childButtonDelete");
        childButtonDelete.value = "childButtonDelete";
        childButtonDelete.innerText = "Delete";
        childButtonDelete.className = "buttonClass";
        var param = divChild.id;
        childButtonDelete.setAttribute("onclick","deleteDiv("+param+","+count+")");

        myDiv.appendChild(divChild);
        divChild.appendChild(label);
        divChild.appendChild(childButtonDone);
        divChild.appendChild(childButtonEdit);
        divChild.appendChild(childButtonDelete);
    }}
}
function deleteDiv(div,count){
    if (div) {
        var val = div.childNodes[0].value;
        var index = list.items.indexOf(val);
        list.items.splice(index,1);
        div.parentNode.removeChild(div);
    }
}
function doneDiv(div){
    if (div) {
        if(div.childNodes[0].value === "" || div.childNodes[0].value.trim() ===""){alert("This can not be empty !!!");}
        else{
            div.childNodes[0].disabled = true;
            div.childNodes[0].className ="doneClass";
            div.childNodes[0].style.backgroundColor = "lightgray";
            div.childNodes[1].remove();
            div.childNodes[1].remove();
        }
    }
}
function editDiv(div){
    if (div) {
        if(div.childNodes[2].innerText === "Edit"){
            div.childNodes[0].disabled = false;
            div.childNodes[0].style.backgroundColor = "white";
            div.childNodes[2].innerText = "Update";
        }
        else{
            if(div.childNodes[0].value === "" || div.childNodes[0].value.trim() ===""){alert("This can not be empty !!!");}
            else{div.childNodes[0].disabled = true;
            div.childNodes[0].style.backgroundColor = "lightgray";
            div.childNodes[2].innerText = "Edit";}
        }
    }
}