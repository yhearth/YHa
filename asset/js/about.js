//about intro ani
const aboutTxt = document.querySelector('.introduce_area .sc_intro .txt_wrap');
const aboutit = document.querySelectorAll('.introduce_area .sc_intro .main_title span');
const aboutSub = document.querySelector('.introduce_area .sc_intro .sub_title');
const aboutP = document.querySelector('.introduce_area .sc_intro .explan');
const aboutImg = document.querySelector('.introduce_area .sc_intro .img_box');
aboutAni();
function aboutAni(){
    setTimeout(()=>{
        for(let i = 0 ;i < aboutit.length; i++){
            setTimeout(()=>{
                aboutit[i].style.top= '0%';
                aboutit[i].style.opacity = '100%'
                aboutit[i].style.transition = '.5s ease'
            },i*180)
        }
        setTimeout(()=>{
            aboutSub.style.opacity = 1
            aboutSub.style.transform = 'translateY(0)'
            aboutSub.style.transition= '.8s ease'
            aboutP.style.opacity = 1
            aboutP.style.transform = 'translateY(0)'
            aboutP.style.transition= '.8s ease'
            setTimeout(()=>{
                aboutImg.style.height = '100%';
                aboutImg.style.transition = '1s ease'
            },250)

        },500)
    })
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
    const fileURL = './asset/img/홍연화_이력서_자기소개서.pdf';
    const fileName = '홍연화_이력서.pdf';

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

