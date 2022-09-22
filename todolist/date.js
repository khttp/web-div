module.exports.getDate=()=>{

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const current=new Date();

return current.toLocaleDateString('en-eg',options);

}
