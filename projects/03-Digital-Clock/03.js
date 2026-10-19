const clock = document.getElementById('clock');
// document.querySelector('#clock') ---- both ways are ok

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);