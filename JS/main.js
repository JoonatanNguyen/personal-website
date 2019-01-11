var diamoneShape = document.getElementById('diamond-shape');
const btnHome = document.getElementById('home');
const btnSkills = document.getElementById('skills');
const btnProjects = document.getElementById('projects');
const btnGallery = document.getElementById('gallery');
const btnContact = document.getElementById('contact');
const btnResume = document.getElementById('resume');

btnHome.addEventListener('click',function(){
    homeOnClick();
});

btnSkills.addEventListener('click',function(){
    skillOnClick();
});

btnProjects.addEventListener('click',function(){
    projectOnClick();
});

btnGallery.addEventListener('click',function(){
    galleryOnClick();
});

btnContact.addEventListener('click',function(){
    contactOnClick();
});

btnResume.addEventListener('click',function(){
    resumeOnClick();
});

function rotateShape() {
    var currentRotation = diamoneShape.classList.item(0);

    switch(currentRotation) {
        case null:
        diamoneShape.classList.add('rotate-first');
        break;
        case 'rotate-first':
        diamoneShape.classList.replace('rotate-first', 'rotate-second');
        break;
        case 'rotate-second':
        diamoneShape.classList.replace('rotate-second', 'rotate-third');
        break;
        case 'rotate-third':
        diamoneShape.classList.replace('rotate-third', 'rotate-fourth');
        break;
        default:
        diamoneShape.classList.replace('rotate-fourth', 'rotate-first');
        break;
    }
}

function showHome() {
    const element = document.getElementById('home-section');

    element.style.display = 'block';
}

function hideHome() {
    const element = document.getElementById('home-section');

    element.style.display = 'none';
}

function showSkills() {
    const element = document.getElementById('skills-section');

    element.style.display = 'block';
}

function hideSkills() {
    const element = document.getElementById('skills-section');

    element.style.display = 'none';
}

function showProjects() {
    const element = document.getElementById('projects-section');

    element.style.display = 'block';
}

function hideProjects() {
    const element = document.getElementById('projects-section');

    element.style.display = 'none';
}

function showGallery() {
    const element = document.getElementById('gallery-section');

    element.style.display = 'block';
}

function hideGallery() {
    const element = document.getElementById('gallery-section');

    element.style.display = 'none';
}

function showContact() {
    const element = document.getElementById('contact-section');

    element.style.display = 'block';
}

function hideContact() {
    const element = document.getElementById('contact-section');

    element.style.display = 'none';
}

function showResume() {
    const element = document.getElementById('resume-section');

    element.style.display = 'block';
}

function hideResume() {
    const element = document.getElementById('resume-section');

    element.style.display = 'none';
}

function homeOnClick() {
    rotateShape();
    hideHome();
    hideSkills();
    hideProjects();
    hideGallery();
    hideContact();
    hideResume();
    showHome();
}

function skillOnClick() {
    rotateShape();
    hideHome();
    hideSkills();
    hideProjects();
    hideGallery();
    hideContact();
    hideResume();
    showSkills();
}

function projectOnClick() {
    rotateShape();
    hideHome();
    hideSkills();
    hideProjects();
    hideGallery();
    hideContact();
    hideResume();
    showProjects();
}

function galleryOnClick() {
    rotateShape();
    hideHome();
    hideSkills();
    hideProjects();
    hideGallery();
    hideContact();
    hideResume();
    showGallery();
}

function contactOnClick() {
    rotateShape();
    hideHome();
    hideSkills();
    hideProjects();
    hideGallery();
    hideContact();
    hideResume();
    showContact();
}

function resumeOnClick() {
    rotateShape();
    hideHome();
    hideSkills();
    hideProjects();
    hideGallery();
    hideContact();
    hideResume();
    showResume();
}

function onLoadFunction() {
    startTime();
    alert("Page is loaded");
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
}
