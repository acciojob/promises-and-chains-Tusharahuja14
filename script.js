//your JS code here. If required.
let age=document.getElementById("age");
let name=document.getElementById("name");

let form=document.querSelector("form");
let submit=document.getElementById("submit");


form.preventDefault();
let promise1=()=>{
	if(age>18)
	{
	return new Promise((resolve,reject)=>{
		resolve("Welcome, . You can vote.");
	});
	}
	else
	{
		reject("Oh sorry . You aren't old enough.");
	}
}
function print()
{

	if(age.value===""&&name.value==="")
{
	alert("Please enter valid details");
}
	else
	{
		console.log(name,age);
	}
}

