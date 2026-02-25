function setCookie(name,value){
document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name){

let cookies = document.cookie.split(";");

for(let i=0;i<cookies.length;i++){
let c = cookies[i].trim();

if(c.startsWith(name + "=")){
return c.substring(name.length+1);
}
}

return null;
}

function login(){

let role = document.getElementById("role").value;

setCookie("active_role",role);

if(role === "Nurse"){
window.location.href="nurse.html";
}
else if(role === "Admin"){
window.location.href="admin.html";
}
else{
window.location.href="index.html";
}

}

function logout(){

document.cookie="active_role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
window.location.href="index.html";

}


const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");

if(passwordInput){

passwordInput.addEventListener("input", function(){

let value = passwordInput.value;

let rules = 0;

if(value.length >= 8) rules++;
if(/[0-9]/.test(value)) rules++;
if(/[!@#$%^&*]/.test(value)) rules++;

if(rules <= 1){
feedback.style.color="red";
feedback.innerText="Weak Password";
}
else if(rules == 2){
feedback.style.color="orange";
feedback.innerText="Medium Password";
}
else{
feedback.style.color="green";
feedback.innerText="Strong Password";
}

});

}

function togglePassword(){

let input = document.getElementById("password");

if(input.type === "password"){
input.type="text";
}
else{
input.type="password";
}

}

/* AUTO LOGIN */

window.onload = function(){

let role = getCookie("active_role");

if(role === "Nurse"){
window.location.replace("nurse.html");
}

if(role === "Admin"){
window.location.replace("admin.html");
}

}


function checkNurseAccess(){

let role = getCookie("active_role");

if(!role || role === "Anonymous"){
window.location.href="error.html";
}

}

function checkAdminAccess(){

let role = getCookie("active_role");

if(!role || role !== "Admin"){
window.location.href="error.html";
}

}