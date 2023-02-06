

document.querySelectorAll(".info-card").forEach(el=> {
     let bar = el.getElementsByClassName('info-card-full')
     let content = el.getElementsByClassName('info-card-full-content')
     let btn = el.getElementsByClassName('info-card__btn')
     let main = el.getElementsByClassName('info-card__wrapper')
     let addBtn = el.querySelector('.add-btn svg')
     console.log(addBtn)
     const tween = gsap.timeline({repeat: 0, repeatDelay: 1, reversed: true})
     const tweenClick = gsap.timeline({repeat: 0, repeatDelay: 1, reversed: true})

     let hover = 
     // tween.to(main,{
     //      display: 'block',
     //      opacity: '1',
     //      duration: .2,
     // },'-=.9' )
     tween.to(bar, {
          height: "411px",
          ease: 'power4.out',
          duration: 1
          },'-=1')
     
     tween.to(content,{
          display: 'block',
          opacity: 1,
          duration: .3,
     },'-=.7' )
     
     

     tween.to(btn,{
          color: '#259609',
          background: '#FFFFFF',
          duration: .5,
     }, '-=.8')

     let active = 
     tweenClick.to(addBtn, {
          rotation: 180,
          duration: .2,
          opacity: 1,
     })

     
     $(el).hover(makeHover, makeHover)
     $(addBtn).click(makeActive)


     function makeActive() {
          active.reversed() ? active.play(): active.reverse()
     }
     
     function makeHover() {
               if(window.innerWidth > 620){
                    hover.reversed() ? hover.play(): hover.reverse()
               }
          
     }
     
})



document.querySelectorAll(".add-btn:not(.info-card-full)").forEach(el=>{
     el.addEventListener('click', ()=>{
          el.classList.toggle("add-btn-active")
     })
})


document.querySelectorAll(".more-icon").forEach(el=>{
     let degree = 0
     el.addEventListener('click', ()=>{
          degree += 360
          el.style.webkitTransform = `rotate(-${degree}deg)`
     })
})


let menuLink = document.getElementById("menuLink")
let menuLinkToggle = document.getElementById("menuLinkToggle")
if (window.innerWidth <= 620) {
     menuLink.classList.add("collapse")
     menuLinkToggle.innerHTML = new DOMParser().parseFromString("Choose YOUR Career &lt;i class=&quot;bi bi-chevron-right&quot;&gt;&lt;/i&gt;", "text/html").documentElement.textContent
     menuLinkToggle.href = "#menuLink"
} else {
     menuLink.classList.remove("collapse")
     menuLinkToggle.innerHTML = "Careers"
     menuLinkToggle.href = ""
}
window.addEventListener("resize", function() {
     if (window.innerWidth <= 620) {
     menuLink.classList.add("collapse")
     menuLinkToggle.innerHTML = new DOMParser().parseFromString("Choose YOUR Career &lt;i class=&quot;bi bi-chevron-right&quot;&gt;&lt;/i&gt;", "text/html").documentElement.textContent
     menuLinkToggle.href = "#menuLink"

     } else {
     menuLink.classList.remove("collapse")
     menuLinkToggle.innerHTML = "Careers"
     menuLinkToggle.href = ""

     }
});