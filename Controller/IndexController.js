function LoadPages(name){
var proj = "/Pages/projects.html";
var resume = "/Pages/srajguru_resume_Jul2015_ee_soft1.pdf";
if(name == 'projects'){
document.getElementById('IndexFrame').setAttribute('src', proj);
};
if(name == "resume"){
  document.getElementById('IndexFrame').setAttribute('src', resume);
};

return true;
};
