let Toggle = document.getElementById('Toggle');
let List = document.querySelector('.list');
Toggle.addEventListener('click',function() {
    console.log(1);
    List.classList.toggle('active');
})