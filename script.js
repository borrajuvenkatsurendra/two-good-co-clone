function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      mobile:{
        smooth:true
      }
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
  locomotiveAnimation();

gsap.to("#nav-part1 svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0",
        end:"top -5%",
        scrub:true
    }
})

// gsap.to("#nav-part1 svg",{
//     transform:"translateY(0.1%)",
//     scrollTrigger:{
//         trigger:"#page5",
//         scroller:"#main",
//         toggleActions:"restart reverse none none",
//         // markers:true,
//         start:"top 0",
//         end:"top -5%",
//         // scrub:true
//     }
// })





gsap.to("#nav-part2 #links",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0",
        end:"top -5%",
        scrub:true
    }
})
gsap.from(".logo svg path",{
    // transform:"translateY(-100%)",
    opacity:0,
    scale:1.2,
    stagger:0.25,
    // duratio:0.2,
    
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        toggleActions:"restart none none none",
        // markers:true,
        start:"top 90%",
        end:"top 5%",
        // scrub:true
    }
})

function loadingAnimation(){
        gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay:0.5,
        duration:1,
        stagger:0.2
    })
    gsap.from("#video-container", {
        y:100,
        opacity:0,
        delay:0.9,
        duration:0.5,
    })
}
loadingAnimation() 

document.addEventListener("mousemove", function(dets){
    gsap.to("#CURSOR",{
        left:dets.x,
        top:dets.y
    })
})

// animation for website elements in page2

function page2Animations(){

    gsap.from(".anim",{
        
        y:100,
        opacity:0,
        scale:1.1,
        // delay:0.5,
        duration:0.5,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            // markers:true,
            // start:"top 0",
            // end:"top -5%",
            // scrub:true
        }
        
    })
}
page2Animations()


function page3Animations(){

    gsap.from(".anim3",{
        
        y:100,
        opacity:0,
        scale:1.1,
        duration:0.5,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            // markers:true,
            // start:"top 0",
            // end:"top -5%",
            // scrub:true
        }
        
    })
}

page3Animations()


function page4Animations(){

    gsap.from(".anim4",{
        
        y:100,
        opacity:0,
        scale:1.1,
        duration:0.5,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            // markers:true,
            // start:"top 0",
            // end:"top -5%",
            // scrub:true
        }
        
    })
}
page4Animations()



function page5Animations(){

    gsap.from(".anim5",{
        
        y:-100,
        opacity:0,
        scale:1.1,
        duration:0.5,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            // start:"top 0",
            // end:"top -5%",
            // scrub:true
        }
        
    })
}
page5Animations()









function cursorAnimation(){
    // document.querySelector(".child").addEventListener("mouseenter",function(){
//     gsap.to("#CURSOR",{
//         transform:`translate(-50%,-50%) scale(1)`
//     })
// })
// document.querySelector(".child").addEventListener("mouseleave",function(){
//     gsap.to("#CURSOR",{
//         transform:`translate(-50%,-50%) scale(0)`
//     })
// })
document.querySelectorAll("#page3 .child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#CURSOR",{
            transform:`translate(-50%,-50%) scale(1)`,
            
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to("#CURSOR",{
            transform:`translate(-50%,-50%) scale(0)`,
            
        })
    })
})

// var a1 = document.querySelector("#child1")
// var a2 = document.querySelector("#child2")
// var a3 = document.querySelector("#child3")
// var a4 = document.querySelector("#child4")

// a.addEventListener("mousemove", function(){
//     gsap.to("#CURSOR", {
//         bgColor:"red"
//     })
// })
}
cursorAnimation()

var text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map(
    (char, i) => 
     
    `<span  style="transform: rotate(${i*15}deg)">${char}</span>`
).join('');