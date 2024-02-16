// document.addEventListener("DOMContentLoaded",function(){
//     const faqContainer=document.querySelector('.faq-content');
//     faqContainer.addEventListener('click',(e)=>{
//         const question=e.target.closest('.question');
//         if(!question)return;

//         const content=question.parentElement;
//         const answer=content.querySelector('.answer');
        
//         const icon=question.querySelector('.icon')
        
//         answer.classList.toggle('open');
//         const isOpen=answer.classList.contains('open');
        
//         if(!isOpen){
//             answer.classList.toggle('open');
//             icon.src="./assets/images/icon-plus.svg";
//         }else{
//             icon.src="./assets/images/icon-minus.svg";
//         }
        
//     });
// });
document.addEventListener('DOMContentLoaded', function(){
    const items=document.querySelectorAll('.content');

    items.forEach(item=>{
        const question=item.querySelector('.question');
        const icon=question.querySelector('.icon');

        question.addEventListener('click',()=>{
            const isOpen=item.classList.contains('active');

            items.forEach(item=>{
                item.classList.remove('active');
                item.querySelector('.answer').classList.remove('open');
                item.querySelector('.icon').src="./assets/images/icon-plus.svg";
            });
            if(!isOpen){
                item.classList.add('active');
                item.querySelector('.answer').classList.toggle('open');
                icon.src="./assets/images/icon-minus.svg"
            }

        });

    });

});