let text = Array.from(document.querySelectorAll(".down"))
let lists = Array.from(document.querySelectorAll(".left"))

window.addEventListener("scroll", appearOnScroll)

function appearOnScroll () {
    text.forEach((div)=>{
        if (window.innerHeight/1.2 >= div.getBoundingClientRect().top) {
            div.classList.add("fade-up")
        }else{
            // div.classList.remove("fade-up")
        }
    })
    lists.forEach((ul)=>{
        if (window.innerHeight/1.2 >= ul.getBoundingClientRect().top) {
            ul.classList.add("fade-right")
        }else{
            // ul.classList.remove("fade-right")
        }
    })
}


// let sliderImages = Array.from(document.getElementsByClassName("slide-image"));
// let sliderCount = sliderImages.length;
// let currentSlide = 1;
// let paginationElement = document.createElement("ul")
// paginationElement.setAttribute("id","pagination-ul")

// for (let i = 1; i <= sliderCount ; i++) {
//     let paginationItem = document.createElement("li");
//     paginationItem.setAttribute("data-index", i)
//     paginationElement.appendChild(paginationItem);
// }
// let sliderIndicators = document.querySelector(".slider-controls .indicators");

// sliderIndicators.appendChild(paginationElement)

// let createdPaginationUL = document.getElementById("pagination-ul")
// let listItems = document.querySelectorAll("#pagination-ul li");

// listItems.forEach((item) => {
//     item.addEventListener("click", function (e) {
//         currentSlide = e.currentTarget.dataset.index;
//         check()
//     })
// });
// function autoPlay() {
//     if (currentSlide === sliderCount) {
//         currentSlide = 1
//         check()
//     }else {
//         currentSlide++;
//         check()
//     }
// }

// setInterval(() => {
//     autoPlay()
// }, 3000);

// function check() {
//     removeActiv()
//     sliderImages[currentSlide - 1].classList.add("activ");
//     createdPaginationUL.children[currentSlide - 1].classList.add("activ")
// }
// function removeActiv() {
//     sliderImages.forEach((image)=>{
//         image.classList.remove("activ");
//     })
//     listItems.forEach((item)=>{
//         item.classList.remove("activ");
//     })
// }
// check()

let bars = document.querySelector(".fa-bars")
let xmark = document.querySelector(".fa-xmark")
let menu = document.querySelector(".nav-bar .menu")

bars.addEventListener("click", ()=>{
    menu.classList.add("appear")
    bars.classList.add("remove")
    xmark.classList.add("appear")
})
xmark.addEventListener("click", ()=>{
    menu.classList.remove("appear")
    bars.classList.remove("remove")
    xmark.classList.remove("appear")
})