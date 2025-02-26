//your JS code here. If required.
let age=document.getElementById("age");
let name=document.getElementById("name");

let form=document.querySelector("form");
let submit=document.getElementById("submit");

form.addEventListener("submit",(event)=>{
	event.preventDefault();
if(age.value===""||name.value==="")
{
	alert("Please enter valid details");
	return;
}
	promise1().then((message)=>{alert(message);})
.catch((error)=>{
alert(error);
});
});
let promise1=()=>{
	return new Promise((resolve,reject)=>{
			if(parseInt(age.value)>18)
	{
		resolve("Welcome, . You can vote.");
	}
		else
	{
		return reject("Oh sorry . You aren't old enough.");
	}
	});
	}

	

