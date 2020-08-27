const form=document.getElementById('form');
form.onsubmit=function(event){
    event.preventDefault();
    const name = document.getElementById('select');
    console.log(name);
}