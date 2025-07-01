document.addEventListener("DOMContentLoaded" , ()=> {

    //상단메뉴(서브) 애니메이션
    const mainmenu = document.querySelectorAll('a.mainmenu');
    const multiEvent = ['mouseenter' , 'focus']
    multiEvent.forEach( i=> {
       mainmenu.forEach( j=> {
            //마우스갖다댄 메인메뉴
            j.addEventListener( i, e=> {

                //모든 서브메뉴 클래스(active) 제거한다.
                mainmenu.forEach( m=> {
                    m.nextElementSibling.classList.remove('active');
                    m.nextElementSibling.querySelectorAll('a').forEach( a=> a.classList.remove('active'));
                });

                //마우스를갖다댄 메인메뉴의 서브메뉴
                const sub =  e.currentTarget.nextElementSibling;               
                sub.classList.add('active');
                sub.querySelectorAll('a').forEach( (a,index) => {
                        setTimeout(()=> {
                            a.classList.add('active');
                        } , 200* index);
                });   
            });
       })    
    });

    //상단 오른쪽 (창업문의) 버튼    
    const topBtn = document.querySelector("header button#radio");
    topBtn.addEventListener('click' , ()=> {
        topBtn.classList.toggle('active');
        const b =  topBtn.querySelector('b');
        //console.log( b.textContent === '창업문의');
        b.textContent=   b.textContent==='창업문의'  ?  'BRAND' : '창업문의';
    });

    //모바일화면에서 상단오른쪽 햄버거 ▤ 아이콘을 누를때
    const menu = document.querySelector('header button#menu');
    const header_ul = document.querySelector('header ul');
    menu.addEventListener("click",()=>{
        menu.classList.toggle('active');
        header_ul.classList.toggle('active')
    });

    //모바일화면에서 메인메뉴 [ ^ ] 토글시키기
    mainmenu.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();

            const current = e.currentTarget;
            const submenu = current.nextElementSibling;
            
            current.classList.toggle('active');
            setTimeout(()=>{
              
                
                current.classList.contains('active') ? 
                submenu.classList.add('active') : submenu.classList.remove('active');
            }, 50);
            
        });
  });


    

});//js all finished;----------------------------------