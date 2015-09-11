function LoadPages(name){
var proj = "/Pages/projects.html";
var resume = "/Pages/srajguru_resume_Jul2015_ee_soft1.pdf";
var internships = "/Pages/Internships.html";
var contact = "/Pages/contact.html";
var software = "/Pages/SoftProjects.html";
var hardware = "/Pages/HardProjects.html";
if(name == 'software'){
document.getElementById('IndexFrame').setAttribute('src', software);
}
if(name == "resume"){
  document.getElementById('IndexFrame').setAttribute('src', resume);
}
if(name == "internships"){
  document.getElementById('IndexFrame').setAttribute('src', internships);
}
if(name == "hardware"){
  document.getElementById('IndexFrame').setAttribute('src', hardware);
}

return true;
}
function scrollWin() {
    window.scrollTo(0, 1150);
}
