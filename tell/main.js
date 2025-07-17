window.alert('hello for my web site');
let img = document.querySelector('.img');
const container = document.querySelector('.container');
function phones(phone){
    img.src = phone; 
}
function colors(color){
    container.style.background = color;
}
function vote(buttonClicked) {
    const voteButtons = document.querySelectorAll('.like, .dislike'); 
    voteButtons.forEach(button => {
        button.style.display = 'none'; 
        alert('Thank you for your voted');
    });
    voteButtons.forEach(button => {
        button.style.display = 'none';
    });
}
var btn = document.getElementById('btn');
window.onscroll = function (){
    if(scrollY >= 270){
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}
btn.onclick =  function(){
    scroll({
        left: 0,
        top: 0,
        scrollbehavoir: "smooth"  
    });
};