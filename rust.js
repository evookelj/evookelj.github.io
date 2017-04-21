function scroll1(id) {
    var rect = document.getElementById(id).getBoundingClientRect();
    window.scrollBy(0,rect.top);
}

function homeScroll(){
    var rect = document.getElementsByTagName('html')[0].getBoundingClientRect();
    
    window.scrollBy(0,rect.top); 
}

function openInNewTab(fxn) {
	var url = "https://play.rust-lang.org/?code=".concat(encodeURI(fxn));
  	var win = window.open(url, '_blank');
  	win.focus();
}