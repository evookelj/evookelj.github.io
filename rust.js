function scroll1(id) {
    var rect = document.getElementById(id).getBoundingClientRect();
    window.scrollBy(0,rect.top);
}

function homeScroll(){
    var rect = document.getElementsByTagName('html')[0].getBoundingClientRect();
    
    window.scrollBy(0,rect.top); 
}
