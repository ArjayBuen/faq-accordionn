document.addEventListener("DOMContentLoaded",function(){
    const faqContainer=document.querySelector('.faq-content');
    faqContainer.addEventListener('click',(e)=>{
        const question=e.target.closest('.question');
        if(!question)return;

        const content=question.parentElement;
        const answer=content.querySelector('.answer');
        // const minus=question.querySelector('.icon-minus')
        // const plus=question.querySelector('.icon-plus')
        const icon=question.querySelector('img')
        
        answer.classList.toggle('open');
        // minus.style.display="none";
        // plus.style.display="block";
        icon.classList.toggle('.icon-minus');
        icon.classList.toggle('.icon-plus');
        
        // icon.src="./assets/images/icon-plus.svg";
    });
});