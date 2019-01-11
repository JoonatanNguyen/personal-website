    // document.getElementById('projects-section').addEventListener('load', onLoadFunction);
    document.getElementById('projects-section').addEventListener('scroll', onScrollFunction);
    document.getElementById('first-project').addEventListener('mouseover', mouseOverFunction);

    function onScrollFunction() {
        console.log("This project section is scrolled");
    }

    function mouseOverFunction() {
        document.getElementById('first-project').style.boxShadow = '0 0 5px black';
    }

