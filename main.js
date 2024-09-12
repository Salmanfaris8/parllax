window.addEventListener(("scroll"),()=>{
    document.querySelector("#Home img").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector("#Mountain1").style.marginBottom = `${106 - window.scrollY}px`
    document.querySelector("#leftCloud").style.marginLeft = `${window.scrollY}px`
})