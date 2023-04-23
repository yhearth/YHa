
const scWork = document.querySelector('.sc_work')
const workPg = document.querySelector('.work_page');
const workPgWrap = document.querySelectorAll('.work_page .work_wrap');
const introTxtArea = document.querySelectorAll('.work_wrap .work_intro .txt_wrap');
const introTit= document.querySelectorAll('.work_page .work_intro .tit');
const introSub= document.querySelectorAll('.work_page .work_intro .sub');
const introLi= document.querySelectorAll('.work_page .work_intro li');
const infoArea = document.querySelectorAll('.work_wrap .work_content .info_group');

const workCt = document.querySelector('.sc_work');
const horizonWrap = document.querySelector('.horison_wrap');
const pageMoveWrap = document.querySelector('.page_move');

const cursor = document.querySelector('.wk_cursor')
const cursorBox = document.querySelector('.wk_cursor .scroll')
const cursorTxt = document.querySelector('.wk_cursor .scroll span')

let secGet;
let horGet;
let v;
let translateX;
let scrollIng = false;

const workWebTxt= document.querySelector('.sc_work .work_web .txt_wrap')
const workLink = document.querySelectorAll('.sc_work .work_link')
const workAllImg = document.querySelectorAll('.sc_work .img_wrap img')
const workImgG = document.querySelectorAll('.sc_work .workImgG')
const workImgC = document.querySelectorAll('.sc_work .workImgC')
const workNum = document.querySelectorAll('.sc_work .num_wrap span')
const workTxt = document.querySelectorAll('.sc_work .work_link .txt_wrap')
const pageOut = document.querySelector('.page_out')

const pageMove = document.querySelector('.page_move')

const fritzArea = document.querySelector('.fritz_area')
const tanburinsArea = document.querySelector('.tanburins_area')
const spotfyArea = document.querySelector('.spotfy_area')
const hmgArea = document.querySelector('.hmg_area')
const repickArea = document.querySelector('.repick_area')

const codeBtn = document.querySelectorAll('.work_page .code')
const codeBox = document.querySelector('.work_page .code_wrap')
const codeImg = document.querySelector('.work_page .code_box')
const codeXBtn = document.querySelector('.work_page .x_btn')

let workIndex = 0;
let codeIndex = 0;

const fritzCodeSrc = [
    './asset/img/code/fritz_main_code.jpg',
    './asset/img/code/fritz_product_code.jpg',
    './asset/img/code/fritz_custom_code.jpg',
    './asset/img/code/fritz_wishAdd_code.jpg',
    './asset/img/code/fritz_living_code.jpg',
    './asset/img/code/fritz_designer_code.jpg',
    './asset/img/code/fritz_history_code.jpg',
]
const tamCodeSrc = [
    './asset/img/code/tamburins_gsap_code.jpg',
    './asset/img/code/tamburins_swiper_code.jpg',
]
const spotiCodeSrc = [
    './asset/img/code/spotfy_getJson_code.jpg',
]
const hmgCodeSrc = [
    './asset/img/code/hmg_swiper_code.jpg',
    './asset/img/code/hmg_m_code.jpg',
]
const repickCodeSrc = [
    './asset/img/code/repick_scroll_code.jpg',
    './asset/img/code/repick_click_code.jpg',
    './asset/img/code/repick_slide_code.jpg',
]
const codeSrc = [fritzCodeSrc ,tamCodeSrc ,spotiCodeSrc,hmgCodeSrc ,repickCodeSrc]



window.onload = function(){
    reset();
    workIntroAni();
}
// window.onresize = function(){
//     // document.location.reload();
//     // window.scrollTo(0, 0);
//     // horizonWrap.style.left = 0;
// };

