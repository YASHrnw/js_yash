
let yash = [
    {
        id: 1, 
        img: "https://picsum.photos/991/601/?random",
        title: "Here is an Awesome Headline Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        icon:"fab fa-android"

    },

    {
        id: 2, 
        img:"https://picsum.photos/991/602/?random",
        title: "Here is an Awesome Headline",
        icon:"fab fa-apple"

    },

    {
        id: 3, 
        img: "https://picsum.photos/991/603/?random",
        title: "Here is Another Awesome Headline",
        icon:"fab fa-windows"

    },

]
let yt = '';

yash.map((i)=>{
    yt += `<div class="item owl-lazy" data-src=${i.img}>
    <div class="sliderContent bgLight">
        <div class="sliderContentInner">
        <i class="${i.icon}"></i>
            <h3>${i.title}</h3>
            
            <p><a href="#" class="btn btn-default">LEARN MORE</a></p>
        </div>
    </div>
</div>`
})

document.getElementById("myCarousel").innerHTML = yt






//==================================================================================================
jQuery(document).ready(function () {

    //Initiate the slider
    initSlider();
    function initSlider() {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            animateOut: 'fadeOut',
            autoHeight: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            dots: true,
            lazyLoad: true,
            onDrag: stopSlider
            // onInitialized: startProgressBar,
            // onTranslate: resetProgressBar,
            // onTranslated: startProgressBar
        });
    }

    // When the slider is dragged it will be stopped
    function stopSlider(event) {
        var heroPeepsSlider = $('#myCarousel');
        heroPeepsSlider.trigger('stop.owl.autoplay');
    }

    // Progress Bars
    function startProgressBar() {
        $(".slide-progress").css({
            width: "100%",
            transition: "width 6000ms"
        });
    }
    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }
});

// Add Keyboard Functionality
jQuery(document).keyup(function (event) {
    var heroPeepsSlider = jQuery("#myCarousel");
    // handle cursor keys
    heroPeepsSlider.trigger('stop.owl.autoplay');
    if (event.keyCode == 37) {
        // go left
        heroPeepsSlider.trigger('prev.owl.carousel');
    } else if (event.keyCode == 39) {
        // go right
        heroPeepsSlider.trigger('next.owl.carousel');
    }
});