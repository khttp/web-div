// main variables
let progress=1;
let playerPattern=[];
let game;
let colorset = {1:"yellow",2:"green",3:"red",4:"blue"}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



// generate a random pattern for the user to repeat
generatePattern=function() {
let pattern=Array.from({length:progress},()=>
    Math.floor(Math.random()*4+1)   
)
const dosomething=async()=>{
for (let color of pattern){
    console.log(colorset[color])

    
        tune=new Audio('sounds/'+colorset[color]+'.mp3')
        tune.play();
       $('.'+color).addClass('click')

       await sleep(500)

       $('.'+color).removeClass('click')
       await sleep(500)
    
    }
}
dosomething();
 return pattern;
}


// store player pattern and play the sound
storePattern=function(){
  
    let colorAndNumber=this.className.split(' ');
    
    //sound of a button
    tune=new Audio('sounds/'+colorAndNumber[0]+'.mp3')
    tune.play();

    console.log(colorAndNumber[1])
    playerPattern.push(colorAndNumber[1])
    console.log(playerPattern) 
    if (playerPattern.length>=progress){
        $('button').prop('disabled',true)
        
    }
    if ($('button').prop('disabled')){
        
        if (playerPattern.every((val, index) => val == pattern[index])){
            level(true);
        }
        else{
            level(false);

        }
    }     
}



//change the level
level=function(game){
    
    if (game=== true){
        progress+=1;
        $('h1').text('level '+progress+'!');
        $('button').prop('disabled',false);
        main();
        
    }
    else{
       progress-=1; 
        $('h1').html('you lost </br>your level is '+progress+'!')
    }

}


function main(){

    playerPattern=[]
    pattern=generatePattern();
    document.querySelectorAll('button').forEach(e =>{
        e.addEventListener('click' , storePattern)
})

}

main();



