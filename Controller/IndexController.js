function LoadPages(name){
var proj = "/Pages/projects.html";
var resume = "/Pages/srajguru_resume_Jul2015_ee_soft1.pdf";
var home = "/Pages/home.html";
var contact = "/Pages/contact.html";
if(name == 'projects'){
document.getElementById('IndexFrame').setAttribute('src', proj);
}
if(name == "resume"){
  document.getElementById('IndexFrame').setAttribute('src', resume);
}
if(name == "home"){
  document.getElementById('IndexFrame').setAttribute('src', home);
}
if(name == "contact"){
  document.getElementById('IndexFrame').setAttribute('src', contact);
}

return true;
}