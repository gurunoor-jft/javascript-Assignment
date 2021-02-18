var dataarr=[];
var api_url="https://jsonplaceholder.typicode.com/users";
fetch(api_url,{
method: "GET",
}).then((db) => db.json()
.then(data => {
		if(data.length > 0){
			var temp="";
			data.forEach((u) => {
				temp +="<tr>";
				temp+="<td>"+u.id+"</td>";
				temp+="<td>"+u.name+"</td>";
				temp+="<td>"+u.email+"</td>";
				temp+='<td><button onclick="deletefunction()">Delete</button></td>';
				temp+='<td><button onclick="editfunction()">Edit</button></td>';
				temp+="</tr>";	
				dataarr.push({id:u.id,name:u.name,email:u.email});
			})
			document.getElementById("data").innerHTML= temp;
		}
	}
))
.catch(error=>{
	console.log(error);
});

function Addfunction(){
	var ids=dataarr.length +1;
	var	Name= document.getElementById('Name').value;
	var	Email= document.getElementById('Email').value;
	if(Name === null || Email === null || Name ==="" || Email==="")
	{
		alert("Enter Details");
	}
	else
	dataarr.push({id:ids,name:Name,email:Email});
	if(dataarr.length > 0){
		var temp="";
		dataarr.forEach((u) => {
			temp +="<tr>";
			temp+="<td>"+u.id+"</td>";
			temp+="<td>"+u.name+"</td>";
			temp+="<td>"+u.email+"</td>";
			temp+='<td><button onclick="deletefunction()">Delete</button></td>';
			temp+='<td><button onclick="editfunction()">Edit</button></td>';
			temp+="</tr>";	
		})
		document.getElementById("data").innerHTML= temp;
	}
}