//справочник жанров

getRoom: function(){
    const roomName = rooms.find(
        //el содержит текущий элемент перебираемого массива genres
        function(el){
            //если условие выполняетсяБ то возвращается проверяемый элемент
            return el.id == roomName;
        }
    ).name;
    const countRoomPlace = rooms.find(
        //el содержит текущий элемент перебираемого массива genres
        function(el){
            //если условие выполняется, то возвращается проверяемый элемент
            return el.id == room;
        }
    )
}

//Билеты на фильмы
let ticket = [];

//получаем DOM элемент с таблицей
let tableDOM = document.getElementById("filmsHire");

for (let i = 0; i < filmsHire.length; i++) {
    let currentFilm = filmsHire[i]
}