var currentImageIndex = 0;
const imageList = [
    'image1',
    'image2',
    'image3',
    'image4'
];
const btnForward = document.getElementById('btn-forward');
const btnBackward = document.getElementById('btn-backward');
const btnClose = document.getElementById('btn-close');
const openSlideShow = document.getElementById('image');

openSlideShow.addEventListener('click',function() {
    showSlideShow();
});

btnForward.addEventListener('click',function() {
    moveForward();
});

btnBackward.addEventListener('click',function(){
    moveBackward();
});

btnClose.addEventListener('click',function() {
    closeSlide();
});


function showImage(index)  {
    const imageId = imageList[index];
    const element = document.getElementById(imageId);

    element.style.display = 'block';
}

function hideImage(index) {
    const imageId = imageList[index];
    const element = document.getElementById(imageId);

    element.style.display = 'none';
}

function hideAllImage() {
    for (var i = 0; i < imageList.length; i++) {
        hideImage(i);
    }
}

function incrementCurrentImageIndex() {
    if (currentImageIndex === imageList.length - 1) {
        currentImageIndex = 0;
    }else {
        currentImageIndex++;
    }
}

function decrementCurrentImageIndex() {
    if (currentImageIndex === 0) {
        currentImageIndex = imageList.length - 1;
    }else {
        currentImageIndex--;
    }
}

function showSlide() {
    console.log('hello');
    const element = document.getElementById('slideShow');

    element.style.display = 'block';
}

function closeSlideShow() {
    const element = document.getElementById('slideShow');

    element.style.display = 'none';
}

function moveForward() {
    hideAllImage();
    incrementCurrentImageIndex();
    showImage(currentImageIndex);

}

function moveBackward() {
    hideAllImage();
    decrementCurrentImageIndex();
    showImage(currentImageIndex);
}

function showSlideShow() {
    showSlide();
}

function closeSlide() {
    closeSlideShow();
}
// Run automatically slide change

setInterval(function() {
    moveForward();
}, 4000);

