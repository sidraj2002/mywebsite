function LoadPages(name){
var proj = "/Pages/projects.html";
var internships = "/Pages/Internships.html";
var contact = "/Pages/contact.html";
var software = "/Pages/SoftProjects.html";
var hardware = "/Pages/HardProjects.html";
var resume = "/Pages/srajguru_resume_Sept2015_soft1_tx.pdf"
if(name == 'software'){
document.getElementById('IndexFrame').setAttribute('src', software);
}
if(name == "contact"){
  document.getElementById('IndexFrame').setAttribute('src', contact);
}
if(name == "internships"){
  document.getElementById('IndexFrame').setAttribute('src', internships);
}
if(name == "hardware"){
  document.getElementById('IndexFrame').setAttribute('src', hardware);
}
if(name == "resume"){
  document.getElementById('IndexFrame').setAttribute('src', resume);
}

return true;
}
function scrollWin() {
    window.scrollTo(0, 1200);
}
