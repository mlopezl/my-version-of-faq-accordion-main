const accordionTitles = document.querySelectorAll('.accordion__element__title');

function toggleHides(clickedElement){
    accordionTitles.forEach(element => {
        const titles = element.children;
        if (element !== clickedElement && titles[1].classList.contains('hide')){
            element.children[1].classList.toggle('hide');
            element.children[2].classList.toggle('hide');
            element.nextElementSibling.classList.toggle('hide');
        }
 });
} 

accordionTitles.forEach(element => {
    element.addEventListener('click', (event) =>{
        const titleElements = event.target.closest('div').children;
        const clickedElement = event.target.closest('div');
        titleElements[1].classList.toggle('hide');
        titleElements[2].classList.toggle('hide');
        clickedElement.nextElementSibling.classList.toggle('hide');
        toggleHides(clickedElement);
    });
});
