var jsonData;
var a;
var fetched = false;
var api_url="https://jsonplaceholder.typicode.com/users";
count(1);
const load = async () =>{
	let result = await fetch(api_url)
	let db = await result.json()
	localStorage.setItem('user', JSON.stringify(db));
	display();
	fetched=true;
}

if(JSON.parse(localStorage.user).length === 0){
	load();
}
else{
	display();
}
function resetFunction(){
	localStorage.clear;
	load();
}
function display(){
	let temp="";
	jsonData=JSON.parse(localStorage.user);
	var i=1;
		jsonData.forEach((jsonD) => {
			temp +="<tr role='row'>";
			temp+="<td role='cell'>"+ i++ +"</td>";
			temp+="<td role='cell'>"+jsonD["name"]+"</td>";
			temp+="<td role='cell'>"+jsonD["email"]+"</td>";
			temp+='<td><button style="color:red" type="button" class="fas fa-trash" data-toggle="modal" data-target="#DeleteButton" onclick=store('+jsonD["id"]+')></button></td>';
			temp+='<td><button style="color:DeepSkyBlue" type="button" class="fas fa-edit" data-toggle="modal" data-target="#EditButton" onclick=editFun('+jsonD["id"]+')></button></td>';
			temp+="</tr>";	
		})
		document.getElementById("data").innerHTML= temp;
		count(i);
}
function store(ArrayData){
    a=ArrayData;
}
function deleteFunction(){
	let newUser = JSON.parse(localStorage.user).filter(u => u.id !== (a));
	localStorage.setItem('user', JSON.stringify(newUser))
	display();
}
function addFunction(){
	var	Name= document.getElementById('Name').value;
	var	Email= document.getElementById('Email').value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+/;
	if(Name === null || Name === "") 
	{
        document.getElementById("addEmailSpan").innerHTML="";
		document.getElementById("addNameSpan").innerHTML=" Add Name";
		document.getElementById("Name").style.border = "rgb(230, 28, 28) 1px solid";
		return false;
	}
	else if(Email === null || Email === ""){
        document.getElementById("addNameSpan").innerHTML="";
		document.getElementById("addEmailSpan").innerHTML=" Add Email";
		document.getElementById("Name").style.border = "black 1px solid";
		document.getElementById("Email").style.border = "rgb(230, 28, 28) 1px solid";
		return false;
	}
	else if(!Email.match(mailformat)){
        document.getElementById("addNameSpan").innerHTML="";
		document.getElementById("addEmailSpan").innerHTML="Please Fill Email in xxx@gxxx.com format";
		document.getElementById("Name").style.border = "black 1px solid";
        document.getElementById("Email").style.border="rgb(230, 28, 28) 1px solid";
		return false;
	}
	else
	document.getElementById("Name").style.borderColor = "black";
	document.getElementById("Email").style.borderColor = "black"; 
	var len= JSON.parse(localStorage.user).length;
	var ids=JSON.parse(localStorage.user)[len-1].id;
	var Name = document.getElementById("Name").value;
	var Email = document.getElementById("Email").value;	
		let newUser = JSON.parse(localStorage.user);
		newUser.push({id:(ids+1),name:Name,email:Email});
		localStorage.setItem('user', JSON.stringify(newUser))
		display();
	document.getElementById("addForm").reset();
	$('#AddButton').modal('hide');
            return;
}
function count(total){
	document.getElementById("count").innerHTML=total-1;
}
function editFunction(){
    var	Name= document.getElementById('editName').value;
	var	Email= document.getElementById('editEmail').value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+/;
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
    var i=1;
	document.getElementById("editName").style.borderColor = "black";
		document.getElementById("editEmail").style.borderColor = "black"; 
    for(i=1;i<=dataarr.length;i++){
        if(i === a){
                    dataarr[i-1].name =Name;
                    dataarr[i-1].email=Email;
        }
    }}
    var temp="";
		var i=1;
		dataarr.forEach((u) => {
			temp +="<tr role='row'>";
			temp+="<td role='cell'>"+ i++ +"</td>";
			temp+="<td id='tdName"+i+"' role='cell'>"+u.name+"</td>";
			temp+="<td id='idEmail"+i+"' role='cell'>"+u.email+"</td>";
			temp+='<td><button style="color:red" type="button" class="fas fa-trash" data-toggle="modal" data-target="#DeleteButton" onclick=store('+(i-1)+')></button></td>';
				temp+='<td><button style="color:DeepSkyBlue" type="button" class="fas fa-edit" data-toggle="modal" data-target="#EditButton" onclick=editFun('+(i-1)+')></button></td>';
			temp+="</tr>";		
			
		})
		document.getElementById("data").innerHTML= temp;
	count(i);
	$('#EditButton').modal('hide');
            return;
}
function editFun(editid){
	var i=1;
	for(i=1;i<=dataarr.length;i++){
		if(i === editid){
			document.getElementById('editName').value=dataarr[editid -1].name;
			document.getElementById('editEmail').value=dataarr[editid -1].email;
			store(editid);
			break;
		}
	}
}
function Close(){
	document.getElementById("Name").value="";
	document.getElementById("Email").value="";
	document.getElementById("Name").style.borderColor = "black";
	document.getElementById("Email").style.borderColor = "black"; 
	document.getElementById("editName").style.borderColor = "black";
	document.getElementById("editEmail").style.borderColor = "black"; 
}