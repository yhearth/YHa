
//contact
const contactSpan = document.querySelectorAll('.contact_area .tit span');
const contactSns = document.querySelectorAll('.contact_area .sns_wrap>div');
contactIntroAni()
function contactIntroAni(){ 
    setTimeout(()=>{
        for(let i = 0; i <contactSpan.length; i++){
            setTimeout(()=>{
                contactSpan[i].style.top = '0%';
                contactSpan[i].style.transition = '.5s ease';
            },i*150)
        }
    })
}


