
// which button is clecked 

for (let i of document.getElementsByClassName('drum')){
    
    
    i.addEventListener('click',()=>{
        
        makeSound(i.innerText)
        addAnimation(i.innerText)
    })
}

// which key has been pressed  

document.addEventListener('keypress', (event)=>{
    makeSound(event.key)
    addAnimation(event.key)
    })

// take an event whether it is a key press or a cleck ,then making the action 
function makeSound(event){
    switch(event){
            case 'w':
            
            play1=new Audio('sounds/kick-bass.mp3');
                play1.play();
                    break;
            case 'a':
                play1=new Audio('sounds/crash.mp3');
                play1.play();
                    break;
            case 's':
                play1=new Audio('sounds/tom-4.mp3')
                play1.play();
                    break;

            case 'd':
                play1=new Audio('sounds/snare.mp3')
                play1.play();
                    break;
            case 'j':
                play1=new Audio('sounds/tom-1.mp3')
                play1.play();
                    break;
            case 'k':
                play1=new Audio('sounds/tom-2.mp3')
                play1.play();
                    break;
            case 'l':
                play1=new Audio('sounds/tom-3.mp3')
                play1.play();
                    break;
        }
        
    }
    function addAnimation(event){
        let action =document.querySelector('.'+event);
        action.classList.add('pressed');
        setTimeout(()=>{
              action.classList.remove('pressed')
        },200)
       
        
    }
 


