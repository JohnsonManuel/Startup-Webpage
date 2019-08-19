var count=0;
var offset=0;
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


document.querySelector('.article-card').addEventListener('click',toggleBUA);

// let slideToggles= document.querySelectorAll('.fas');
// slideToggles.forEach((element)=>{
//   element.addEventListener('click',handleSlider);
// });
document.querySelector('.blowup-article').addEventListener('click',handleSlider)
function handleSlider(e){

  let articleSlider= document.querySelector('.blowup-article-slider');
  //
  // if(count<articleSlider.children.length){
  // }
  // // articleSlider.children.length;
  // console.log(count);
  // (e.target.classList.contains('fa-chevron-circle-left'))?count++:count--;
  console.log(count);
  if((e.target.classList.contains('fa-chevron-circle-left'))||(e.target.classList.contains('fa-chevron-circle-right')))
  {
    (e.target.classList.contains('fa-chevron-circle-left'))?count++:count--;

    if(count<=articleSlider.children.length)
    {
    if(e.target.classList.contains('fa-chevron-circle-left'))
    {
      offset-=90;
    }
    {
      offset+=90;
    }
      articleSlider.style.left=(-offset)+"vw";
  }
}

  console.log(e.target.matches('span'));
  if(e.target.matches('span'))
  {
    console.log("Yeah");
    toggleBUA();
  }

}
function toggleBUA(){
  document.querySelector('.blowup-article').classList.toggle('active');
}
document.querySelector('.language-selector').addEventListener('click',()=>{
  toggleHide(document.querySelector('.language-list'));
},false);

document.querySelector('.language-list').addEventListener('click',function(e){
  if(e.target.matches('a')){
    document.querySelector('.language-selector').firstElementChild.children[0].textContent= e.target.textContent;
  }
});

document.querySelector('.hamburger').addEventListener('click',toggleSideNav);
sidenav.querySelector('span').addEventListener('click',toggleSideNav);
  // document.addEventListener('click',clickOutSideNav,true);



function toggleSideNav(e){
    // console.log(e.target.matches('.sidenav ul'));
    // if(!e.target.matches('.sidenav ul') && !e.target.matches('.hamburger')){
    //   sidenav.classList.remove('expand');
    //   console.log('Added');
    //   document.removeEventListener('click',clickOutSideNav);
    // }
    sidenav.classList.toggle('expand');
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
