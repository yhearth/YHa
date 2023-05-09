const fritzCodeSrc = [
    `
    function  mainVisualSlide(){

        for(let i = 0; i &lt; visualImg.length; i++){
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
    //필터 기능
     for(let c = 0; c &lt; pdCheckLi.length; c++){
        pdFillIdx.innerText = pdItemIdx;
        pdCheckLi[c].addEventListener('click',function(){
      
            if(!pdCheckLi[c].classList.contains('checked')){
                pdCheckLi[c].classList.add('checked');

                //1. 선택된 제품의 getAttribute('for')값을 변수로 배열화 시킨다 

                let chxLabel = pdCheckLi[c].nextElementSibling;
                let chxName =  chxLabel.getAttribute('for');
                checkArr.push(chxName);

                for(let i = 0; i &lt; pdItemFig.length; i++){
                    let itemLi = pdItemFig[i].parentElement.parentElement;
                    let itemSpan = pdItemFig[i].children; 
                    let itemTit = itemSpan[0].className;
                    let itemSub = itemSpan[1].textContent;
    
                    itemLi.classList.add(dNone);
                    itemLi.classList.remove('active');

                //2.filter() 함수로 선택된 제품와 같은 이름이 있을경우 보이도록 필터링 시켜준다

                    checkArr.filter(function(n){
                        if(n === itemTit){
                            itemLi.classList.remove(dNone);
                            itemLi.classList.add('active');
                            return n == itemTit; 
                        }
                    }); 
                }
                let viewitemIdx = document.querySelectorAll('.pd_list .active')
                pdItemIdx = viewitemIdx.length
                pdFillIdx.innerText = pdItemIdx
                
                //3. 필터링된 제품들의 갯수를 보이도록 해준다
    
            }else if(pdCheckLi[c].classList.contains('checked')){
                pdCheckLi[c].classList.remove('checked');
    
                let chxLabel = pdCheckLi[c].nextElementSibling;
                let chxName =  chxLabel.getAttribute('for');/
    
                //4.splice() 메서드를 사용해 체크가 안된 제품을 빼준다

                for(let x = 0; x &lt; checkArr.length; x++){
                    if(checkArr[x] == chxName ){
                        checkArr.splice(x,1);
                        x--;   
                    } 
                }
                for(let i = 0; i &lt; pdItemFig.length; i++){
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
                        itemLi.classList.remove(dNone);
                        itemLi.classList.add('active');
                    }
                }
                let viewitemIdx = document.querySelectorAll('.pd_list .active')
                pdItemIdx = viewitemIdx.length
                pdFillIdx.innerText = pdItemIdx
            }
        })
    }
    //반응형 갤러리 리스트 
    pdRangeInput.addEventListener('change',function(){
        document.documentElement.style.setProperty('--minRangeValue',{this.value}vw)
    })

    `,
    `
    function shellOptionClick(){

        for(let s = 0; s &lt; shellBox.length; s++){
            shellBox[s].addEventListener('click',()=>{
                //1.선택된 커스텀 정보를 변수로 넣어준다
                shellIdx = s;
                let shellCus = shellBox[s].querySelector('span');
                shellName = shellCus.textContent;
    
                for(let x = 0; x &lt; shellBox.length; x++){
                    let shellImg = shellBox[x].querySelector('img');
                    shellImg.style.border=0;
                    shellImg.style.boxShadow = '#000 0px 0px 0px ';
                    shellImg.style.padding=0;
                }
                let shellImg = shellBox[s].querySelector('img');
                shellImg.style.border='1px solid #ccc';
                shellImg.style.boxShadow = '#00000070 1px 6px 10px';
                shellImg.style.padding='2px';
                shellImg.style.transition = '.5s ease';
                
                //1.선택되 변수값을 배열에 넣어줘서 변경시켜준다

                shellImgBox.setAttribute('src',shellImgSrc[s]);
                shellSideImg.setAttribute('src',shellSideSrc[s]);
                shellLeftImg.setAttribute('src',shellLeftSrc[s]);기
                shellRightImg.setAttribute('src',shellRightSrc[s]);
                
            })
        }
    }
    `,
    `
    // wish item add
        function wishListAdd (){
            wishPgtxt.style.display = 'none'
            let customName = saveName.value;
            let target;

            //1.위시리스트에 추가된 이름을 변수로 만든다
            if(shellName == undefined){
            let shellCus = shellBox[7].querySelector('span');
            shellName = shellCus.textContent;
            }
            if(baseName == undefined){
                let baseCus = baseBox[0].querySelector('span');
                baseName = baseCus.textContent;
            }
            //2.커스텀 이름 , 정보를 innerHTML 이용해 넣어준다
                wishPgGp.innerHTML += 
                    &lt;div class="wish_wrap"> 
                    &lt;div class="wish_box">
                    &lt;div class="pd_box">
                            &lt;div class="custom_box shell">&lt;img src="{shellImgSrc[shellIdx]}" alt="" >&lt;/div>
                            &lt;div class="custom_box base">&lt;img src="{baseImgSrc[baseIdx]}" alt="">&lt;/div>
                        &lt;/div>
                        &lt;div class="edit_box">
                            &lt;div class="name">{customName}&lt;/div>
                            &lt;div class="custom">
                            &lt;div class="shell">
                                    &lt;span>Shell&lt;/span>
                                    &lt;strong>{shellName}&lt;/strong>
                                &lt;/div>
                                &lt;div class="base">
                                    &lt;span>Base&lt;/span>
                                    &lt;strong>{baseName}&lt;/strong>
                                    &lt;/div>
                                    &lt;/div>
                        &lt;/div>
                        &lt;div class="buy">BUY&lt;/div>
                    &lt;/div>
                    &lt;div class="delate_box">&lt;/div>
                    &lt;/div>
                listDelate(); 
}
           //3.위시리스트를 삭제할경우 remove()을 이용해 없애준다
            function  listDelate(){
                delateBtn = document.querySelectorAll('.delate_box');

                for(let d = 0; d &lt; delateBtn.length; d++){
                    delateBtn[d].addEventListener('click',(e)=>{

                        let removeItem = e.target.parentElement;
                        removeItem.remove();

                        wishIdx--;
                        wishIdxSpan.innerText = wishIdx;

                        if(wishIdx == 0){
                            wishPgtxt.style.display = 'block'
                            wishIdxSpan.style.display = 'none'
                        }
                
                    })

                
                }

            }
    `,
]
const tamCodeSrc = [
    `
    //이미지 지점에 왔을때 scale ,opacity 애니메이션 
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
       //이미지 슬라이드 구현
        swiper = new Swiper(".sc_collection .mySwiper", {
            slidesPerView: 1,
            centeredSlides: 40,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
                },
            // breakpoints를 이용한 반응형 슬라이드
            breakpoints: {
                767: {slidesPerView: 2,},
                1024: {slidesPerView: 3,},
                1440: { slidesPerView: 4,},
            },
        });
        // renderBullet를 이용한 슬라이드 pagination 디자인 변경
        var swiper = new Swiper(".category_area .mySwiper", {
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '&lt; span class="' + className + '">' + '&lt;img src = "./asset/img/cate/cate_icon_' +(index+1) + '.png" alt="">'+"&lt;/span>";
            }
            ,
            },
        });
    `,
    `
    //swiper를 이용한 슬라이드 
        swiper = new Swiper(".sc_collection .mySwiper", {
            slidesPerView: 1,
            centeredSlides: 40,
            spaceBetween: 30,
            // grabCursor: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
                },
            //반응형 슬라이드 
            breakpoints: {
                767: {  slidesPerView: 2,},
                1024: { slidesPerView: 3,},
                1440: {  slidesPerView: 4,},
                },
        });

        //슬라이드 mouseover ,mouseout 이벤트 할시 인터렉션 구현
        $perfumeSlid.mouseover(function(e){
            $(this).addClass('on');
            $(this).find('img.v2_img').stop().animate({opacity : '1'},500);
        })
        $perfumeSlid.mouseout(function(e){
            $(this).removeClass('on')
            $(this).find('img.v2_img').stop().animate({opacity : '0'},500);
            
        })
    `,
    `
    //마우스를 따라다니도록 e.clientX,e.clientY로 위치값 넣어주기
    $('body').mousemove(function(e){
        xVal = e.clientX - 25;
        yVal = e.clientY - 25;
        console.log()
        gsap.to('.cursor',{
            x:xVal,y:yVal
        })
    })
    //mouseover ,mouseout를 이용해 마우스 애니메이션 구현
    $keyword.mouseover(function(){
        $('.cursor div').text('');
        gsap.to(".cursor",{
           border :"1px solid rgb(190, 219, 170)",
           scale:2,
        })
    })
    $keyword.mouseout(function(){
        gsap.to(".cursor",{
           scale:0,
        })
    })
     $keywordGp.mouseover(function(e){
        $(this).addClass('on').siblings().removeClass('on');

     })

    `
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
    //이미지 슬라이드 숫자 변경
        var slideCnt = $('.visual-area .swiper-slide').lenght;
        $('.state-bar .num').text(1);
        $('.state-bar .all-num').text(slideCnt);
        visualSlide.on('slideChange',function(){
            curr = visualSlide.realIndex + 1 ;
            $('.state-bar .num').text(curr);
        })
    //이미지 슬라이드 버튼 조작
    $('.visual-area .btns').click(function(e){
        e.preventDefault();
        if($(this).find('.stop').hasClass('on')){
            $(this).find('.play').addClass('on').siblings().removeClass('on')
            visualSlide.autoplay.stop();
        }else{
            $(this).find('.stop').addClass('on').siblings().removeClass('on')
            visualSlide.autoplay.start();
        }
    })
    `,
    `
    //about gsap 애니메이션
    gsap.utils.toArray('.title-box').forEach(el => {
        target = $(el).find('*');
        gsap.from(target,0.7,{
            scrollTrigger:{
                trigger:el,
                start:"top 80%",
            },
            opacity:0,
            y:100,
            stagger:0.05,
        })
    });
    //
    //반응형에 따른 gsap 조작
    ScrollTrigger.matchMedia({
        "(max-width : 1024px)": function(){
            gsap.set($('.pls-item'),{
                y:0
            });
        },
        "(min-width : 1024px)": function(){
            gsap.fromTo(plsItemTarget,0.4,{
                y:800,
            },{
                scrollTrigger:{
                    trigger:'.pleasure-area ul',
                    start:'top center',
                },
                y:0,
                stagger:0.2,
                delay:0.3,
            });
        }
    })
    `
]
const repickCodeSrc = [
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
]
const mtamSrc = [
    './asset/img/mobile/tamburins_gsap.gif',
    './asset/img/mobile/tamburins_swiper.gif'
]
const mspotiSrc = [
    './asset/img/mobile/spotfy_getJson.gif'
]
const mhmgSrc = [
    './asset/img/mobile/hmg_swiper.gif',
    './asset/img/mobile/hmg_gsap.gif',
]
const mrepickSrc = [
    './asset/img/mobile/repick_slide.gif'
]
const mImgSrc = [mfritzSrc ,mtamSrc ,mspotiSrc,mhmgSrc ,mrepickSrc]
