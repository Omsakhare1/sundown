const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elemc = document.querySelector(".elem-cont")
let fiximg = document.querySelector(".fixed-imgs")
elemc.addEventListener("mouseenter",function(){
    fiximg.style.display = "block"
})
elemc.addEventListener("mouseleave",function(){
    fiximg.style.display = "none"
})

let elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
     e.addEventListener("mouseenter",function(){
        let image = e.getAttribute("data-image")
        fiximg.style.backgroundImage = `url(${image})`
     })
})

