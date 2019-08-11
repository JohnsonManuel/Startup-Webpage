
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
var header = document.getElementsByTagName('header');

  if (currentScrollPos > prevScrollpos) {

    header[0].style.transform= "translateY(-100%)";
  } else {
    header[0].style.transform = "translateY(0)";
  }
  prevScrollpos = currentScrollPos;
}

document.querySelector('.language-selector').addEventListener('click',changeLanguage);


function changeLanguage(){
  document.querySelector('.language-list').classList.toggle('hide');
}

document.querySelector('.language-list').addEventListener('click',function(e){
  if(e.taget=="li"){
    document.querySelector('language-selector').firstElementChild.TextContent=target.TextContent;
  }
});
