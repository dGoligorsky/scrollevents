const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")

// when we scroll the page, update the pixels tag to be how far we've scrolled
document.addEventListener("scroll", function() {
    const pixels = window.pageYOffset
    pixelsTag.innerHTML = pixels
})

// when we scroll the page, make a progress bar that tracks the distance
document.addEventListener("scroll", function() {
    const pixels = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight
    
    const percentage = pixels / totalScrollableDistance

    progressTag.style.width = `${100 * percentage}%`
})
