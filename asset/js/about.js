//about intro ani
const aboutTxt = document.querySelector('.introduce_area .sc_intro .txt_wrap');
const aboutit = document.querySelectorAll('.introduce_area .sc_intro .main_title span');
aboutAni();
function aboutAni(){
    setTimeout(()=>{
        aboutTxt.style.opacity = '100%';
        aboutTxt.style.transform ='translateY(0px)';
        aboutTxt.style.transition = '.5s ease'
        for(let i = 0 ;i < aboutit.length; i++){
            setTimeout(()=>{
                aboutit[i].style.top= '0%';
                aboutit[i].style.opacity = '100%'
                aboutit[i].style.transition = '.5s ease'
            },i*180)
        }
    },100)
}
//about link click
const abLink = document.querySelectorAll('.introduce_area .link');
for(const link of abLink){
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        window.location.href = work;
    })
}
//about footer
const abResume = document.querySelectorAll('.footer_wrap .resume a');
const abLIDown = document.querySelector('.footer_wrap .resume .download');
const abLiCt = document.querySelector('.footer_wrap .resume .contactLink');
for(let i = 0; i < abResume.length; i++){
    abResume[i].addEventListener('mouseover',()=>{
         abResume[i].classList.add('on')
    })
    abResume[i].addEventListener('mouseout',()=>{
        abResume[i].classList.remove('on')
   })
}
//다운로드 링크
abLIDown.addEventListener('click', (e) => {
    e.preventDefault();
    const fileURL = './img/홍연화_이력서_자기소개서.pdf';
    const fileName = '이력서.pdf';

    const link = document.createElement('a');
    link.href = fileURL;
    link.download = fileName;
    link.click();
});
//contact 이동
abLiCt.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = contact;
})

