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

