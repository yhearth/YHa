
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

// const mainWrap= document.querySelector('.sc_work .main_web')
const mainWrap= document.querySelector('.sc_work .main_web')
const nameWrap= mainWrap.querySelector('.sc_work .main_web .title .name')
const nameLi= nameWrap.querySelectorAll('.sc_work .main_web .title .name span')
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
const tanburinsArea = document.querySelector('.tamburins_area')
const spotfyArea = document.querySelector('.spotfy_area')
const hmgArea = document.querySelector('.hmg_area')
const repickArea = document.querySelector('.repick_area')

const codeBtn = document.querySelectorAll('.work_page .code')
const codeBox = document.querySelector('.work_page .code_wrap')
const codeImg = document.querySelector('.work_page .code_box')
const codeTxt = document.querySelector('.work_page .code_box code')
const codeXBtn = document.querySelector('.work_page .x_btn')

let workIndex = 0;
let codeIndex = 0;

window.onresize = function(){
    if (window.matchMedia("(min-width: 768px)").matches){
        location.reload()
        // window.scrollTo(0, 0);
        // horizonWrap.style.left = 0;
    }else if(window.matchMedia("(max-width: 767px)").matches){mMvPgChk()}
};

//main load Ani
mainLoad();
function mainLoad(){
    for(let n = 0; n < nameLi.length; n++){
        setTimeout(()=>{
            nameLi[n].style.bottom = 0;
            nameLi[n].style.transition =".5s ease"
        },n*80) 
    }
}
if(window.matchMedia("(min-width: 767px)").matches){nameOver()}
function nameOver(){
    nameWrap.addEventListener('mouseover',()=>{
        onCursor = true;
        cursorAni()
        mainWrap.classList.add('dark');
        nameWrap.classList.add('dark');
        headChange = false
        headColor()
    })
    nameWrap.addEventListener('mouseout',()=>{
        onCursor = false;
        cursorAni()
        mainWrap.classList.remove('dark');
        nameWrap.classList.remove('dark');
        headChange = true;
        headColor()
    })
}


//cursor
window.addEventListener('mousemove',(e)=>{
    e.preventDefault();
    let mouseX = e.clientX - 100 + 'px';
    let mouseY = e.clientY - 100 + 'px';
    cursor.style.left = mouseX;
    cursor.style.top = mouseY;
    cursorAni()
})
//cursor is
let onCursor = false
function cursorAni(){
    if(!onCursor){
        setTimeout(()=>{
            cursorBox.style.transform = `scale(1)`;
            cursorBox.style.transition = '.5s ease';
        },200)
    }else if(onCursor){
        setTimeout(()=>{
            cursorBox.style.transform = `scale(0)`;
            cursorBox.style.transition = '.5s ease';
        },200)
    }
}
//cursor scroll/click 
let isScroll = false
function ursorAni(){
    if(!isScroll){
        setTimeout(()=>{
            cursorBox.style.backgroundColor = '#fff';
            cursorBox.style.borderColor = '#222';
            cursorBox.style.color = '#222';
            cursorTxt.innerHTML = 'SCROLL'
        },200)
       
    }else if(isScroll){
        setTimeout(()=>{
            cursorBox.style.backgroundColor = '#222';
            cursorBox.style.borderColor = 'none';
            cursorBox.style.color = '#f8ecff';
            cursorTxt.innerHTML = 'CLICK'
        },200)
    }
}





//scroll
function handleScrollEvent(){
    secGet = workCt.getBoundingClientRect();
    horGet = horizonWrap.getBoundingClientRect();
    v = window.scrollY;
    translateX = (secGet.height - secGet.width) * ((v / (secGet.height - horGet.height)) * -1);
    if (window.matchMedia("(min-width: 1920px)").matches){
        if(v > 1800){workIntroAni();}
    }else if(window.matchMedia("(min-width: 1440px)").matches){
        if(v > 1200){workIntroAni();}
    }else if(window.matchMedia("(min-width: 1024px)").matches){
        if(v > 600){workIntroAni();}
    }else if(window.matchMedia("(min-width: 767px)").matches){
        if(v > 380){workIntroAni();}
    }else{ if(v > 0){workIntroAni();}}
   
    horizonWrap.style.left = `${translateX}px`;
}
window.addEventListener('scroll', handleScrollEvent);
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
                },i*200)
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



