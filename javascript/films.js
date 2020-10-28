$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#present_phone").mask("+7 (999) 999-99-99");
});
// ассоциативный массив жанров фильма
const Janres = {
    0: 'Боевик',
    1: 'Вестерн',
    2: 'Криминал',
    3: 'Детектив',
    4: 'Драма',
    5: 'Исторический фильм',
    6: 'Комедия',
    7: 'Мелодрама',
    8: 'Музыкальный фильм',
    9: 'Нуар',
    10: 'Триллер',
    11: 'Приключенческий фильм',
    12: 'Сказка',
    13: 'Трагедия',
    14: 'Трагикомедия',
    15: 'Мультфильм',
    16: 'Мюзикл',
    17: 'Семейный',
    18: 'Фантастика',
    19: 'Военный',
    20: 'Биография'

}

// Константа, которая содержит массив фильмов в прокате и новинки
const films = [
    {
        Time: '10:10',
        Name: 'Однажды в… Голливуде',
        id: ['4', '6'],
        href: 'https://www.kinopoisk.ru/film/1047883/',
        filmHire: false,
        filmNew: true,
        image: 'images/mov12.png',
        price: 200
        //image: 'https://st.kp.yandex.net/im/poster/3/4/1/kinopoisk.ru-Once-Upon-a-Time-in-Hollywood-3411483.jpg',

    },
    {
        Time: '12:10',
        Name: 'Голая правда',
        id: ['7', '6'],
        href: 'https://www.kinopoisk.ru/film/398239/',
        filmHire: true,
        filmNew: false,
        image: 'https://st.kp.yandex.net/im/poster/9/2/4/kinopoisk.ru-The-Ugly-Truth-924394.jpg',
        price: 250

    },
    {
        Time: '14:10',
        Name: 'Рок-н-рольщик',
        id: ['2', '1', '10'],
        href: 'https://www.kinopoisk.ru/film/378140/',
        filmHire: true,
        filmNew: false,
        image: 'https://st.kp.yandex.net/im/poster/7/8/1/kinopoisk.ru-RocknRolla-781092.jpg',
        price: 300

    },
    {
        Time: '16:10',
        Name: 'Джанго освобожденный',
        id: ['2', '1', '4', '6'],
        href: 'https://www.kinopoisk.ru/film/586397/',
        filmHire: true,
        filmNew: false,
        image: 'https://st.kp.yandex.net/im/poster/2/2/9/kinopoisk.ru-Django-Unchained-2295520.jpg',
        price: 400
    },
    {
        Time: '18:10',
        Name: 'Джентльмены',
        id: ['2', '1', '6'],
        href: 'https://www.kinopoisk.ru/film/1143242/',
        filmHire: false,
        filmNew: true,
        image: 'images/mov4.png',
        price: 350
        //image: 'https://st.kp.yandex.net/im/poster/3/4/5/kinopoisk.ru-The-Gentlemen-3451969.jpg'
    },
    {
        Time: '21:15',
        Name: 'Бойцовский клуб',
        id: ['2', '10', '4'],
        href: 'https://www.kinopoisk.ru/film/361/',
        filmHire: true,
        filmNew: false,
        image: 'https://st.kp.yandex.net/im/poster/1/8/0/kinopoisk.ru-Fight-Club-1801679.jpg',
        price: 370
    },
    {
        Time: '10:20',
        Name: 'Король Лев',
        id: ['15', '16', '17'],
        href: 'https://www.kinopoisk.ru/film/2360/',
        filmHire: true,
        filmNew: false,
        image: 'https://st.kp.yandex.net/im/poster/8/7/1/kinopoisk.ru-The-Lion-King-871467.jpg',
        price: 200
    },
    {
        Time: '21:15',
        Name: 'Большой куш',
        id: ['0', '2', '6'],
        href: 'https://www.kinopoisk.ru/film/526/',
        filmHire: false,
        filmNew: true,
        image: 'images/mov5.png',
        price: 250
        //image: 'https://st.kp.yandex.net/im/poster/1/4/4/kinopoisk.ru-Snatch-1442022.jpg'
    },
    {
        Time: '20:20',
        Name: 'Достучаться до небес',
        id: ['2', '4', '6'],
        href: 'https://www.kinopoisk.ru/film/32898/',
        filmHire: false,
        filmNew: true,
        image: 'images/mov6.png',
        price: 350
        //image: 'https://st.kp.yandex.net/im/poster/2/3/5/kinopoisk.ru-Knockin_27-on-Heaven_27s-Door-235277.jpg'
    },
    {
        Time: '11:25',
        Name: 'Начало',
        id: ['0', '18', '10', '4', '3'],
        href: 'https://www.kinopoisk.ru/film/447301/',
        filmHire: false,
        filmNew: true,
        image: 'images/mov7.png',
        price: 350
        //image: 'https://st.kp.yandex.net/im/poster/1/8/9/kinopoisk.ru-Inception-1896672.jpg'
    },
    {
        Time: '13:30',
        Name: 'В джазе только девушки',
        id: ['2', '6', '11'],
        href: 'https://www.kinopoisk.ru/film/356/',
        filmHire: false,
        filmNew: true,
        image: 'images/mov8.png',
        price: 277
        //image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/f9d40e34-f5b2-49ca-9fe0-bbdd3e43da3a/300x450'
    },
    {
        Time: '22:10',
        Name: 'Гран Торино',
        id: ['4'],
        href: 'https://www.kinopoisk.ru/film/408410/',
        filmHire: false,
        filmNew: true,
        image: 'images/mov9.png',
        price: 315
        //image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/fe294fb7-2b61-40e0-b646-00885edf7f06/300x450'
    },
    {
        Time: '14:40',
        Name: 'Спасти рядового Райана',
        id: ['4', '19'],
        href: 'https://www.kinopoisk.ru/film/371/',
        filmHire: false,
        filmNew: true,
        image: 'images/mov10.png',
        price: 350
        //image: 'https://st.kp.yandex.net/im/poster/1/9/5/kinopoisk.ru-Saving-Private-Ryan-1953013.jpg'
    },
    {
        Time: '20:20',
        Name: 'Зеленая книга',
        id: ['20', '4', '6'],
        href: 'https://www.kinopoisk.ru/film/1108577/',
        filmHire: false,
        filmNew: true,
        image: 'images/mov11.png',
        price: 250
        //image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/300x450'
    }

]

