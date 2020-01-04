// const imgHeight = document.getElementById('Work-A');
// console.log(imgHeight);
// const test3 = document.querySelector('.work-item')
// console.log(test3.clientHeight);
//
// const test4 = document.querySelectorAll('p')
// console.log(test4[0].innerHTML);

const imgHeight = document.getElementsByClassName('Work-A');
console.log(imgHeight[0].clientHeight);

const arr = Array.from(imgHeight);




function slideIn(){

    arr.map((power, i) => {
        console.log("I have powers of"+i+power);

        const slideimg = (window.scrollY + window.innerHeight) - power.clientHeight/2;

        const half = slideimg > power.offsetTop;

        if(half){
            power.classList.add("disapere");
        }
    });




}


// const slidiIn=()=>{
//
// }

window.addEventListener("scroll", slideIn);