// work mouseover
function workMouseAni(){
    for( let l = 0; l <workLink.length; l++){
        let imgWrap = workLink[l].querySelector('.img_wrap');
        let imgGray = workLink[l].querySelector('.img_wrap .workImgG');
        let imgColor = workLink[l].querySelector('.img_wrap .workImgC');  
        imgWrap.addEventListener('mouseenter',()=>{   
            isScroll = true;
            ursorAni()
            setTimeout(()=>{
                imgColor.style.opacity = 1;
                imgColor.style.transition = '.5s ease'
                setTimeout(()=>{
                    imgColor.style.transform=`scale(1.1)`;
                    imgGray.style.transform=`scale(1.1)`;
                },200)
    
            })   
        })
        imgWrap.addEventListener('mouseleave',()=>{
            isScroll = false;
            ursorAni()
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
function linkDown(){
    for( let d = 0; d < workLink.length; d++){

        const linkArr = Array.from(workLink[d].parentNode.children)
        const linkDown = linkArr.indexOf(workLink[d])
        const prevItem = linkArr.slice(0,linkDown);
        const nextItem = linkArr.slice(linkDown + 1);
        var mouseDownTime ;
        workLink[d].addEventListener('mousedown',(e)=>{
            e.stopPropagation();
            if(!isMouseDown){
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
            if(isMouseDown){
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
}
//work click
workClickAni();
function workClickAni(){  
    //cursor 없애기
    for( let c = 0; c < workLink.length; c++){
        workLink[c].addEventListener('click',(e)=>{
            e.preventDefault();
            workIndex = c;
            console.log(workIndex);

            //cursor 없애기
            onCursor = true;
            cursorAni();
            //페이지 이동 애니메이션
            pageMoveAni();
            //header scroll 
            workPgScroll();


            if(workLink[c].classList.contains('fritz')){
                fritzArea.style.display = 'block'
                pgIntroOpen(fritzArea);
                workCode(fritzArea);  
            }else if(workLink[c].classList.contains('tamburins')){
                tanburinsArea.style.display = 'block'
                pgIntroOpen(tanburinsArea);
                workCode(tanburinsArea);
            }else if(workLink[c].classList.contains('spotfy')){
                spotfyArea.style.display = 'block'
                pgIntroOpen(spotfyArea);
                workCode(spotfyArea);
            }else if(workLink[c].classList.contains('hmg')){
                hmgArea.style.display = 'block'
                pgIntroOpen(hmgArea);
                workCode(hmgArea);
            }else if(workLink[c].classList.contains('repick')){
                repickArea.style.display = 'block'
                pgIntroOpen(repickArea);
                workCode(repickArea);
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
        },200)
    }else if(headChange){
        setTimeout(()=>{
            header.style.color = '#222'
            logo.style.color = '#222'
            resume.style.color = '#222'
            headChange = false
        },200)
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

    }else if(pageOpen){
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
    workPgScroll();
}
//header bg scroll
function workPgScroll(){
    window.addEventListener('scroll',(e)=>{
        e.preventDefault(); 
            //info scroll fixed
            for(let i =0; i < infoArea.length;i++){
                let scrollNow = document.documentElement.scrollTop;
                let winHeight = window.innerHeight;   
                let infoAreaBt = infoArea[i].offsetTop;
                let infoAreaTop = infoAreaBt - winHeight;
                let bgProPer = 0;
                bgProPer = (scrollNow - infoAreaTop) / winHeight * 10;
                console.log(bgProPer);
                if( 20 < bgProPer){
                    infoArea[i].classList.add('fix');
                }else if(20 > bgProPer){
                    infoArea[i].classList.remove('fix');
                }
            }
    }) 
}
//page out
pageOut.addEventListener('click',()=>{
    pageMoveAni();
    pgIntroOut();
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

           codeTxt.innerHTML = codeSrc[workIndex][c];
           hljs.initHighlightingOnLoad();
            // codeTxt.setAttribute('src',codeSrc[workIndex][c]);
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
//모바일 비디오 변경


let mWorkIndex;
if(window.matchMedia("(max-width: 767px)").matches){mMvPgChk()}

function mMvPgChk(){
    for( let w = 0; w < workPgWrap.length; w++){
        mWorkIndex = w;
        if(workPgWrap[w].classList.contains('fritz_area')){
                mMvChange(fritzArea);
        }else if(workPgWrap[w].classList.contains('tamburins_area')){
                mMvChange(tanburinsArea);     
        }else if(workPgWrap[w].classList.contains('spotfy_area')){
                mMvChange(spotfyArea);
        }else if(workPgWrap[w].classList.contains('hmg_area')){
                mMvChange(hmgArea);
        }else if(workPgWrap[w].classList.contains('repick_area')){
                mMvChange(repickArea);
        }

}
}
function mMvChange(mAllImgBox){
    let mGallImgBox = mAllImgBox.querySelectorAll('.img_wrap');
    let mGallMv = mAllImgBox.querySelectorAll('.mv');
    for(let m = 0 ;m < mGallMv.length; m++){
        mGallMv[m].remove();
        mGallImgBox[m].innerHTML = ` <img src="${mImgSrc[mWorkIndex][m]}" alt="" width="100%">`
    }
}








