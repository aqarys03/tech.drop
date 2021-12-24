const animItems = document.querySelectorAll('._anim-items');
if(animItems.length>0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(){
    for(let index = 0; index<animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight/animStart;
      if(animItemHeight>window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight/animStart;
      }
      if((pageYOffset >animItemOffset-animItemPoint) && pageYOffset<(animItemOffset+animItemHeight)){
        animItem.classList.add('_active');
      }else{
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top:rect.top + scrollTop, left:rect.left + scrollLeft}
  }
  animOnScroll();
}

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');

