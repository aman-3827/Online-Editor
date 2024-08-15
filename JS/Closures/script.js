const myname = document.getElementById("my-name");
const btn = document.getElementById("mybutton");

function maketextsizer(size){
    function changesize(){
        myname.style.fontSize = `${size}px`;
    }

    return changesize;
}

const size12 = maketextsizer(12);
const size14 = maketextsizer(14);
const size16 = maketextsizer(16);
const size18 = maketextsizer(18);
const size20 = maketextsizer(20);


btn.addEventListener('click',size20 )