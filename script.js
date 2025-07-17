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
/*
let x =prompt('entre one number');
if(x <=12 ){
   console.log("you is young")   
}
    else{
        console.log('you is grand '+x )
    }
let name = prompt("what is your name");

if(name){
    console.log("Hello " + name )
}
else{
    window.alert("plaise entre your name")
}



let y = prompt('entre your number one')
let r = prompt('entre your number two')
if(y + r){
    console.log(y + r)
}
else{
    window.alert('nonon')
}



let h = prompt('Hello bro what is your name')
let k = prompt('Ok and how old are you')

if(h){
    console.log('ok you is ' +h +' and your years is ' +k +' years ok no probleme you is nice main or women hhhhhhhh')
}
else{
    prompt('Hello bro i what is your name')
}
*/







// 1. Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close nav menu when a link is clicked (for mobile)
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 2. Typewriter Effect for Name and Title
const nameElement = document.getElementById('name-animation').querySelector('span');
const titleElement = document.getElementById('title-animation').querySelector('span');

const nameTexts = ["Joseph", "Talbi"];
const titleTexts = ["Frontend Developer", "Web Designer", "Problem Solver", "Creative Coder"];

let nameTextIndex = 0;
let titleTextIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter(element, textArray, speed = 150) {
    const currentText = textArray[textTextIndex];
    if (isDeleting) {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end of word
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textTextIndex = (textTextIndex + 1) % textArray.length;
    }

    setTimeout(() => typeWriter(element, textArray, speed), isDeleting ? speed / 2 : speed);
}

// Separate functions for name and title to control independently
function typeName() {
    const currentText = nameTexts[nameTextIndex];
    if (isDeleting) {
        nameElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        nameElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; }, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        nameTextIndex = (nameTextIndex + 1) % nameTexts.length;
    }

    setTimeout(typeName, isDeleting ? 75 : 150); // Faster deleting
}

let titleCharIndex = 0;
let titleIsDeleting = false;

function typeTitle() {
    const currentTitle = titleTexts[titleTextIndex];
    if (titleIsDeleting) {
        titleElement.textContent = currentTitle.substring(0, titleCharIndex - 1);
        titleCharIndex--;
    } else {
        titleElement.textContent = currentTitle.substring(0, titleCharIndex + 1);
        titleCharIndex++;
    }

    if (!titleIsDeleting && titleCharIndex === currentTitle.length) {
        setTimeout(() => { titleIsDeleting = true; }, 1500);
    } else if (titleIsDeleting && titleCharIndex === 0) {
        titleIsDeleting = false;
        titleTextIndex = (titleTextIndex + 1) % titleTexts.length;
    }

    setTimeout(typeTitle, titleIsDeleting ? 50 : 100); // Slower for title for effect
}


document.addEventListener('DOMContentLoaded', () => {
    typeName();
    typeTitle();
});


// 3. Scroll-Up Button Functionality
const scrollTopButton = document.getElementById('btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    });
});

// 4. Scroll-Triggered Animations (using Intersection Observer)
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of the element is in view
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

animateOnScrollElements.forEach(el => {
    observer.observe(el);
});

// Optional: Add a subtle animation to skills icons on hover
document.querySelectorAll('#skills .item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const img = item.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.1) rotate(5deg)';
            img.style.transition = 'transform 0.2s ease-out';
        }
    });
    item.addEventListener('mouseout', () => {
        const img = item.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});