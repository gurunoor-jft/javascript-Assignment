var dataarr=[];
var a;
var api_url="https://jsonplaceholder.typicode.com/users";
fetch(api_url,{
method: "GET",
}).then((db) => db.json()
.then(data => {
	var i=1;
		if(data.length > 0){
			var temp="";
			data.forEach((u) => {
				temp +="<tr>";
				temp+="<td>"+ i++ +"</td>";
				temp+="<td>"+u.name+"</td>";
				temp+="<td>"+u.email+"</td>";
				temp+='<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#DeleteButton" onclick=store('+(i-1)+')>Delete Details</button></td>';
				temp+='<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#EditButton" onclick=store('+(i-1)+')>Edit Details</button></td>';
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
});
function store(ArrayData){
    a=ArrayData;
}
function deleteFunction(){
    console.log(a);
	dataarr.splice((a-1),1);
	
		var temp="";
		var i=1;
		dataarr.forEach((u) => {
			temp +="<tr role='row'>";
			temp+="<td role='cell'>"+ i++ +"</td>";
			temp+="<td id='tdName"+i+"' role='cell'>"+u.name+"</td>";
			temp+="<td id='idEmail"+i+"' role='cell'>"+u.email+"</td>";
			temp+='<td role="cell"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#DeleteButton" onclick=store('+(i-1)+')>Delete Details</button></td>';
			temp+='<td role="cell"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#EditButton" onclick=store('+(i-1)+')>Edit Details</button></td>';
			temp+="</tr>";	
		})
		document.getElementById("data").innerHTML= temp;
	count(i);
}


function addFunction(){
	var ids=dataarr.length +1;
	var	Name= document.getElementById('Name').value;
	var	Email= document.getElementById('Email').value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(Name === null || Name === "") 
	{
		alert("Enter Name");
	}
	else if(Email === null || Email === ""){
		alert("Enter Email");
	}
	else if(!Email.match(mailformat)){
		alert("Please Fill Email in xxx@gxxx.com format");
	}
	else
	dataarr.push({id:ids,name:Name,email:Email});
	if(dataarr.length > 0){
		var temp="";
		var i=1;
		dataarr.forEach((u) => {
			temp +="<tr role='row'>";
			temp+="<td role='cell'>"+ i++ +"</td>";
			temp+="<td id='tdName"+i+"' role='cell'>"+u.name+"</td>";
			temp+="<td id='idEmail"+i+"' role='cell'>"+u.email+"</td>";
			temp+='<td role="cell"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#DeleteButton" onclick=store('+(i-1)+')>Delete Details</button></td>';
			temp+='<td role="cell"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#EditButton" onclick=store('+(i-1)+')>Edit Details</button></td>';
			temp+="</tr>";	
			
		})
		document.getElementById("data").innerHTML= temp;
	}
	count(i);
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
	}
	else if(Email === null || Email === ""){
		alert("Enter Email");
	}
	else if(!Email.match(mailformat)){
		alert("Please Fill Email in xxx@gxxx.com format");
	}
	else{
    var i=1;
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
			temp+='<td role="cell"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#DeleteButton" onclick=store('+(i-1)+')>Delete Details</button></td>';
			temp+='<td role="cell"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#EditButton" onclick=store('+(i-1)+')>Edit Details</button></td>';
			temp+="</tr>";		
			
		})
		document.getElementById("data").innerHTML= temp;
	count(i);
}