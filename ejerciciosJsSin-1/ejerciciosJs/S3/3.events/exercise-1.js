function getInfo(event){
    console.log(event);
}

let buttom = document.getElementById('btnToClick');

buttom.addEventListener("click", getInfo);