//reset
function reset(){
    window.scrollTo(0, 0);
    horizonWrap.style.left = 0;
    
    onCursor = false
    isScroll = false  

    workIndex = 0;
    codeIndex = 0;

    for(let i = 0; i < workAllImg.length; i++){
        workAllImg[i].style.height ='0';
        workAllImg[i].style.opacity ='0';
    }
    for(let t = 0; t < workTxt.length; t++){
        workTxt[t].style.opacity ='0';
        workTxt[t].style.visibility = 'hidden'
        workNum[t].style.opacity ='0';
        workNum[t].style.visibility = 'hidden'
    }
}
//sc_work onload Ani
function workIntroAni(){
    setTimeout(() => {
        workWebTxt.classList.add('on');
        setTimeout(()=>{
            for(let i = 0; i < workImgG.length; i++){
                setTimeout(()=>{
                    workImgC[i].style.height ='100%';
                  
                    workImgG[i].style.height ='100%';
                    workImgG[i].style.opacity ='1';
                    workImgG[i].style.transition = '1s ease'
                },i*300)
            }
            for(let i = 0; i < workTxt.length; i++){
                setTimeout(()=>{
                    workTxt[i].style.opacity ='1';
                    workTxt[i].style.visibility = 'visible'
                    workTxt[i].style.transition = '1s ease'
                },i*300)
            }

            workMouseAni();
        },200)
    },100);
}
//scroll
window.addEventListener('scroll',()=>{
    secGet = workCt.getBoundingClientRect();
    horGet = horizonWrap.getBoundingClientRect();
    v = window.scrollY;
    //console.log(secGet,horGet,v)
    translateX = (secGet.height - secGet.width) * ((v / (secGet.height - horGet.height)) * -1);
    horizonWrap.style.left = `${translateX}px`;
    console.log('translateX : ', translateX);
}) 
//cursor
window.addEventListener('mousemove',(e)=>{
    e.preventDefault();
    let mouseX = e.clientX - 90 + 'px';
    let mouseY = e.clientY - 90 + 'px';

    cursor.style.left = mouseX;
    cursor.style.top = mouseY;
    cursorAni()
})
//cursor is
let onCursor = false
function cursorAni(){
    if(!onCursor){
        setTimeout(()=>{
            cursorBox.style.display = 'block';
            setTimeout(()=>{
                cursorBox.style.opacity = '1';
                cursorBox.style.width = '120px';
                cursorBox.style.height = '120px';
                cursorBox.style.transition = '.5s ease';
            },500)
        })
    }else if(onCursor){
        cursorBox.style.opacity = '0';
        cursorBox.style.width = '0';
        cursorBox.style.height = '0';
        cursorBox.style.transition = '.5s ease';
        setTimeout(()=>{
            cursorBox.style.display = 'none';
        },500)
    }
}
//cursor scroll/click 
let isScroll = false
function ursorAni(){
    if(!isScroll){
        setTimeout(()=>{
            cursorBox.style.backgroundColor = '#fff';
            cursorBox.style.borderColor = '#454545';
            cursorBox.style.color = '#454545';
            cursorTxt.innerHTML = 'SCROLL'
        },200)
       
    }else if(isScroll){
        setTimeout(()=>{
            cursorBox.style.backgroundColor = '#333';
            cursorBox.style.borderColor = 'none';
            cursorBox.style.color = '#f8ecff';
            cursorTxt.innerHTML = 'CLICK'
        },200)
    }
}
// work mouseover
workMouseAni()
function workMouseAni(){
    for( let l = 0; l <workLink.length; l++){
        let numEnter = workLink[l].querySelector('.num_wrap span');
        let imgWrap = workLink[l].querySelector('.img_wrap');
        let imgGray = workLink[l].querySelector('.img_wrap .workImgG');
        let imgColor = workLink[l].querySelector('.img_wrap .workImgC');
    
        imgWrap.addEventListener('mouseover',()=>{
            // console.log('마우스 들어감')
            //cursor
            isScroll = true;
            ursorAni()
            //num
            setTimeout(()=>{
                numEnter.style.opacity = '1';
                numEnter.style.visibility = 'visible';
                numEnter.style.transform = `rotate(0deg)`;
                numEnter.style.transition= `.5s ease`;
            })
            //img
            setTimeout(()=>{
                imgColor.style.opacity = 1;
                imgColor.style.transition = '.5s ease'
                setTimeout(()=>{
                    imgColor.style.transform=`scale(1.1)`;
                    imgGray.style.transform=`scale(1.1)`;
                },200)
    
            })   
        })
        imgWrap.addEventListener('mouseout',()=>{
            // console.log('마우스 나감')
            //cursor
            isScroll = false;
            ursorAni()
            //num
            setTimeout(()=>{
                numEnter.style.opacity = '0';
                numEnter.style.visibility = 'hidden';
                numEnter.style.transform = `rotate(90deg)`;
                numEnter.style.transition= `.5s ease`;
            })
            //img
            setTimeout(()=>{
                imgColor.style.transform =` scale(1)`;
                imgGray.style.transform =` scale(1)`;
                imgColor.style.opacity = 0
                imgColor.style.transition = '.5s ease'
            },200) 
        })
    }
}
//work mousedown
let isMouseDown = false;
for( let d = 0; d < workLink.length; d++){

    const linkArr = Array.from(workLink[d].parentNode.children)//모든아이템 변환
    const linkDown = linkArr.indexOf(workLink[d])//배열중 마우스다운한 item 순번
    const prevItem = linkArr.slice(0,linkDown);//down 제외 이전 모든 형제들
    const nextItem = linkArr.slice(linkDown + 1);//down 제외 다음 모든 형제들
    var mouseDownTime ;
    workLink[d].addEventListener('mousedown',(e)=>{
        e.stopPropagation();
        if(!isMouseDown){
            console.log('마우스 다운');
            prevItem.forEach(siblingItem => {
                siblingItem.classList.add('mouseDown')
            });
            nextItem.forEach(siblingItem => {
                siblingItem.classList.add('mouseDown')
            }); 
            isMouseDown = true;
        } 
    })
    workLink[d].addEventListener('mouseup',(e)=>{
        // e.stopPropagation();
        if(isMouseDown){
            console.log('마우스 업');
            prevItem.forEach(siblingItem => {
                siblingItem.classList.remove('mouseDown')
            });
            nextItem.forEach(siblingItem => {
                siblingItem.classList.remove('mouseDown')
            }); 
            isMouseDown = false;
        }
        pageMoveAni();
    })
    
}
//work click
workClickAni();
function workClickAni(){  
    //cursor 없애기
    for( let c = 0; c < workLink.length; c++){
        workLink[c].addEventListener('click',(e)=>{

            workIndex = c;
            console.log(workIndex);
            e.preventDefault();
            //cursor 없애기
            onCursor = true;
            cursorAni();
            //페이지 이동 애니메이션
            pageMoveAni();
            //header scroll on 
            onWkPgScroll = false;
            workPgScroll();

            console.log('클릭')
            if(workLink[c].classList.contains('fritz')){
                fritzArea.style.display = 'block'
                pgIntroOpen(fritzArea);
                workCode(fritzArea);  
            }else if(workLink[c].classList.contains('tamburins')){
                tanburinsArea.style.display = 'block'
                pgIntroOpen(tanburinsArea);
                workCode(tanburinsArea);
                headColor();
            }else if(workLink[c].classList.contains('spotfy')){
                spotfyArea.style.display = 'block'
                pgIntroOpen(spotfyArea);
                workCode(spotfyArea);
                headColor();
            }else if(workLink[c].classList.contains('hmg')){
                hmgArea.style.display = 'block'
                pgIntroOpen(hmgArea);
                workCode(hmgArea);
                headColor();
            }else if(workLink[c].classList.contains('repick')){
                repickArea.style.display = 'block'
                pgIntroOpen(repickArea);
                workCode(repickArea);
                headColor();
            }
        })
    } 
}
// header color
let headChange = false
function headColor(){
    if(!headChange){
        setTimeout(()=>{
            header.style.color = '#fff'
            logo.style.color = '#fff'
            resume.style.color = '#fff'
        },500)
    }else if(headChange){
        setTimeout(()=>{
            header.style.color = '#222'
            logo.style.color = '#222'
            resume.style.color = '#222'
            headChange = false
        },500)
    }
}
//page move
let pageOpen = false;
function pageMoveAni(){
    if(!pageOpen){
        setTimeout(() => {
            pageMove.style.width = '135vw';
            pageMove.style.transition = '.5s ease'
            setTimeout(()=>{
                window.scrollTo(0, 0);
                scWork.style.display = 'none';
                workPg.style.display = 'block';
                pageMove.style.left = '100%'
                pageMove.style.width = '0vw';
                pageMove.style.transition = '.5s ease' 
                pageOpen = true;
            },500)
        },100);

    }else if(pageOpen){//오픈된 상태라면
        setTimeout(() => {
            pageMove.style.left = '0%'
            pageMove.style.width = '135vw';
            pageMove.style.transition = '.5s ease'
            setTimeout(()=>{
                scWork.style.display = 'block';
                workPg.style.display = 'none';
                for(const wpw of workPgWrap){
                    wpw.style.display = 'none';
                };
                pageMove.style.left = '0%'
                pageMove.style.width = '0vw';
                pageMove.style.transition = '.5s ease' 
                pageOpen = false;
            },500)
        },100 );

    }
}
//work page intro ani
function pgIntroOpen(intro){
    let introTxt = intro.querySelector('.work_intro .txt_wrap')
    let introTit = intro.querySelector('.work_intro .tit')
    let introSub = intro.querySelector('.work_intro .sub')
    let introLI = intro.querySelectorAll('.work_intro li')
    setTimeout(()=>{
        introTxt.classList.add('on');
        setTimeout(()=>{
            introTit.classList.add('on');
            introSub.classList.add('on');
            for(let i = 0; i < introLI.length; i++){
                setTimeout(()=>{
                    introLI[i].classList.add('on')
                },i*50)
            }
        },300)
        
    },1000)
    workPgScroll();//work page open scroll
}
//header bg scroll
let onWkPgScroll = false;
function workPgScroll(){
    if(!onWkPgScroll){
        window.addEventListener('scroll',(e)=>{
            e.preventDefault(); 
                //info scroll fixed
                for(let i =0; i < infoArea.length;i++){
                    let scrollNow = document.documentElement.scrollTop;
                    let winHeight = window.innerHeight;   
                    let infoAreaBt = infoArea[i].offsetTop;//요소의 bottom
                    let infoAreaTop = infoAreaBt - winHeight; //요소의 top
                    let bgProPer = 0;
                    bgProPer = (scrollNow - infoAreaTop) / winHeight * 10;
                    if( 20 <= bgProPer){
                        infoArea[i].classList.add('fix');
                        if(matchMedia('screen and(max-width:786px)').matches){
                            //infoArea[i].classList.remove('fix');
                        }
                    }else if(20 > bgProPer){
                        infoArea[i].classList.remove('fix');
                    }
                }
        })      
    }else if(onWkPgScroll){
        for(let i = 0; i < infoArea.length;i++){
            infoArea[i].classList.remove('fix');
        }
    }
}
//page out
pageOut.addEventListener('click',()=>{
    window.scrollTo(0, 0);
    horizonWrap.style.left = 0;

    pageMoveAni();
    pgIntroOut();
    //header color reset
    headChange = true;
    headColor();
    //header bg reset 
    onWkPgScroll = true;
    workPgScroll();
    //cursor reset
    onCursor = false;
    cursorAni();
})
//page out - workpg intro reset
function pgIntroOut(){
    for(const txtWrap of introTxtArea){
        txtWrap.classList.remove('on');
    }
    for(const tit of introTit){
        tit.classList.remove('on');
    }
    for(const sub of introSub){
        sub.classList.remove('on');
    }
    for(const li of introLi){
        li.classList.remove('on');
    }
}



//workCode click
function workCode(thisPg){
    codeIndex = thisPg.querySelectorAll('.code');
    for(let c = 0; c < codeIndex.length; c++){
        codeIndex[c].addEventListener('click',()=>{
            let imgSrc = codeBox.querySelector('img');
            imgSrc.setAttribute('src',codeSrc[workIndex][c]);
            console.log('workNum :',workIndex,c);

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



///moblie ++ click 
const mInfoUl = document.querySelectorAll('.work_page .work_wrap .info_group .desc');
const mInfoPlus = document.querySelectorAll('.work_page .work_wrap .info_group .block');
let ulOpen = false;
// if(matchMedia('screen and(max-width:786px)').matches){
// }
for(let b = 0; b < mInfoPlus.length; b++){
    mInfoPlus[b].addEventListener('click',()=>{
        for(let u = 0; u < mInfoUl.length; u++){
            if(!ulOpen){
                mInfoUl[u].classList.add('on')
                ulOpen = true;
            }else if(ulOpen){
                mInfoUl[u].classList.remove('on')
                ulOpen = false;
            }
        }
    })
}
