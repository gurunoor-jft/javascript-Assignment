localStorage.clear();
var ids=[];
var a;
var fetched = false;
var api_url="https://jsonplaceholder.typicode.com/users";
Display();
async function load() {
    let res = await fetch(api_url);
    let users = await res.json(); // will return json

    users.map(u => {
        let obj = {};
        obj.id = u.id;
        obj.name = u.name;
        obj.email = u.email;
        ids.push(u.id);
        localStorage.setItem(`user${u.id}`, JSON.stringify(obj));
    })
    Display();
}
function Display(){
    let temp = "";
    if(ids.length == 0){
        temp += "<tr><td>There </td>";
        temp += "<td>Is Nothing</td>";
        temp += `<td><Here</td>`;
        temp += `<td>Add</td>`
        temp += `<td>Something</td></tr>`
    }
    for(let i = 0; i < ids.length; i++) {
        let user = JSON.parse(localStorage.getItem(`user${ids[i]}`));
        temp +="<tr><td>"+ parseInt(i +1) +"</td>";
        temp += "<td>" +user.name + "</td>";
        temp += "<td>" +user.email + "</td>";
        temp += `<td><button onClick = "store(${user.id})"style="color:red" type="button" class="fas fa-trash" data-toggle="modal" data-target="#DeleteButton"></button></td>`
        temp += `<td><button onClick = "editFun(${user.id})"style="color:DeepSkyBlue" type="button" class="fas fa-edit" data-toggle="modal" data-target="#EditButton"></button></td>`
    }
    document.getElementById("data").innerHTML = temp;
}
load();

function Close(){
	document.getElementById("Name").value="";
	document.getElementById("Email").value="";
	document.getElementById("Name").style.borderColor = "black";
	document.getElementById("Email").style.borderColor = "black"; 
	document.getElementById("editName").style.borderColor = "black";
	document.getElementById("editEmail").style.borderColor = "black"; 
}
function addFunction(){
    let newid = ids.length === 0 ? 1 : ids[ids.length-1] + 1;
	var	Name= document.getElementById('Name').value;
	var	Email= document.getElementById('Email').value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(Name === null || Name === "") 
	{
		alert("Enter Name");
		document.getElementById("Name").style.borderColor = "red";
		return false;
	}
	else if(Email === null || Email === ""){
		alert("Enter Email");
		document.getElementById("Name").style.borderColor = "black";
		document.getElementById("Email").style.borderColor = "red";
		return false;
	}
	else if(!Email.match(mailformat)){
		alert("Please Fill Email in xxx@gxxx.com format");
		document.getElementById("Name").style.borderColor = "black";
		document.getElementById("Email").style.borderColor = "red";
		return false;
	}
	else{
    let obj = {
        id: newid, 
        name: Name,
        email: Email
    }
    localStorage.setItem(`user${newid}`, JSON.stringify(obj));
    ids.push(newid);
    document.getElementById("Name").value="";
	document.getElementById("Email").value="";
    Display();
    }
    $('#AddButton').modal('hide');
            return;
}
function store(ArrayData){
    a=ArrayData;
}
function deleteFunction(){
    localStorage.removeItem(`user${a}`);
    ids = ids.filter(d => d !== a);
    Display();
}
function editFun(id){
        obj=localStorage.getItem(`user${id}`);
        document.getElementById('editName').value=JSON.parse(obj).name;
        document.getElementById('editEmail').value=JSON.parse(obj).email;
        store(id);
}

function editFunction(){
    var	Name= document.getElementById('editName').value;
	var	Email= document.getElementById('editEmail').value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(Name === null || Name === "") 
	{
		alert("Enter Name");
		document.getElementById("editName").style.borderColor = "red";
		return false;
	}
	else if(Email === null || Email === ""){
		alert("Enter Email");
		document.getElementById("editName").style.borderColor = "black";
		document.getElementById("editEmail").style.borderColor = "red";		
		return false;
	}
	else if(!Email.match(mailformat)){
		alert("Please Fill Email in xxx@gxxx.com format");
		document.getElementById("editName").style.borderColor = "black";
		document.getElementById("editEmail").style.borderColor = "red"; 
		return false;
	}
    else{
        document.getElementById("editName").style.borderColor = "black";
		document.getElementById("editEmail").style.borderColor = "black"; 
        let obj = {
            id: a, 
            name: Name,
            email: Email
        }
        localStorage.setItem(`user${a}`, JSON.stringify(obj));
        Display();
        $('#EditButton').modal('hide');
        return;
    }

}