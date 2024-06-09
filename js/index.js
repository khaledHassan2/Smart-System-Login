
var formSingin  =document.querySelector('.formSingin');
var formSignUp  =document.querySelector('.formSignUp');
function displaynone(){
    formSingin.classList.toggle('d-none');
    formSignUp.classList.toggle('d-none');
    }
    function clearForm(){
        inSingUpName.value =null;
        inSingUPEmali.value=null;
        inSingUpPass.value =null;
        inSingInEmali.value =null;
        inSingInPass.value =null;
    
    }


    //============================================= sing UP===================================================
  

var formSignUp =document.querySelector('.formSignUp');
var ankerup =document.querySelector('.formSignUp h2 a');
    ankerup.addEventListener('click',function(eventIfo){
         eventIfo.preventDefault();
       displaynone()
        
    })


var singUPlist =[];
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

    var exists  =document.querySelector('.formSignUp .exists');
    var success  =document.querySelector('.formSignUp .success');
    for(var i= 0 ; i<singUPlist.length ; i++){
        if(singUPlist[i].Email == inSingUPEmali.value){
            
            console.log('true');
            exists.classList.remove('d-none');
            success.classList.add('d-none');
            clearForm()
            
            return;
            }
                }
            success.classList.remove('d-none');
            exists.classList.add('d-none');
             console.log('false');
             singUPlist.push(Sing);
             localStorage.setItem('singUP',JSON.stringify(singUPlist));
             clearForm()
})

//============================================= sing in===================================================

var ankerin =document.querySelector('.formSingin h2 a');
ankerin.addEventListener('click',function(eventIfo){
    eventIfo.preventDefault();
    displaynone()
    })

var formWelcome =document.querySelector('.formWelcome');
var btnSingIn =document.querySelector('.formSingin .btnSingIn');
var incorrect  =document.querySelector('.formSingin .incorrect');
var inSingInEmali =document.getElementById("inSingInEmali");
var inSingInPass  =document.getElementById("inSingInPass");
btnSingIn.addEventListener('click',function(eventIfo){
    eventIfo.preventDefault();
    validation();
    if(validation()==true){
        addUser();
    }
    clearForm();
    })
function addUser(){
    for(var i= 0 ; i<singUPlist.length ; i++){
        if(singUPlist[i].Email == inSingInEmali.value && singUPlist[i].Pass ==inSingInPass.value){
            
            formWelcome.classList.toggle('d-none');
            formSingin.classList.toggle('d-none');;
            formWelcome.innerHTML=`
            <div class="p-5 shadow text-center position-relative">
               <h1 class="m-5">welcome ${singUPlist[i].Name}</h1>
               <a href="index.html" class="logout btn btn-outline-warning">Log out</a>
            </div>`;
            
            return;
            }
                }
                incorrect.classList.remove('d-none');
               

    
}
inSingInEmali.addEventListener('input',function(eventIfo){
    validation();

})

function validation(){
    
       var vald=/^[a-z]/;
       if(vald.test(inSingInEmali.value)){
        inSingInEmali.classList.add('is-valid');
        inSingInEmali.classList.remove('is-invalid');
        return true;
       }
       else{
        inSingInEmali.classList.remove('is-valid');
        inSingInEmali.classList.add('is-invalid');
       }

}