//--------------------объект Film----------------------//
class Film {
    //поля
    //для передачи  данных в поля класса извне используется конструктор
    constructor(Time, name, ganar, href, filmHier, filmNew, image, price) {
        this.time = Time;
        this.name = name;
        this.ganar = ganar;
        this.href = href;
        this.filmHier = filmHier;
        this.filmNew = filmNew;
        this.image = image;
        this.price = price;
    }
    //методы
    getName() {
        return this.name;
    }
    getStart() {
        return this.time;
    }
    getGanre() {
        if (this.ganar.length > 0) {
            let newJanre = '';
            for (let indexJanre = 0; indexJanre < this.ganar.length; indexJanre++) {
                newJanre += Janres[this.ganar[indexJanre]];
                if (indexJanre != this.ganar.length - 1) {
                    newJanre += ', ';
                }
            }
            return newJanre;
        }
    }
    getPrice() {
        return this.price;
    }

    //-----------в параметр numberStyleRow передается номер стиля для формирования
    //-----------стиля в виде: movi-list__table_tbody_tr1
    getRenderStringForSelectFilm(numberStyleRow, index) {
        let renderString = '';
        let filmRow = document.createElement('tr');
        filmRow.classList.add('movi-list__table_tbody_tr' + numberStyleRow);
        filmRow.classList.add('row-height');

        renderString += `<td class="vertical-align center">` + this.time + `</td>`;
        renderString += `<td class="vertical-align indent66"><a href="` + this.href + `" target="_blank">` + this.name + `</a></td>`;
        renderString += `<td class="vertical-align">` + this.getGanre() + `</td>`;
        renderString += `<td class="vertical-align center">` + this.price + `</td></tr>`;
        filmRow.innerHTML = renderString;

        let filmName = this.getName();
        let filmStart = this.getStart();
        let filmGanars = this.getGanre();
        let filmPrice = this.price;

        //вешаем обработчик события на строку, вызывающий модальное окно
        filmRow.onclick = function () {
            indexCurrentFilm = index;
            refreshCinemaPlaces(index);
            // 1. Находим элемент с формой заказ
            // 2. Изменить состояние из display: none -> display: block;
            // 3. Отобразить данные по бронированию фильма       
            orderForm.style.display = 'block';
            let orderTicketsPlace = document.getElementById('order-tickets__place');
            orderTicketsPlace.classList.remove('hidden');

            let orderFilmName = document.getElementById('orderFilmName'),
                orderFilmStart = document.getElementById('orderFilmStart'),
                orderFilmGanar = document.getElementById('orderFilmGanar'),
                orderFilmPrice = document.getElementById('orderFilmPrice');

            orderFilmName.innerHTML = filmName;
            orderFilmStart.innerHTML = filmStart;
            orderFilmGanar.innerHTML = filmGanars;
            orderFilmPrice.innerHTML = filmPrice;

            let orderFilmCountTicket = document.getElementById('orderFilmCountTicket'),
                orderFilmTotalPrice = document.getElementById('orderFilmTotalPrice'),
                orderFilmTicketsNumberList = document.getElementById('orderFilmNumberPlaces');

            orderFilmTotalPrice.innerHTML = customerOrder.getOrderPlacesCustom();
            orderFilmTicketsNumberList.innerHTML = customerOrder.getOrderPlacesList();
            orderFilmCountTicket.innerHTML = customerOrder.getOrderPlacesCount();
        }
        return filmRow;
    }

