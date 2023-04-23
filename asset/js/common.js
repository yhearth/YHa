'use strict';//
const header = document.querySelector('header');
const logo = document.querySelector('header .logo');
const resume = document.querySelector('header .resume');
const menuLink = document.querySelectorAll('header .menu_link');
const menuLinkSpan = document.querySelectorAll('header .menu_link span');
let index = 'index.html';
let work= 'work.html';
let about = 'about.html';
let contact = 'contact.html';
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
            window.location.href = work;
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

//header scroll
window.addEventListener('scroll',(e)=>{
    e.preventDefault();
        let scrollNow = document.documentElement.scrollTop;
        let winHeight = window.innerHeight;
        
        //header scroll
        let hdTriger = header.offsetTop;
        let hdTop = hdTriger - winHeight;
        let hdPer = 0;
        hdPer = (scrollNow - hdTop) / winHeight * 10;
        if( 10 < hdPer){
            header.classList.add('on');
        }else if(10 == hdPer){
            header.classList.remove('on');
        }      
})  

//
const resumeLInk = document.querySelector('.resume_link');
resumeLInk.addEventListener('click', (e) => {
    e.preventDefault();
    const fileURL = './asset/img/홍연화_이력서_자기소개서.pdf';
    const fileName = '이력서.pdf';

    const link = document.createElement('a');
    link.href = fileURL;
    link.download = fileName;
    link.click();
});

