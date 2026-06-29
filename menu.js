let Toggle = document.getElementById('Toggle');
let List = document.querySelector('.list');
Toggle.addEventListener('click',function() {
    console.log(1);
    List.classList.toggle('active');
})
let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function(element){
    element.addEventListener('click',function(event){
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block:'start'
        })
    })
})