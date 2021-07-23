let price = document.querySelector("input[name='bill']");
let numbers = document.querySelector("input[name='numbers']");
let tips = document.querySelectorAll("input[name='tip']");
let dispTip = document.querySelector(".tip-amount .disp-amount");
let dispTotal = document.querySelector(".total-amount .disp-amount");
let resetbtn = document.querySelector(".reset");

let bill = 0;
let people = 1;
let tip = 0;

let prevtp=null;
price.addEventListener("input",()=>{
    bill = parseFloat(price.value);
    display(bill,tip,people);
});

numbers.addEventListener("input",()=>{
    people = parseFloat(numbers.value);
    display(bill,tip,people);
});

for(let tp of tips){
    if(tp.placeholder){
        tp.addEventListener("input",()=>{
            tip = parseFloat(tp.value);
            display(bill,tip,people);
        });
    }else{

        tp.addEventListener("click",()=>{
            
            if(prevtp){
                prevtp.classList.remove("selectedtip");
                console.log("prev");
                console.log(prevtp.classList);
            }
            tp.classList.add("selectedtip");
            tip = parseFloat(tp.value.substring(0,tp.value.length));
            prevtp=tp;
            console.log("current");
            console.log(tp.classList);
            display(bill,tip,people);
        });
    }   
}

resetbtn.addEventListener("click",()=>{
    price.value="";
    numbers.value=1;
    for(let tp of tips){
        if(tp.placeholder){
            tp.value="";
        }
        tp.classList.remove("selectedtip");   
    }
    display(0,0,1);
});

function display(bill,tip,people){
if(!isNaN(bill) && !isNaN(tip) && !isNaN(people)){
    if(people===0){
        console.log("cant be 0");
    }else{
        let tipAmount = ((tip/100)*bill)/people;
        let totalAmount = ((tip/100)*bill+bill)/people;
        dispTip.innerHTML = "$"+Math.round(tipAmount*10)/10;
        dispTotal.innerHTML = "$"+Math.round(totalAmount*10)/10;
        // console.log(Math.round(tipAmount*100)/100);
        // console.log(Math.round(totalAmount*100)/100);
    }
}
}