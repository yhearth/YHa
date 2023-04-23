
//main
const mainYha = document.querySelector('.sc_main .name');
const YhaWrap = document.querySelectorAll('.sc_main .name strong');
const yhaExplan = document.querySelectorAll('.sc_main .intro .explan span');
const yhaLine = document.querySelector('.sc_main .intro .line i');
const yhaLink = document.querySelector('.sc_main .link_work');
yhaAni()
function yhaAni(){
    for(let i = 0; i < YhaWrap.length; i++){
        let yhaSpan = YhaWrap[i].querySelector('span');
        setTimeout(()=>{
            yhaSpan.style.opacity='1'
            yhaSpan.style.bottom='0%'
            yhaSpan.style.transition = '.5s ease'
        },i*80)
    }
}
yhaIntroAni()
function yhaIntroAni(){
    setTimeout(()=>{
        yhaLine.style.width = '100%';
        yhaLine.style.transition = '.2s ease'
        setTimeout(()=>{
            for(let e = 0; e <yhaExplan.length; e++){
                setTimeout(()=>{
                    yhaExplan[e].style.top='0%'
                    yhaExplan[e].style.transition = '.5s ease'
                },e*100)
            }
        },300)
    },500)
}
//yha mouseover
if (matchMedia("screen and (min-width:767px)").matches){
    yhaOverAni()
}
function yhaOverAni(){
    mainYha.addEventListener('mouseover',()=>{
        for(let i = 0; i < YhaWrap.length; i++){
            setTimeout(()=>{
                YhaWrap[i].style.marginLeft = '10px';
                YhaWrap[i].style.marginRight = '10px';
                YhaWrap[i].style.transition = '.5s ease'
            })
            let yhaSpan = YhaWrap[i].querySelector('span');
            if(yhaSpan.classList.contains('name_y')){
                yhaSpan.style.color="#cfafda";
            }else if(yhaSpan.classList.contains('name_h')){
                yhaSpan.style.color="#cfafda";
            }else if(yhaSpan.classList.contains('name_a')){
                yhaSpan.style.color="#cfafda";
            }
        }
    })
    mainYha.addEventListener('mouseout',()=>{
        for(let i = 0; i < YhaWrap.length; i++){
            setTimeout(()=>{
                YhaWrap[i].style.marginLeft = '0px';
                YhaWrap[i].style.marginRight = '0px';
                YhaWrap[i].style.transition = '.5s ease'
            })
            let yhaSpan = YhaWrap[i].querySelector('span');
            yhaSpan.style.color="#454545";
        }
        
    
    })
}
//main link mouseover
if (matchMedia("screen and (min-width:767px)").matches) {
    yhaLink.addEventListener('mouseover',()=>{
        let allWork = yhaLink.querySelector('.link_box');
        allWork.style.width = '170px';
        allWork.style.opacity = '1'
        allWork.style.transition = '.5s ease' 
    })
    yhaLink.addEventListener('mouseout',()=>{
        let allWork = yhaLink.querySelector('.link_box');
        allWork.style.width = '0px';
        allWork.style.opacity = '0'
        allWork.style.transition = '.5s ease' 
    })
} 
yhaLink.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('작업 페이지 이동');
    window.location.href = work;
})

/////////////////////////////////////////////////


