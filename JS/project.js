// document.getElementById('projects-section').addEventListener('load', onLoadFunction);
document.getElementById('projects-section').addEventListener('scroll', onScrollFunction);
document.getElementById('first-project').addEventListener('mouseover', mouseOverFunction);
const firstProject = document.getElementById('first-project');
const secondProject = document.getElementById('second-project');
const thirdProject = document.getElementById('third-project');
const fourthProject = document.getElementById('fourth-project');

const buttonCloseProjectOne = document.getElementById('btn-close-project-one');
const buttonCloseProjectTwo = document.getElementById('btn-close-project-two');
const buttonCloseProjectThree = document.getElementById('btn-close-project-three');
const buttonCloseProjectFour = document.getElementById('btn-close-project-four');

firstProject.addEventListener('click', function () {
    showProjectOne();
});

secondProject.addEventListener('click', function() {
    showProjectTwo();
});

thirdProject.addEventListener('click', function() {
    showProjectThree();
});

fourthProject.addEventListener('click', function() {
    showProjectFour();
});

function showProjectOne() {
    const element = document.getElementById('projectOne');
    element.style.display = 'block';
}

function showProjectTwo() {
    const element = document.getElementById('projectTwo');
    element.style.display = 'block';
}

function showProjectThree() {
    const element = document.getElementById('projectThree');
    element.style.display = 'block';
}

function showProjectFour() {
    const element = document.getElementById('projectFour');
    element.style.display = 'block';
}

buttonCloseProjectOne.addEventListener('click', function () {
    const element = document.getElementById('projectOne');
    element.style.display = 'none';
});

buttonCloseProjectTwo.addEventListener('click', function() {
    const element = document.getElementById('projectTwo');
    element.style.display = 'none';
});

buttonCloseProjectThree.addEventListener('click', function () {
    const element = document.getElementById('projectThree');
    element.style.display = 'none';
});

buttonCloseProjectFour.addEventListener('click', function () {
    const element = document.getElementById('projectFour');
    element.style.display = 'none';
});

function onScrollFunction() {
    console.log("This project section is scrolled");
}

function mouseOverFunction() {
    document.getElementById('first-project').style.boxShadow = '0 0 5px black';
}

