//Для формы подарка, блок 4
//Получаем ссылки на объекты в константы:
const closePopapButton = document.getElementById('popap_close');
const popap = document.getElementById('popap');
const openPopapButton = document.getElementById('popap_open');

//Обработчик клика на закрытие модального окна
closePopapButton.onclick = function(event){
    event.preventDefault();
    //Добавляем класс hidden, чтобы по нажатию на крестик, скрывать окно
    popap.classList.add('hidden');
}

//Обработчик клика на кнопке "Получить подарок" 
openPopapButton.onclick = function(event){
    event.preventDefault();
    //При нажатии удаляем класс hidden у модального окна
    popap.classList.remove('hidden');
}
