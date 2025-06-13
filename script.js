const yesButton1 = document.getElementById('yes1');
const noButton1 = document.getElementById('no1');

const yesButton2 = document.getElementById('yes2');
const noButton2 = document.getElementById('no2');

const yesButton3 = document.getElementById('yes3');

noButton1.onclick = yesBigger;
noButton2.onclick = yesLarger;

if(yesButton1) {
    yesButton1.onclick = thankYou;
}
if(yesButton2) {
    yesButton2.onclick = thankYou;
}
if(yesButton3) {
    yesButton3.onclick = thankYou;
}
function yesBigger() {
    let page1 = document.getElementById('div1');
    page1.style.display = "none";

    let page2 = document.getElementById('div2');
    page2.style.display = "block";
}

function yesLarger() {
    let page2 = document.getElementById('div2');
    page2.style.display = "none";

    let page3 = document.getElementById('div3');
    page3.style.display = "block";
}

function thankYou() {
    let page1 = document.getElementById('div1');
    page1.style.display = "none";

    let page2 = document.getElementById('div2');
    page2.style.display = "none";

    let page3 = document.getElementById('div3');
    page3.style.display = "none";

    let endPage = document.getElementById('thankyou');
    endPage.style.display = "block";
}