
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
let header = document.getElementsByTagName('header');

  if (currentScrollPos > prevScrollpos) {
    header[0].style.transform= "translateY(-100%)";
  } else {
    header[0].style.transform = "translateY(0)";
  }
  prevScrollpos = currentScrollPos;
}

var sidenav= document.querySelector('.sidenav');

document.querySelector('.language-selector').addEventListener('click',()=>{
  toggleHide(document.querySelector('.language-list'));
},false);

document.querySelector('.language-list').addEventListener('click',function(e){
  if(e.target.matches('a')){
    document.querySelector('.language-selector').firstElementChild.children[0].textContent= e.target.textContent;
  }
});

document.querySelector('.hamburger').addEventListener('click',function(){
  sidenav.classList.add('expand');
  document.addEventListener('click',clickOutSideNav);
});


function clickOutSideNav(e){
    console.log(e.target.matches('.sidenav ul'));
    if(!e.target.matches('.sidenav ul') && !e.target.matches('.hamburger')){
      sidenav.classList.remove('expand');
      console.log('Added');
      document.removeEventListener('click',clickOutSideNav);
    }

}
function toggleHide(toToggle){
  toToggle.classList.toggle('hide');
}

//drag and drop window handler
addEventsHandler(window,['drop','dragover'],dropHandler);

function addEventsHandler(target,events,handler){
  for(let i=0;i<events.length;i++)
  {
    target.addEventListener(events[i], handler, true);
  }
}

 function dropHandler(e){
   e.preventDefault();
 }

 //file dropHandler file select handleFileDrop
document.getElementById('cv-upload').addEventListener('change',handleFileDrop);
document.querySelector('.file-dropzone').addEventListener('drop', handleFileDrop);

 function handleFileDrop(){
   if(this.matches('div'))
   {
     var dt = event.dataTransfer;
     var files = dt.files;
   }
   else{
     var files=this.files;
   }
  document.getElementById("fileuploaded").textContent=files[0].name;

 }
