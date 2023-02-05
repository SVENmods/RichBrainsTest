

document.querySelectorAll(".info-card").forEach(el=> {
     let bar = el.getElementsByClassName('info-card-full')
     let content = el.getElementsByClassName('info-card-full-content')
     let btn = el.getElementsByClassName('info-card__btn')
     let main = el.getElementsByClassName('info-card__wrapper')
     const tween = gsap.timeline({repeat: 0, repeatDelay: 1})
     let hover = 
     // tween.to(main,{
     //      display: 'block',
     //      opacity: '1',
     //      duration: .2,
     // },'-=.9' )

     tween.to(content,{
          display: 'none',
          opacity: 0,
          duration: .8,
     }, )
     
     tween.to(bar, {
          // bar.parentElement.offsetHeight + "px"
     height: "6px",
     ease: 'power4.in',
     duration: .8
     },'-=1')

     tween.to(btn,{
          color: '#FFFFFF',
          background: '#259609',
          duration: .5,
     }, '-=1.1')

     
     $(el).hover(makeHover, makeHover)
     
     function makeHover() {
               if(window.innerWidth >= 620){
                    hover.reversed() ? hover.play(): hover.reverse();
               }
          
     }

     
})



document.querySelectorAll(".add-btn").forEach(el=>{
     el.addEventListener('click', ()=>{
          el.classList.toggle("add-btn-active")
     })
})