function HouseKeeping(name,age,languages) {
    this.name=name;
    this.age=this.age;
    this.languages=this.languages
    this.clean=function(){
        alert('clean in progress')
    }
    
}
person=new HouseKeeping('h',12,['en','ar'])

person.clean()
// function play(){
// var x=Math.floor(Math.random()*6+1)
// var y=Math.floor(Math.random()*6+1)

// dice1='images/dice'+x+'.png'
// dice2='images/dice'+y+'.png'

// document.querySelector('.player1').setAttribute('src',dice1)
// document.querySelector('.player2').setAttribute('src',dice2)

// if (x>y){
//     document.querySelector('h1').textContent = 'player1 won';
// }
// else if (y>x){
//     document.querySelector('h1').textContent = 'player2 won';

    
// }else{
//     document.querySelector('h1').textContent = "it's a tie";
// }
// };
// element=document.querySelector('.play').addEventListener('click',play);
