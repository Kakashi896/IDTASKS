function updateclock() {
    let a = new Date();
    let b = a.getMonth();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();

    // document.write(h , m, s, d)
    document.getElementById('time').innerHTML = "Time: " + h + ":" + m + ":" + s + " | Date: " + d + "/" + (b + 1) + "/" + a.getFullYear();


}

setInterval(updateclock, 1000);

updateclock();


setInterval(async function () {
    document.querySelector("#body").classList.toggle("bodychange");
}, 1000)
