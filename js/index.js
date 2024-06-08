 var ankerin =document.querySelector('.formSingin h2 a');
 var ankerup =document.querySelector('.formSignUp h2 a');
 var btnin =document.querySelector('.formSingin button');

var formSingin =document.querySelector('.formSingin');
var formWelcome =document.querySelector('.formWelcome');

function displaynone(){
    formSingin.classList.toggle('d-none')
    formSignUp.classList.toggle('d-none')
}
ankerin.addEventListener('click',function(eventIfo){
     eventIfo.preventDefault();
     displaynone()
})
btnin.addEventListener('click',function(eventIfo){
    eventIfo.preventDefault();
    displaynone()
    
    })
    //============================================= sing UP===================================================
var inSingUpName  =document.getElementById("inSingUpName");
var inSingUPEmali =document.getElementById("inSingUPEmali");
var inSingUpPass  =document.getElementById("inSingUpPass");
var formSignUp =document.querySelector('.formSignUp');
var btnSingUp =document.getElementById('btnSingUp');


    ankerup.addEventListener('click',function(eventIfo){
         eventIfo.preventDefault();
       displaynone()
        
    })
var singUPlist =[];
    if(localStorage.getItem('singUP')!=null)
        {
            singUPlist=JSON.parse(localStorage.getItem('singUP'))
        }

btnSingUp.addEventListener('click', function(eventInfo){
       
    console.log('welcomeeeeee');
    eventInfo.preventDefault();
    addUser();

        })

function addUser(){
    Sing = {
        Name:inSingUpName.value,
        Email:inSingUPEmali.value,
        Pass:inSingUpPass.value,
        }
        singUPlist.push(Sing);
        shickSingUp();
        console.log(singUPlist);
//    displayone()
}
 function shickSingUp(){
    for(var i= 0 ; i<singUPlist.length ; i++){
        if(singUPlist[i].Email == inSingUPEmali.value){
            
            console.log('true')
            
            }
            else{
                console.log('false')
                localStorage.setItem('singUP',JSON.stringify(singUPlist));
           
        }
    }
    console.log('shicksingUP');
}