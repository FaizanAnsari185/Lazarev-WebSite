function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
locomotive();

function loadingAnimation(){
    let tl = gsap.timeline()
tl.from("#page1",{
    opacity:0,
    duration:0.3,
    delay:0.2
})
tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    duration:2,
    ease:"expo.inOut"
})
tl.from("nav",{
    opacity:0,
    delay:-0.2
})
tl.from("#page1 h1, #page1 p, #page1 div",{
    opacity:0,
    duration:0.5,
    stagger:0.2
})

}
// loadingAnimation();

function navAnimation(){
    let nav = document.querySelector("nav");

nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    tl.to("#nav-bottom",{
        height: "22vh"
    })
    tl.to(".nav-elem h5",{
        opacity:1,
        y:15,
        stagger:{
            amount:0.6
        }
    })
    tl.to(".nav-elem h5 span",{
        y:15,
        stagger:{
            amount:0.6
        }
    })
})

nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-elem h5",{
        opacity:0,
        y:0,
        stagger:{
            amount:0.6
        }
    })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.2
    })
})
}
navAnimation();

function page2Anim(){
    let rightElem = document.querySelectorAll(".right-elem");

rightElem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        gsap.to(e.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    e.addEventListener("mouseleave",function(){
        gsap.to(e.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    e.addEventListener("mousemove",function(dets){
        gsap.to(e.childNodes[3],{
            x:dets.x - e.getBoundingClientRect().x-40,
            y:dets.y - e.getBoundingClientRect().y-120
        })
    })
})
}
page2Anim();

function page3VideoAnimation(){
    let page3Center = document.querySelector(".page3-center");
let video = document.querySelector("#page3 video");

page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,
        scrub: 4
    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px",
        scrub: 4
    })
})
}
page3VideoAnimation();

function page5Animation (){
    let sections = document.querySelectorAll(".sec-right");

sections.forEach(function(secRight) {
    let video = secRight.querySelector("video");
    let cursor = secRight.querySelector("#cursor");

    secRight.addEventListener("mouseenter", function () {
        video.style.opacity = "1";
        video.play();
    });

    secRight.addEventListener("mouseleave", function () {
        video.style.opacity = "0";
        video.pause();
        video.load();
    });

    secRight.addEventListener("mousemove", function(e) {
        let rect = secRight.getBoundingClientRect();
        let offsetX = e.clientX - rect.left - cursor.offsetWidth / 2;
        let offsetY = e.clientY - rect.top - cursor.offsetHeight / 2;
        cursor.style.opacity = 1;
        cursor.style.left = `${offsetX}px`;
        cursor.style.top = `${offsetY}px`;
    });

    secRight.addEventListener("mouseleave", function() {
        cursor.style.opacity = 0;
    });
});
}
page5Animation();

function page6ArrowIcon(){
    let sumry = document.querySelector("summary");
let arrow = document.querySelector("summary i");

sumry.addEventListener("click",function(){
    if (arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "rotate(0deg)";
    } else {
        arrow.style.transform = "rotate(180deg)";
    }
})
}
page6ArrowIcon();

function page7Animation(){
    gsap.from("#btm7-part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm7-part2",
            scroller:"#main",
            scrub:true,
            start:"top 80%",
            end:"top 10%"
        }
    })
    gsap.from("#btm7-part3 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm7-part3",
            scroller:"#main",
            scrub:true,
            start:"top 80%",
            end:"top 10%"
        }
    })
    gsap.from("#btm7-part4 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm7-part4",
            scroller:"#main",
            scrub:true,
            start:"top 80%",
            end:"top 10%"
        }
    })
}
page7Animation();

