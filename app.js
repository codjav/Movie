let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let sliderDom = document.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let timeDom = document.querySelector('.carousel .time');
let thumbnailItemDom = thumbnailBorderDom.querySelectorAll('.item');

thumbnailBorderDom.appendChild(thumbnailItemDom[0]);

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}

function showSlider(type){
    let sliderItemDom = sliderDom.querySelectorAll('.item');
    let thumbnailItemDom = thumbnailBorderDom.querySelectorAll('.item');

    if (type === 'next') {
        sliderDom.appendChild(sliderItemDom[0]);            
        thumbnailBorderDom.appendChild(thumbnailItemDom[0]); 
        carouselDom.classList.add('next');

        setTimeout(() => {
            carouselDom.classList.remove('next');
        }, 1400);
    }else{
        sliderDom.prepend(sliderItemDom[sliderItemDom.length-1]);
        thumbnailBorderDom.prepend(thumbnailItemDom[thumbnailItemDom.length-1])
        carouselDom.classList.add('prev');
        setTimeout(() => {
            carouselDom.classList.remove('prev');
        }, 1400);
    }
}
