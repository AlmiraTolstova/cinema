const closePopapButton = document.getElementById('popap_close');
const popap = document.getElementById('popap');
const openPopapButton = document.getElementById('popap_open');

closePopapButton.onclick = function(event){
    event.preventDefault();
    popap.classList.add('hidden');
}

openPopapButton.onclick = function(event){
    event.preventDefault();
    popap.classList.remove('hidden');
}

