//hier is code oog passwoord
function handleFloatingLabel() {
    const label = document.querySelectorAll('.c-label');
    const input = document.querySelectorAll('.c-input');
    for(let i = 0; i < input.length; i++){
        input[i].onblur = function(){
            if(input[i].value != ""){
                label[i].classList.add("c-label-floating");
                label[i].classList.remove("c-label");
            }
            else{
                label[i].classList.remove("c-label-floating");
                label[i].classList.add("c-label");
            }
    }
    }
}
   
    const handlePasswordSwitcher = function(){
        const passwordinput = document.querySelector('.js-password-input');
        const passwordtoggle = document.querySelector('.js-password-toggle');
        if(!passwordinput || !passwordtoggle){
            console.error('De classes werden niet gevonden');
            return;
        }
        passwordtoggle.addEventListener('change', function(){
            if(passwordinput.type == 'password'){
                passwordinput.type = 'text';
            }
            else{
                passwordtoggle.type = 'password';
            }
        })
    }

document.addEventListener('DOMContentLoaded', function () {
    handleFloatingLabel();
    handlePasswordSwitcher();
    buttonrotate();
});
//hier eindigt de passwoord code

//button like

function buttonrotate(){
    const likebutton = document.getElementsByClassName('c-like__symbol');
    likebutton[0].addEventListener('click', function(){ 
        likebutton[0].classList.add("rotate");
    });
   

}



