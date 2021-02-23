var dataarr=[];
var a;
var fetched = false;
var api_url="https://jsonplaceholder.typicode.com/users";
count(1);
const load = async () =>{
	let result = await fetch(api_url)
	let db = await result.json()
	var i=1;
	
			var temp="";
			db.forEach((u) => {
				temp +="<tr>";
				temp+="<td>"+ i++ +"</td>";
				temp+="<td id='editName'>"+u.name+"</td>";
				temp+="<td id='editEmail'>"+u.email+"</td>";
				temp+='<td><button style="color:red" type="button" class="fas fa-trash" data-toggle="modal" data-target="#DeleteButton" onclick=store('+(i-1)+')></button></td>';
				temp+='<td><button style="color:DeepSkyBlue" type="button" class="fas fa-edit" data-toggle="modal" data-target="#EditButton" onclick=editFun('+(i-1)+')></button></td>';
				temp+="</tr>";	
				dataarr.push({id:u.id,name:u.name,email:u.email});
			})
			document.getElementById("count").innerHTML=dataarr.length;
			document.getElementById("data").innerHTML= temp;
	fetched = true;
}
/*fetch(api_url,{
method: "GET",
}).then((db) => db.json()
.then(data => {
	var i=1;
		if(data.length > 0){
			var temp="";
			data.forEach((u) => {
				temp +="<tr>";
				temp+="<td>"+ i++ +"</td>";
				temp+="<td id='editName'>"+u.name+"</td>";
				temp+="<td id='editEmail'>"+u.email+"</td>";
				temp+='<td><button type="button" class="fas fa-trash" data-toggle="modal" data-target="#DeleteButton" onclick=store('+(i-1)+')></button></td>';
				temp+='<td><button type="button" class="fas fa-edit" data-toggle="modal" data-target="#EditButton" onclick=editFun('+(i-1)+')></button></td>';
				temp+="</tr>";	
				dataarr.push({id:u.id,name:u.name,email:u.email});
			})
			document.getElementById("count").innerHTML=dataarr.length;
			document.getElementById("data").innerHTML= temp;
		}
	}
))
.catch(error=>{
	console.log(error);
});*/
function store(ArrayData){
    a=ArrayData;
}
function deleteFunction(){
	dataarr.splice((a-1),1);
	
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
}
checker();
async function checker(){
	if(!fetched){
		await load();
	}
}
function addFunction(){

	var ids=dataarr.length +1;
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
	else
	dataarr.push({id:ids,name:Name,email:Email});
	document.getElementById("Name").style.borderColor = "black";
		document.getElementById("Email").style.borderColor = "black"; 
	if(dataarr.length > 0){
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
	}
	document.getElementById("addForm").reset();
	count(i);
	$('#AddButton').modal('hide');
            return;
}
function count(total){
	document.getElementById("count").innerHTML=total-1;
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