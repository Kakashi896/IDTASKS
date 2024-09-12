function startHacking() {
    const box = document.getElementById('boxElement');
    box.style.display = 'block'; 
    
    setTimeout(() => {
        document.getElementById("p1").textContent = "Hacking wifi.....Please wait......";
    }, 1000);
    setTimeout(() => {
        document.getElementById("p2").textContent = "Fetching Username and Password 🤐.....Please wait......";
    }, 4000);
    setTimeout(() => {
        document.getElementById("p3").textContent = "Now Getting your Insta pass 😏 .....Please wait......";
    }, 8000);
    setTimeout(() => {
        document.getElementById("p4").textContent = "If you leave you will be fully hacked 😶.....Please wait......";
    }, 12000);
    setTimeout(() => {
        document.getElementById("p5").textContent = "Now at this stage you have to wait buddy 😊.....Please wait.....";
    }, 16000);
    setTimeout(() => {
        document.getElementById("p6").textContent = "Now Getting your Facebook pass 😗.....Please wait.....";
    }, 20000);
    setTimeout(() => {
        document.getElementById("p7").textContent = "Now Getting access to your gallery 😎.....Please wait.....";
    }, 24000);
    setTimeout(() => {
        document.getElementById("p8").textContent = "Lol It's a joke 😂😂.....You can go now 🤣🤣 ......and don't worry 😄😄.....";
    }, 28000);

    setInterval(toggleBox, 500);
}

function toggleBox() {
    const box = document.getElementById('boxElement');
    box.classList.toggle('boxchange');
}
