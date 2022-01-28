window.addEventListener('scroll', function(){
    console.log(window.scrollY)
    document.getElementById("mytext").value = scrollY;
});
