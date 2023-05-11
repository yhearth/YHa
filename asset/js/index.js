const nameLi= document.querySelectorAll('.sc_main .txt_wrap .name span')

function mainLoad(){
  for(let n = 0; n < nameLi.length; n++){
      setTimeout(()=>{
          nameLi[n].style.bottom = 0;
          nameLi[n].style.transition =".5s ease"
      },n*50) 
  }
}
function xScroll(){
  ScrollTrigger.matchMedia({//사이즈별로 
    // desktop
    "(min-width: 767px)": function() {
      gsap.to('.horison_wrap',{
        scrollTrigger:{
          trigger:".sc_horison",
          start:"top top",
          end:"bottom top",
          scrub :1,
          // markers:true,
          pin:true,//pin 모션 고정 
          end:"+=300% ", //sc_work스크롤의 5배 - 너무 빠른 경우
        },
          xPercent : -400 + 100 ,//list 총 길리 계산 334 - 화면 값 transform: translateX(45%)
        })
      }
  
  });
}

//cursor
// window.addEventListener('mousemove',(e)=>{
//   e.preventDefault();
//   let mouseX = e.clientX - 100 + 'px';
//   let mouseY = e.clientY - 100 + 'px';
//   // cursor.style.left = mouseX;
//   // cursor.style.top = mouseY;
// })

//scroll
// function handleScrollEvent(){
//   secGet = horisonCt.getBoundingClientRect();
//   horGet = horizonWrap.getBoundingClientRect();
//   v = window.scrollY;
//   translateX = (secGet.height - secGet.width) * ((v / (secGet.height - horGet.height)) * -1);
//   horizonWrap.style.left = `${translateX}px`;
// }

const workLink = document.querySelectorAll('.sc_horison .work_link')
//const workLink = document.querySelectorAll('.sc_horison .work_link .img_box')
// work mouseover
// workMouseAni()
function workMouseAni(){
  for( let l = 0; l <workLink.length; l++){
       imgVer2 = workLink[l].querySelector('.img_ver2')

      workLink[l].addEventListener('mouseenter',()=>{  
        console.log(imgVer2) 
       
          setTimeout(()=>{
              imgVer2.style.zIndex = 1;
              imgVer2.style.visibility ='visible'
              setTimeout(()=>{
                imgVer2.style.opacity='1'
                imgVer2.style.transition='.5s ease'
              },100)
          })   
      })
      // imgWrap.addEventListener('mouseleave',()=>{
      //     isScroll = false;
      //     ursorAni()
      //     setTimeout(()=>{
      //         imgColor.style.transform =` scale(1)`;
      //         imgGray.style.transform =` scale(1)`;
      //         imgColor.style.opacity = 0
      //         imgColor.style.transition = '.5s ease'
      //     },200) 
      // })
  }
}
//work click
function workClickAni(){  
  for( let c = 0; c < workLink.length; c++){
      workLink[c].addEventListener('click',(e)=>{
          e.preventDefault();
          if(workLink[c].classList.contains('fritz')){
              window.location.href = './work/fritzHansen.html';
          }else if(workLink[c].classList.contains('tamburins')){
              window.location.href = './work/tamburins.html';
          }else if(workLink[c].classList.contains('spotify')){
              window.location.href = './work/spotify.html';
          }else if(workLink[c].classList.contains('HMG')){
              window.location.href = './work/hmg.html';
          }else if(workLink[c].classList.contains('repick')){
              window.location.href = './work/repick.html';
          }
      })
  } 
}


window.addEventListener('load',()=>{
  mainLoad()
  xScroll()
  workClickAni();
})







