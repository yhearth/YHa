const fritzCodeSrc = [
    `
    function  mainVisualSlide(){

        for(let i = 0; i < visualImg.length; i++){
            visualArray.push(visualImg[i]);
            visualImg[i].style.opacity = 0;
        }
        visualImg[visualNow].style.opacity = 1;
        numBtn.textContent ='';
        numBtn.innerHTML += {numArr[numNow]};
    
        //load ani
        setTimeout(()=>{//main
            visualSc.style.opacity = 1;
            visualSc.style.transition = '1s ease';
        },500)
        setTimeout(()=>{//control
            visControl.style.opacity =1;
            visControl.style.transition = '.5s ease'
        },1500)
         setTimeout(()=>{//visual img
            visualWrap.style.height = '70%';
            visualWrap.style.transition='1s ease';
         },1000)
        visualTit.classList.add('on')//txt
    
        //img slide ani
        setTimeout(()=>{
             let timer = undefined; 
             if (timer == undefined) {
                 timer = setInterval(visualSlide,4000);
             }
             function visualSlide(){
         
                 let visualNext = (visualNow + 1) % visualImgAll;
                 let numNext = (numNow + 1) % visualImgAll ;
                 //remove
                 visualArray[visualNow].style.opacity = 0;
                 visualArray[visualNow].style.transform = "scale(1.05)";
                 visualArray[visualNow].style.transition = '1s ease';
                numBtn.textContent ='';
                //add   
                  visualArray[visualNext].style.opacity = 1;
                  visualArray[visualNext].style.transform = "scale(1)";
                  visualArray[visualNext].style.transition = '1s ease';
                  numBtn.innerHTML += {numArr[numNext]};
    
                  visualNow = visualNext;
                  numNow = numNext;
             }
             nextBtn.addEventListener('click',()=>{
                timeroff()
                setTimeout(() => {
                    let visualNext = (visualNow + 1) % visualImgAll ;
                    let numNext = (numNow + 1) % visualImgAll ;
    
                    visualArray[visualNow].style.opacity = 0;
                    visualArray[visualNow].style.transform = "scale(1.05)";
                    visualArray[visualNow].style.transition = '1s ease'; 
                     numBtn.textContent ='';   
    
                     visualArray[visualNext].style.opacity = 1;
                     visualArray[visualNext].style.transform = "scale(1)";
                     visualArray[visualNext].style.transition = '1s ease';
       
                     numBtn.innerHTML += {numArr[numNext];
       
                     visualNow = visualNext;
                     numNow = numNext;
                     
                });
                timeron()
             })
             prevBtn.addEventListener('click',()=>{
                timeroff()
                setTimeout(() => {
                    let visualPrev = (visualNow + (visualImgAll - 1) ) % visualImgAll ;
                    let numPrev = (numNow + (visualImgAll - 1) ) % visualImgAll;
    
                    console.log(visualPrev)
    
                    visualArray[visualNow].style.opacity = 0;
                    visualArray[visualNow].style.transform = "scale(1.05)";
                    visualArray[visualNow].style.transition = '1s ease'; 
                    numBtn.textContent ='';   
                     
                     visualArray[visualPrev].style.opacity = 1;
                     visualArray[visualPrev].style.transform = "scale(1)";
                     visualArray[visualPrev].style.transition = '1s ease';
       
                     numBtn.innerHTML += {numArr[numPrev]};
       
                     visualNow = visualPrev;
                     numNow = numPrev;
                     
                });
                timeron()
             })
             function timeron(){
                 if (!timer) { 
                     timer = setInterval(visualSlide,4000);
                   }      
             }
             function timeroff(){
                 if (timer) {
                     clearInterval(timer);
                     timer = undefined;				
                   }
             }
             statelBtn.addEventListener('click',()= >{
         
                 let btnArr = [];
         
                 btnArr = statelBtn.children;
                  console.log(btnArr[0]);
         
                 if(btnArr[0].classList.contains('on')){
                     btnArr[0].classList.remove('on');
                     btnArr[1].classList.add('on');
                     timeroff();      
                 }else if(btnArr[1].classList.contains('on')){
                     btnArr[1].classList.remove('on');
                     btnArr[0].classList.add('on');
                     timeron();
                 }
             })
        },500)
    }
    `,
    `
     for(let c = 0; c < pdCheckLi.length; c++){

        pdFillIdx.innerText = pdItemIdx;//상품 갯수 초기화
    
        pdCheckLi[c].addEventListener('click',function(){//체크박스 클릭할때
      
            if(!pdCheckLi[c].classList.contains('checked')){
                pdCheckLi[c].classList.add('checked');
    
                let chxLabel = pdCheckLi[c].nextElementSibling;
                let chxName =  chxLabel.getAttribute('for');//for 값
                //체크박스
                checkArr.push(chxName);//선택된 라벨 배열
                //리스트
                for(let i = 0; i < pdItemFig.length; i++){
                    let itemLi = pdItemFig[i].parentElement.parentElement;
                    let itemSpan = pdItemFig[i].children; 
                    let itemTit = itemSpan[0].className;
                    let itemSub = itemSpan[1].textContent;
    
                    itemLi.classList.add(dNone);//클릭시 모든 아이템 숨기기
                    itemLi.classList.remove('active');
    
                    checkArr.filter(function(n){
                        if(n === itemTit){
                            itemLi.classList.remove(dNone);
                            itemLi.classList.add('active');
                            return n == itemTit; 
                        }
                    }); 
    
                }
                
                //상품 갯수 
                let viewitemIdx = document.querySelectorAll('.pd_list .active')
                pdItemIdx = viewitemIdx.length
                pdFillIdx.innerText = pdItemIdx
    
                console.log(checkArr);
                
    
            }else if(pdCheckLi[c].classList.contains('checked')){
                pdCheckLi[c].classList.remove('checked');//체크 된 상태면 클래스 삭제
    
                let chxLabel = pdCheckLi[c].nextElementSibling;
                let chxName =  chxLabel.getAttribute('for');/
    
                
                //체크박스 
                for(let x = 0; x < checkArr.length; x++){
                    if(checkArr[x] == chxName ){
                        checkArr.splice(x,1);
                        x--;   
                    } 
                }
                console.log(checkArr);
    
                //리스트
                for(let i = 0; i < pdItemFig.length; i++){
                    let itemLi = pdItemFig[i].parentElement.parentElement;
                    let itemSpan = pdItemFig[i].children; 
                    let itemTit = itemSpan[0].className;
                    let itemSub = itemSpan[1].textContent;
    
                    itemLi.classList.add(dNone);
                    itemLi.classList.remove('active');
    
                    checkArr.filter(function(n){
                        //itemLi.classList.add(dNone);
                        if(n === itemTit ){
                            itemLi.classList.remove(dNone);
                            itemLi.classList.add('active');
                            return n == itemTit ;
                        }
    
                    }); 
    
                    if(checkArr.length == 0){
                        console.log('빵');
                        itemLi.classList.remove(dNone);
                        itemLi.classList.add('active');
                        // pdFillIdx.innerText = '15';
                    }
    
                }
    
                //상품 갯수 
                let viewitemIdx = document.querySelectorAll('.pd_list .active')
                pdItemIdx = viewitemIdx.length
                pdFillIdx.innerText = pdItemIdx
    
    
            }
    
        })
    
    }
    `,
    `
    function shellOptionClick(){

        for(let s = 0; s<shellBox.length; s++){
            shellBox[s].addEventListener('click',()=>{
                shellIdx = s;
                let shellCus = shellBox[s].querySelector('span');
                shellName = shellCus.textContent;//커스텀 이름 변수
    
                for(let x = 0; x<shellBox.length; x++){
                    let shellImg = shellBox[x].querySelector('img');
                    shellImg.style.border=0;
                    shellImg.style.boxShadow = '#000 0px 0px 0px ';
                    shellImg.style.padding=0;
                }//초기화
                let shellImg = shellBox[s].querySelector('img');
                shellImg.style.border='1px solid #ccc';
                shellImg.style.boxShadow = '#00000070 1px 6px 10px';
                shellImg.style.padding='2px';
                shellImg.style.transition = '.5s ease';
                
                shellImgBox.setAttribute('src',shellImgSrc[s]);//정면 이미지 바꾸기
                shellSideImg.setAttribute('src',shellSideSrc[s]);//side 이미지 바꾸기
                shellLeftImg.setAttribute('src',shellLeftSrc[s]);//left 이미지 바꾸기
                shellRightImg.setAttribute('src',shellRightSrc[s]);//right 이미지 바꾸기
                
            })
        }
        console.log('shell : '+ shellIdx);
    
    }
    `,
    `
    //save btn click
        saveBtn.addEventListener('click',()=>{ 
            console.log('세이브 버튼 누름');
            wishIdx++;
            wishIdxSpan.style.display = 'block'
            wishIdxSpan.innerText = wishIdx;
            if( saveName.value === ''){
                saveNameNot() //이름 없을때
            }
        savePopNone();//세이브 팝업 없애기
        wishListAdd();//위시리스트 아이템 추가
        })
    //wish item remove
        function  listDelate(){
            delateBtn = document.querySelectorAll('.delate_box');
        
            for(let d = 0; d < delateBtn.length; d++){
                delateBtn[d].addEventListener('click',(e)=>{
        
                    let removeItem = e.target.parentElement;
                    removeItem.remove();
        
                    wishIdx--;
                    wishIdxSpan.innerText = wishIdx;
        
                    if(wishIdx == 0){
                        wishPgtxt.style.display = 'block'/
                        wishIdxSpan.style.display = 'none'
                    }
                })
            }
        }
    `,
    `
    window.addEventListener('scroll',()=> { 
    
        for(let i = 0; i <trigerLiving.length; i++){
           
            let scrollNow = document.documentElement.scrollTop;
            let winHeight = window.innerHeight;
            let trigerBottom = trigerLiving[i].offsetTop;
            let trigerTop = trigerBottom - winHeight;
            let bgProPer = 0;
            bgProPer = (scrollNow - trigerTop) / winHeight * 10;
            let trigerItems =  trigerLiving[i].querySelectorAll('li')
                if( 15 <= bgProPer){
                    for(let v =0; v <trigerItems.length; v++){
                        setTimeout(()=>{
                            trigerItems[v].style.opacity = 1;
                            trigerItems[v].style.visibility = 'visible'
                            trigerItems[v].style.transform = 'translateY(0%)'
                            trigerItems[v].style.transition = '.8s ease'
                        },v*300);   
                    }
                }
        }
    })
    `,
    `
    window.addEventListener('mousemove',(e)= &lt;{
        let mouseX = e.clientX + 50 + 'px';
        let mouseY = e.clientY - 150 + 'px';
    
        cursor.style.left = mouseX
        cursor.style.top = mouseY
    })

    `,
    `
    makeClone();
    //이미지 클론
    function makeClone(){
        for(let i = 0; i < slideIndex; i++){
            let  cloneSlide = aboutFhLi[i].cloneNode(true);
            cloneSlide.classList.add('clone')
            aboutFhWrap.appendChild(cloneSlide);
        }
        for(let i = slideIndex -1; i >= 0; i--){
            let cloneSlide = aboutFhLi[i].cloneNode(true);
            cloneSlide.classList.add('clone')
            aboutFhWrap.prepend(cloneSlide)
        }
        updateWidth()
        setIntialPos();
        setTimeout(()=>{
            aboutFhWrap.classList.add('ani');
        },100)

    }
    //이미지 가로값 업데이트
    function updateWidth(){
        let currSlideLi = document.querySelectorAll('.slide_wrap li');
        let newSlideIndex = currSlideLi.length;

        let newWidth = ( slideWidth + slideMargin ) * newSlideIndex - slideMargin + 'vw';
        aboutFhWrap.style.width = newWidth;

    }
    //보여지는 이미지 위치 변경
    function setIntialPos(){
        let resetPos = -(slideWidth + slideMargin ) * slideIndex;
        aboutFhWrap.style.transform = 'translateX('+ resetPos +'vw)';
    }
    aboutFhNext.addEventListener('click',function(){ moveSlide(currIndex + 1);})
    aboutFhPrev.addEventListener('click',function(){moveSlide(currIndex - 1);})
    //이미지 슬라이드
    function moveSlide(num){
    aboutFhWrap.style.left = - num * (slideWidth + slideMargin ) + 'vw';
    currIndex = num;
    if(currIndex == slideIndex || currIndex == -slideIndex){
        setTimeout(()=>{
            aboutFhWrap.classList.remove('ani');
            aboutFhWrap.style.left = 0;
            currIndex = 0;
        },500)
        setTimeout(()=>{
            aboutFhWrap.classList.add('ani');
        },505)
    }
    }
    `,
]
const tamCodeSrc = [
    `
        gsap.fromTo($('.img_wrap'),0.7,{
            scale:1.5,
            opacity:0
        },{
            scrollTrigger:{
                trigger:$('.cateGallery'),
                start:"top 50%", 
                end:"top top",
                scrub:1,
            },
            scale:1,
            opacity:1
        })
    `,
    `
    // 향수 스와이프
        swiper = new Swiper(".sc_collection .mySwiper", {
            slidesPerView: 1,
            centeredSlides: 40,
            spaceBetween: 30,
            // grabCursor: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
                },
            breakpoints: {
                767: {slidesPerView: 2,},
                1024: {slidesPerView: 3,},
                1440: { slidesPerView: 4,},
            },
        });
    //카테고리 슬라이드
        var swiper = new Swiper(".category_area .mySwiper", {
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<img src = "./asset/img/cate/cate_icon_' +(index+1) + '.png" alt="">'+"</span>";
            }
            ,
            },
        });
    `,
]
const spotiCodeSrc = [
    `
    $.getJSON('asset/js/date/library.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.libraryCate == 'album'});

            var html = '';
            $.each(result,function(index,album){
                html += '&lt; li class="list_item">';
                html += '&lt; a href="'+album.thumbLink+'" class="img_wrap">';
                html += '&lt; img src="'+album.thumbSrc+'" alt="">';
                html +='&lt;div class="ic_play">&lt;buttom class="play_btn">'   ;
                html +='&lt;span>&lt;svg>&lt;path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">&lt;/path>&lt;/svg>&lt;/span>' ; 
                html +='&lt;/buttom>&lt;/div>&lt;/a>' ;
                html += '&lt;div class="txt_wrap">&lt;a href="" class="tit">'+album.title+'&lt;/a>';
                html += '&lt;span class="info">'+album.info+'&lt;/span>&lt;/div>&lt;/li>';     
            });
            $('.sc_album .album_list .list_wrap').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        libraryItemAni();
    });
    `,
]
const hmgCodeSrc = [
    `
        //slide animation
        var visualSlide = new Swiper(".visual-area",{
            navigation:{
                prevEl:".visual-area .btn.prev",
                nextEl:".visual-area .btn.next",
            },
            pagination:{
                el:".swiper-pagination",
            },
            autoplay:{
                delay:3000,
                disableOnInteraction : false,
            },
        });
    `,
    `
        if(matchMedia("screen and (max-width : 767px)").matches){
            $('.slide_01 img').attr('src','asset/img/main-m-banner01.jpeg');
            $('.slide_02 img').attr('src','asset/img/main-m-banner02.jpeg');
            $('.slide_03 img').attr('src','asset/img/main-m-banner03.jpeg');
            $('.slide_04 img').attr('src','asset/img/main-m-banner04.jpeg');
            $('.visual-control img').attr('src','asset/img/ic-m-sprite.png');
        //    location.reload();

        }else if(matchMedia("screen and (max-width : 1024px)").matches){
        $('.visual-control img').attr('src','asset/img/ic-m-sprite.png');
        }
        $(document).ready(function(){
            $(window).resize(function(){
                location.reload();
            })
        })
    `,
]
const repickCodeSrc = [
    `
    const $window = $(window);
        const body = $('body');
        let wonsize = {width:null,height:null}
        let scrollY = null;
        let winHeight = window.innerHeight;

        const $newValue = document.querySelector('.newValue');
        let newValueTop = $newValue.offsetTop;
        let newValueVt = newValueTop - winHeight;
        let newValuePercent = 0;
        const newValueAni = ()=>{
            newValuePercent = (scrollY - newValueVt) / winHeight * 100;

            if( 260 <= newValuePercent){
                $newValue.classList.add('active'); 
            }
            if(matchMedia("screen and (max-width : 1024px)").matches){
                if( 220 <= newValuePercent){
                    $newValue.classList.add('active');     
                }
            }  
            
        }
    `,
    `
    let icIndex = 1;
         const randomIconFunc =()=>{
            icrandom.attr('src',img/meunicon0{icIndex}.svg)
            icIndex++;
            if(icIndex == 13){
                icIndex = 1;
            }
         }
         window.onload =  setInterval(randomIconFunc,800);
    `,
    `
        const slideRight = function(e){
            x += 100;
            $slideWrap.animate({left:-x%});
            $prevBtn.css('z-index','1')
            $slideTxtNum.text('sssss');
            if(x == 0){
                $slideTxt.text('제공된 리픽박스에 넣을 소재들을 모아보세요');
                $slideTxtNum.text('1');
            }else if(x == 100){
                $slideTxt.text('수거박스의 컬러 칸과 눈금들을 확인하고 정해진 양 만큼 소재들을 모아주세요.');
                $slideTxtNum.text('2');
            }else if(x == 200){
                $slideTxt.text('프로젝트에 제시된 가이드에 맞추어 소재를 정리해 넣어주세요.')
                $slideTxtNum.text('3');
            }else if(x == 300){
                $slideTxt.text('이제 소재를 담은 리픽박스는 저희가 수거해 갈게요!')
                $slideTxtNum.text('4');
                $nextBtn.css('z-index','-1')
            }
        }
    `,
]
const codeSrc = [fritzCodeSrc ,tamCodeSrc ,spotiCodeSrc,hmgCodeSrc ,repickCodeSrc]

//mobile
const mfritzSrc = [
    './asset/img/mobile/fritz_main.gif',
    './asset/img/mobile/fritz_product.gif',
    './asset/img/mobile/fritz_custom.gif',
    './asset/img/mobile/fritz_wishAdd.gif',
    './asset/img/mobile/fritz_living.gif',
    './asset/img/mobile/fritz_designer.gif',
    './asset/img/mobile/fritz_history.gif'
]
const mtamSrc = [
    './asset/img/mobile/tamburins_main.gif',
    './asset/img/mobile/tamburins_gsap.gif',
    './asset/img/mobile/tamburins_swiper.gif'
]
const mspotiSrc = [
    './asset/img/mobile/spotfy_getJson.gif'
]
const mhmgSrc = [
    './asset/img/mobile/hmg_swiper.gif',
    './asset/img/mobile/hmg_m_code.gif'
]
const mrepickSrc = [
    './asset/img/mobile/repick_scroll.gif',
    './asset/img/mobile/repick_click.gif',
    './asset/img/mobile/repick_slide.gif'
]
const mImgSrc = [mfritzSrc ,mtamSrc ,mspotiSrc,mhmgSrc ,mrepickSrc]