    getRenderStringForNewFilms() {
        let renderMosaicString = '';
        let block5Films = document.createElement('div');
        block5Films.classList.add('block5__movie1');
        renderMosaicString += `<div class="block5__relative">
                                <div class="block5__bg">
                                    <img class="block5__image maximum-height" src="`+ this.image + `" alt="Изображение фильма ` + this.name + `">
                                </div>
                                <div class="block5__description">
                                    <div class="block5__text-header">`+ this.name +
            `<div class="block5__description">
                                            <div class="block5__text-header">`+ this.name +
            `</div>
                                            <div class="block5__white-line"></div>
                                                <div class="block5__text">Lorem ipsum dolor sit amet, consectetur</div>
                                                    <div class="block5__icons">
                                                        <a href="#" class="block5__link" target="_blank"><i class="icon icon-twitter" title="icon-twitter"></i></a>
                                                        <a href="#" class="block5__link" target="_blank"><i class="icon icon-facebook" title="icon-facebook"></i></a>
                                                        <a href="#" class="block5__link" target="_blank"><i class="icon icon-camera" title="icon-camera"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
        block5Films.innerHTML = renderMosaicString;
        return block5Films;
    }
}

//массив фильмов для проката
let filmsHier = [];
//массив фильмов новинок
let filmsNew = [];

//---------------рассортируем массив фильмов ----------//
for (let filmIndex = 0; filmIndex < films.length; filmIndex++) {
    let newFilm = new Film(films[filmIndex].Time, films[filmIndex].Name, films[filmIndex].id, films[filmIndex].href, films[filmIndex].filmHire, films[filmIndex].filmNew, films[filmIndex].image, films[filmIndex].price);
    if (films[filmIndex].filmHire == true) {
        filmsHier.push(newFilm);
    }
    else {
        filmsNew.push(newFilm);
    }
}

//------------------объект Place-----------------------//
class Place {
    //поля
    constructor(number, price, booking, paid) {
        this.number = number;     //номер места
        this.price = price;       //цена
        this.booking = booking;   //флаг брони
        this.paid = paid;         //флаг оплачено
    }
}

//------------------массив объектов Place--------------//
let places = [];
let newPlace;
//------------ШАГ6 заполняем заглушку данными----------//
function refreshFilmPlaces() {
    for (let i = 0; i < filmsHier.length; i++) {
        let newPlaces = [];
        for (let j = 1; j < 11; j++) {
            if (j > 2 & j < 5) {
                newPlace = new Place(j, filmsHier[i].getPrice(), true, true);
            }
            else {
                newPlace = new Place(j, filmsHier[i].getPrice(), false, false);
            }

            newPlaces.push(newPlace);
        }
        places.push(newPlaces);
    }
}
refreshFilmPlaces();
//console.log(places);

//-------Объект заказ для хранения данных о заказе-----//
class CustomerOrder {
    //поля
    constructor() {
        this.places = [];   //массив для хранения перечня мест купленных покупателем
    }
    //методы
    //получить перечень заказанных мест в виде строки
    getOrderPlacesList() {
        let numberPlacesOrder = '';
        for (let i = 0; i < this.places.length; i++) {
            numberPlacesOrder += this.places[i].number;
            //если это не последнее место в массиве, добавим в конец строки запятую
            if (i != this.places.length - 1) {
                numberPlacesOrder += ', ';
            }
        }
        return numberPlacesOrder;
    }
    //получить общую стоимость купленных билетов
    getOrderPlacesCustom() {
        let custom = 0;
        for (let i = 0; i < this.places.length; i++) {
            custom += this.places[i].price;
        }
        return custom;
    }
    //получить общее количество заказанных билетов
    getOrderPlacesCount() {
        return this.places.length;
    }
    //добавить заказанное место в перечень заказов
    addOrderToOrderList(number, price, booking) {
        let newPlace = new Place(number, price, booking, false);
        this.places.push(newPlace);
    }
    //удалить заказанное место из перечня заказов
    removeOrderFromOrderList(number) {
        //найти элемент в массиве с номером места
        for (let i = 0; i < this.places.length; i++) {
            if (this.places[i].number == number) {
                //удалим текущий элемент
                this.places.splice(i, 1);
                //и прервем цикл и выйдем
                break;
            }
        }
    }
    //очистить список заказов
    clearOrderList() {
        this.places.splice(0, this.places.length);
    }
}

//--создадим объект заказ покупателя при создании страницы--/
let customerOrder = new CustomerOrder();
let indexCurrentFilm = 0;


//------------ШАГ8 рендерим места в форму---------------//
function refreshCinemaPlaces(index) {
    console.log(customerOrder);
    let divCinemaTickets = document.getElementById('cinema-tickets');
    divCinemaTickets.innerHTML = '';
    for (let i = 0; i < places[index].length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('square');
        //если место уже занято, то добавляем класс busy, цвет оранжевый
        if (places[index][i].booking == true & places[index][i].paid == true) {
            newDiv.classList.add('paid');
        }
        else if (places[index][i].booking == true & places[index][i].paid == false) //иначе, добавляем класс spare, цвет зеленый
        {
            newDiv.classList.add('busy');
        }
        else if (places[index][i].booking == false & places[index][i].paid == false) {
            newDiv.classList.add('spare');
        }
        newDiv.innerHTML = (places[index][i].number);
        //обработка клика на квадрате с местом
        newDiv.addEventListener('click', order);
        //обработка правого клика на квадрате с местом
        newDiv.addEventListener('contextmenu', placeContext.bind(null, places[index][i].price));//убрать bind
        //обработка события перемещения курсора мыши над элементом
        newDiv.addEventListener('mouseover', placeHover);
        //обработка события перемещения курсора мыши за пределы элемента
        newDiv.addEventListener('mouseout', placeHoverOut);
        //добавим созданную строку с квадратиками мест в форму
        divCinemaTickets.appendChild(newDiv);
    }
    let orderFilmCountTicket = document.getElementById('orderFilmCountTicket'),
        orderFilmTotalPrice = document.getElementById('orderFilmTotalPrice'),
        orderFilmTicketsNumberList = document.getElementById('orderFilmNumberPlaces');

    orderFilmTotalPrice.innerHTML = customerOrder.getOrderPlacesCustom();
    orderFilmTicketsNumberList.innerHTML = customerOrder.getOrderPlacesList();
    orderFilmCountTicket.innerHTML = customerOrder.getOrderPlacesCount();
}


//---------ШАГ 9 создание функций обработчиков------------//
window.order9 = function () {
    console.log('step 9 order');
}
window.placeToggle9 = function () {
    console.log('step 9 placeToggle');
}
window.placeContext9 = function () {
    console.log('step 9 placeContext');
}
window.placeHover9 = function () {
    console.log('step 9 placeHover');
}
window.placeHoverOut9 = function () {
    console.log('step 9 placeHoverOut');
}
//обработка клика на квадрате с местом
function order(e) {
    console.log(e.target.innerHTML);
    //переменная, в которой хранится признак успешности отметки
    let successFinded = false;
    //если содержимое div квадратика с местом не пустой
    if (e.target.innerHTML != null) {
        //запустим цикл по массиву с местами, найдем выбранное место и отметим его
        for (let i = 0; i < places[indexCurrentFilm].length; i++) {
            if (places[indexCurrentFilm][i].number == e.target.innerHTML) {
                //выставим признак успешного поиска места
                successFinded = true;
                //проверяем было ли данное место уже заказано
                if (places[indexCurrentFilm][i].paid == true) {
                    alert('Данное место уже забронировано, закажите пожалуйста другое');
                    break;
                }
                else if (places[indexCurrentFilm][i].booking == false) {
                    //установим признак брони данного места
                    places[indexCurrentFilm][i].booking = true;
                    //добавим в заказ покупателю
                    customerOrder.addOrderToOrderList(places[indexCurrentFilm][i].number, places[indexCurrentFilm][i].price, places[indexCurrentFilm][i].booking);
                    break;
                }
                else if (places[indexCurrentFilm][i].booking == true) {
                    places[indexCurrentFilm][i].booking = false;
                    customerOrder.removeOrderFromOrderList(e.target.innerHTML);
                }


            }
        }
        if (successFinded != true) {
            alert('Место с таким номером не найдено, перезагрузите пожалуйста страницу и попробуйте снова');
        }
        else {
            refreshCinemaPlaces(indexCurrentFilm);
        }
    }
}
//обработка клика на квадрате с местом смена цвета
function placeToggle() {
    //в данной функции нет необходимости, так как 
    //цвета квадратиков с местами обновляются при
    //клике в функции refreshCinemaPlaces
}
//обработка правого клика на квадрате с местом
function placeContext(price) {
    alert(price);
}
//обработка события перемещения курсора мыши над элементом
function placeHover() {

    this.classList.add('focused');
}
//обработка события перемещения курсора мыши за пределы элемента
function placeHoverOut() {
    this.classList.remove('focused')
}

// Закрытие модального окна
/*** РАЗОБРАТЬ Event Handler */
let orderForm = document.getElementById('orderForm');
let closeOrderForm = document.getElementById('closeOrderFrom');
let orderTicketsPlace = document.getElementById('order-tickets__place');

closeOrderForm.onclick = function () {
    //orderForm.style.display = 'none';
    customerOrder.clearOrderList();
    //при закрытии модального окна очистим массив мест
    places.splice(0, places.length);
    //и заполним его начальными значениями
    refreshFilmPlaces();
    orderTicketsPlace.classList.add('hidden');
}

// Валидация ввода имени
/** РАЗОБРАТЬ Event Handler */
let sendOrder = document.getElementById('sendOrder');
sendOrder.onclick = function () {
    let orderClinetName = document.getElementById('orderClinetName');

    if (orderClinetName.value) {
        orderClinetName.style.border = '1px solid #bebebe';
    } else {
        orderClinetName.style.border = '2px solid red';
    }
}


// Шаг 4
for (let indexFilmsHier = 0; indexFilmsHier < filmsHier.length; indexFilmsHier++) {
    let film = filmsHier[indexFilmsHier];


    let myFilm = new Film();
    const name = film.getName.apply({
        name: 'тест шаг4'
    });
    //console.log(name);
}


// Переменная которая получает доступ к таблице фильмов через id
let tableBody = document.getElementById('table_body');

let styleIndex = 1;

//----------Рендерим таблицу "Выберите фильм"--------//
for (let index = 0; index < filmsHier.length; index++) {
    //готовим стили для строк по индексу, всего 4, перебираем их
    if (styleIndex >= 4) {
        styleIndex = 1;
    }
    else {
        styleIndex++;
    }
    tableBody.appendChild(filmsHier[index].getRenderStringForSelectFilm(styleIndex, index));
}

//переменная которая получает доступ к мозайке фильмов 
let mosaicTable = document.getElementById('blockMosaicTable');
for (let indexMosaicFilms = 0; indexMosaicFilms < filmsNew.length; indexMosaicFilms++) {
    mosaicTable.appendChild(filmsNew[indexMosaicFilms].getRenderStringForNewFilms());
}





