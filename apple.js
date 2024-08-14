let notification = document.querySelector(".alert");
setTimeout(() => {
    notification.style.height = "55px";
    notification.style.background = "white";
}, 1000)



function toggle() {
    
    let menu = document.querySelector(".hide");
    if(menu.style.display === "flex"){ 
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }
}



function toggleList(listId) {
    const list = document.getElementById(listId);
    const isMobile = window.matchMedia("(max-width: 823px)").matches;
    if (isMobile) {
        if (list.style.maxHeight === '0px' || list.style.maxHeight === '') {
            list.style.maxHeight = '150px';
        } else {
            list.style.maxHeight = '0px';
        }
    }
}


//----------------------------------------------------------------------

const scroller = document.querySelector('.scroller');

let isDown = false;
let startX;
let scrollLeft;

scroller.addEventListener('mousedown', (e) => {
  isDown = true;
  scroller.classList.add('active');
  startX = e.pageX - scroller.offsetLeft;
  scrollLeft = scroller.scrollLeft;
});

scroller.addEventListener('mouseleave', () => {
  isDown = false;
  scroller.classList.remove('active');
});

scroller.addEventListener('mouseup', () => {
  isDown = false;
  scroller.classList.remove('active');
});

scroller.addEventListener('mousemove', (e) => {
  if (!isDown) return;  // Stop the function from running
  e.preventDefault();
  const x = e.pageX - scroller.offsetLeft;
  const walk = (x - startX) * 3; // The number 3 is the scrolling speed
  scroller.scrollLeft = scrollLeft - walk;
});

//-----------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const scrollers = document.querySelectorAll('.big');

    scrollers.forEach(scrollerContainer => {
        const leftButton = scrollerContainer.querySelector('.abso.left');
        const rightButton = scrollerContainer.querySelector('.abso.right');
        const scroller = scrollerContainer.querySelector('.big-scroller');

        leftButton.addEventListener('click', () => {
            scroller.scrollBy({ left: -300, behavior: 'smooth' });
        });

        rightButton.addEventListener('click', () => {
            scroller.scrollBy({ left: 300, behavior: 'smooth' });
        });
    });
});
