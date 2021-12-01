btn = document.getElementById('btn');
// main2 = document.getElementById('main2');
content = document.querySelector('.content')
btn2 = document.getElementById('btn2');

btn.addEventListener('click',function () {
    content.classList.add("content3")
})

btn2.addEventListener('click',function () {
    content.classList.remove("content3")
})