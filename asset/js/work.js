'use strict';//
const header = document.querySelector('header');
const logo = document.querySelector('header .logo');
const resume = document.querySelector('header .resume');
const menuLink = document.querySelectorAll('header .menu_link');
const menuLinkSpan = document.querySelectorAll('header .menu_link span');

let index = '../index.html';
let about = '../about.html';
let contact = '../contact.html';


logo.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('메인 페이지 이동');
    window.location.href = index;
})
for(let i = 0; i < menuLink.length; i++){
    menuLink[i].addEventListener('click',(e)=>{
        e.preventDefault();
        if(menuLink[i].classList.contains('workLink')){
            console.log('작업 페이지 이동')
            window.location.href = index;
        }else if(menuLink[i].classList.contains('aboutLink')){
            console.log('소개 페이지 이동')
            window.location.href = about;
        }else if(menuLink[i].classList.contains('contactLink')){
            console.log('연락 페이지 이동')
            window.location.href = contact;
        }
        
    })
}
//m header 
const mheadBtn = document.querySelector('.m_btn');
const mheadMenu = document.querySelector('.menu_group');
let isBtnM = false
mheadBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('모바일 메뉴 버튼');
    let btnAni = mheadBtn.querySelectorAll('i')
    if(!isBtnM){
        for(const bar of btnAni){
            bar.classList.add('open');
        }
        setTimeout(()=>{
            mheadMenu.style.display = 'flex';
            setTimeout(()=>{
                mheadMenu.style.opacity = '1';
                mheadMenu.style.transition = '.5s ease';
            },300)

        })
        isBtnM = true;
    }else if(isBtnM){
        for(const bar of btnAni){
            bar.classList.remove('open');
        }
        setTimeout(()=>{
            mheadMenu.style.opacity = '0';
            mheadMenu.style.transition = '.5s ease';
            setTimeout(()=>{
                mheadMenu.style.display = 'none';
            },500)
        })
        isBtnM = false;
    }

})

// scroll
window.addEventListener('scroll',(e)=>{
    e.preventDefault();
        let scrollNow = document.documentElement.scrollTop;
        let winHeight = window.innerHeight;
        
        //header
        let hdTriger = header.offsetTop;
        let hdTop = hdTriger - winHeight;
        let hdPer = 0;
        hdPer = (scrollNow - hdTop) / winHeight * 10;

        //info
        let wkContent = workContent.offsetTop;
        let wkTop = wkContent - winHeight;
        let wkPer = 0;
        wkPer = (scrollNow - wkTop) / winHeight * 10;
        console.log(wkPer);

        if( 10 < hdPer){
            header.classList.add('on');
        }else if(10 == hdPer){
            header.classList.remove('on');
        }
        if(10 <= wkPer){
            workInfo.classList.add('fix')
        }else{
            workInfo.classList.remove('fix')
        }

        
}) 
const workPage = document.querySelector('.work_page');
const workContent = workPage.querySelector('.work_content');
const workInfo = workContent.querySelector('.info_group');
 
const pageOut = document.querySelector('.page_out')

const wkIntroTit = document.querySelectorAll('.work_page .work_intro .tit_wrap span')
const codeBtn = document.querySelectorAll('.work_page .code')
const codeBox = document.querySelector('.work_page .code_wrap')
const codeImg = codeBox.querySelector('.code_box')
const codeTxt = codeImg.querySelector('code')
const codeXBtn = codeImg.querySelector('.x_btn')

//page out
pageOut.addEventListener('click',()=>{
    window.location.href = '../index.html';
})

//workCode click
workCode();
let workIndex;
function workCode(){

    for(let c = 0; c < codeBtn.length; c++){
        codeBtn[c].addEventListener('click',()=>{
            let codeArea = codeBtn[c].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            if(codeArea.classList.contains('fritz_area')){
                workIndex = 4
            }else if(codeArea.classList.contains('hmg_area')){
                workIndex = 3
            }else if(codeArea.classList.contains('spotify_area')){
                workIndex = 2
            }else if(codeArea.classList.contains('tamburins_area')){
                workIndex = 1
            }else if(codeArea.classList.contains('fritz_area')){
                workIndex = 0
            }

           codeTxt.innerHTML = codeSrc[workIndex][c];
           hljs.initHighlightingOnLoad();
           //console.log('workNum :',workIndex,c);

            codeBox.style.display = 'block';
            setTimeout(()=>{
                codeBox.style.opacity = '1';
                codeBox.style.transition = '.5s ease';
                setTimeout(()=>{
                    codeImg.style.top = '50%';
                    codeImg.style.transition = '.5s ease'
                },200)
            })
        })
    }
}
codeXBtn.addEventListener('click',()=>{
    codeImg.style.top = '150%';
    codeImg.style.transition = '.5s ease'
    setTimeout(()=>{
        codeBox.style.opacity = '0';
        codeBox.style.transition = '.5s ease';
        setTimeout(()=>{ codeBox.style.display = 'none';},300)
    },200)
})
workIntro();
function workIntro(){
    for(let i =0 ; i < wkIntroTit.length; i++){
        setTimeout(()=>{
            wkIntroTit[i].style.transform = 'translateY(0%)'
            wkIntroTit[i].style.transition = 'all .5s ease'
        },i*50)
    }
}





// //모바일 비디오 변경
// let mWorkIndex;
// let onWindowSizs = false;
// //if(window.matchMedia("(max-width: 767px)").matches){mMvPgChk()}
// function mMvPgChk(){
//     for( let w = 0; w < workPgWrap.length; w++){
//         mWorkIndex = w;
//         if(workPgWrap[w].classList.contains('fritz_area')){
//             mMvChange(fritzArea);
//         }else if(workPgWrap[w].classList.contains('tamburins_area')){
//                 mMvChange(tanburinsArea);     
//         }else if(workPgWrap[w].classList.contains('spotfy_area')){
//                 mMvChange(spotfyArea);
//         }else if(workPgWrap[w].classList.contains('hmg_area')){
//                 mMvChange(hmgArea);
//         }else if(workPgWrap[w].classList.contains('repick_area')){
//                 mMvChange(repickArea);
//         }
       
// }
// }
// function mMvChange(mAllImgBox){
//     let mGallImgBox = mAllImgBox.querySelectorAll('.img_wrap');
//     let mGallMv = mAllImgBox.querySelectorAll('.mv');
//     for(let m = 0 ;m < mGallMv.length; m++){
//         mGallMv[m].remove();
//         mGallImgBox[m].innerHTML = ` <img src="${mImgSrc[mWorkIndex][m]}" alt="" width="100%">`
//     }
// }
// function handleResize() {
   
//     if (window.innerWidth < 768) {
//         mMvPgChk()
//     }else{
//     }
   
// }
// handleResize() 










