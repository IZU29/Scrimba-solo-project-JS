const Meter = 3.281
const Liter = 0.264
const Kilogram = 2.204
const list = ['meters','feet','liters','gallons','kilos','pounds']
const Length = document.getElementById('one')
const Volume = document.getElementById('two')
const Mass = document.getElementById('three')
const Convert = document.getElementById('convert')
let Input = document.getElementById('input-i') 
     Convert.addEventListener("click", function(){
    length()
    volume()
    mass()
    Input.value = ""
    })
    // function units(unit,){

    // }
    function length(){
       Length.innerHTML=`${Input.value} ${list[0]} = ${(Meter * Input.value).toFixed(2)} ${list[1]} | ${Input.value} ${list[1]} = ${(Input.value/Meter).toFixed(2)} ${list[0]}`
        // console.log(Input.value)// 
    }
    function volume(){
        Volume.innerHTML=`${Input.value}${list[2]} = ${(Liter * Input.value).toFixed(2)} ${list[3]} | ${Input.value} ${list[3]} = ${(Input.value/Liter).toFixed(2)} ${list[3]}`
         // console.log(Input.value)// 
     }
     function mass(){
       Mass.innerHTML=`${Input.value}${list[4]} = ${(Kilogram * Input.value).toFixed(2)} ${list[5]} | ${Input.value} ${list[5]} = ${(Input.value/Kilogram).toFixed(2)} ${list[4]}`
         // console.log(Input.value)// 
     }
    