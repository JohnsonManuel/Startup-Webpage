var count=0;
var offset=0;



let articlecards =document.querySelectorAll('.article-card');

articlecards.forEach((elem)=>{elem.addEventListener('click',handleArticleOpen);});

document.querySelector('.blowup-article').addEventListener('click',handleSlider);

function handleArticleOpen(){
   count= getNodeindex(this);
   moveSlide(count);
   toggleBUA();
}
function getNodeindex(elem){
  var elemChildren= elem.parentNode.children, i=0;
  for(;i<elemChildren.length;i++)
  {
    if(elemChildren[i] == elem) return i;
  }
}
function handleSlider(e){
  let articleSlider= document.querySelector('.blowup-article-slider');
  if((e.target.classList.contains('fa-chevron-circle-left'))||(e.target.classList.contains('fa-chevron-circle-right')))
  {
    if(e.target.classList.contains('fa-chevron-circle-left')&&count>0){
      count--;
    }
    if(e.target.classList.contains('fa-chevron-circle-right')&& count<articleSlider.children.length-1){
      count++;
    }
    moveSlide(count)
  }
  if(e.target.matches('span'))
  {
    toggleBUA();
  }
}

function moveSlide(toMove = count){
  let articleSlider= document.querySelector('.blowup-article-slider');
  let offset = toMove*90;
  articleSlider.style.left=(-offset)+"vw";
}

function toggleBUA(){
  setTimeout(()=>{document.querySelector('.blowup-article').classList.toggle('active');},400);
}


document.querySelector('.language-selector').addEventListener('click',()=>{
  toggleHide(document.querySelector('.language-list'));
},false);

document.querySelector('.language-list').addEventListener('click',function(e){
  if(e.target.matches('a')){
    document.querySelector('.language-selector').firstElementChild.children[0].textContent= e.target.textContent;
  }
});

document.querySelector('.hamburger').addEventListener('click',togglemobileMenu);

  // document.addEventListener('click',clickOutmobileMenu,true);

let mobileMenu= document.querySelector('.mobilemenu').addEventListener('click',handleMobileMenuClick);

function handleMobileMenuClick(e){
  if(e.target.matches('a')){
    e.target.classList.add('current');
    setTimeout(togglemobileMenu,100);

  }
}

function togglemobileMenu(){
    document.querySelector('.header-wrapper').classList.toggle('mobilemenuopen');

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
