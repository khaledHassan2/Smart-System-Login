
var formSingin  =document.querySelector('.formSingin');
var formSignUp  =document.querySelector('.formSignUp');
function displaynone(){
    formSingin.classList.toggle('d-none');
    formSignUp.classList.toggle('d-none');
    }
    
    var ankerin =document.querySelector('.formSingin h2 a');
    ankerin.addEventListener('click',function(eventIfo){
        eventIfo.preventDefault();
        displaynone()
        })


    var formWelcome =document.querySelector('.formWelcome');
    var btnSingIn =document.querySelector('.formSingin .btnSingIn');
 btnSingIn.addEventListener('click',function(eventIfo){
    
    eventIfo.preventDefault();
    formWelcome.classList.toggle('d-none');
    formSingin.classList.toggle('d-none');
    
    })
    //============================================= sing UP===================================================
    //============================================= sing UP===================================================

var formSignUp =document.querySelector('.formSignUp');
var ankerup =document.querySelector('.formSignUp h2 a');
    ankerup.addEventListener('click',function(eventIfo){
         eventIfo.preventDefault();
       displaynone()
        
    })


var singUPlist =[{Name: "", Email: "", Pass: ""}];
if(localStorage.getItem('singUP')!=null)
    {
        singUPlist=JSON.parse(localStorage.getItem('singUP'))
    }
   

        var btnSingUp     =document.getElementById('btnSingUp');
        var inSingUpName  =document.getElementById("inSingUpName");
        var inSingUPEmali =document.getElementById("inSingUPEmali");
        var inSingUpPass  =document.getElementById("inSingUpPass");
        
btnSingUp.addEventListener('click', function(eventInfo){
    Sing = {
        Name:inSingUpName.value,
        Email:inSingUPEmali.value,
        Pass:inSingUpPass.value,
        }
    console.log('welcomeeeeee');
    eventInfo.preventDefault();
    for(var i= 0 ; i<singUPlist.length ; i++){
        if(singUPlist[i].Email == inSingUPEmali.value){
            
            console.log('true');
        //    return true;
         }
         else{
             console.log('false');
             singUPlist.push(Sing);
             localStorage.setItem('singUP',JSON.stringify(singUPlist));
            //  return false; 
     }
 }
})


