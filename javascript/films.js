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

// Константа, которая содержит массив фильмов
const films = [
    {
        Time: '10:10',
        Name: 'Однажды в… Голливуде',
        id: ['4', '6'],
        href: 'https://www.kinopoisk.ru/film/1047883/',
        filmHire: false,
        filmNew: true,
        image:'images/mov12.png'
        //image: 'https://st.kp.yandex.net/im/poster/3/4/1/kinopoisk.ru-Once-Upon-a-Time-in-Hollywood-3411483.jpg',
        
    },
    {
        Time: '12:10',
        Name: 'Голая правда',
        id: ['7', '6'],
        href: 'https://www.kinopoisk.ru/film/398239/',
        filmHire: true,
        filmNew: false,
        image:'https://st.kp.yandex.net/im/poster/9/2/4/kinopoisk.ru-The-Ugly-Truth-924394.jpg'
        
    },
    {
        Time: '14:10',
        Name: 'Рок-н-рольщик',
        id: ['2', '1', '10'],
        href: 'https://www.kinopoisk.ru/film/378140/',
        filmHire: true,
        filmNew: false,
        image:'https://st.kp.yandex.net/im/poster/7/8/1/kinopoisk.ru-RocknRolla-781092.jpg'
        
    },
    {
        Time: '16:10',
        Name: 'Джанго освобожденный',
        id: ['2', '1', '4', '6'],
        href: 'https://www.kinopoisk.ru/film/586397/',
        filmHire: true,
        filmNew: false,
        image:'https://st.kp.yandex.net/im/poster/2/2/9/kinopoisk.ru-Django-Unchained-2295520.jpg'
    },
    {
        Time: '18:10',
        Name: 'Джентльмены',
        id: ['2', '1', '6'],
        href: 'https://www.kinopoisk.ru/film/1143242/',
        filmHire: false,
        filmNew: true,
        image:'images/mov4.png'
        //image: 'https://st.kp.yandex.net/im/poster/3/4/5/kinopoisk.ru-The-Gentlemen-3451969.jpg'
    },
    {
        Time: '21:15',
        Name: 'Бойцовский клуб',
        id: ['2', '10', '4'],
        href: 'https://www.kinopoisk.ru/film/361/',
        filmHire: true,
        filmNew: false,
        image:'https://st.kp.yandex.net/im/poster/1/8/0/kinopoisk.ru-Fight-Club-1801679.jpg'
    },
    {
        Time: '10:20',
        Name: 'Король Лев',
        id: ['15', '16', '17'],
        href: 'https://www.kinopoisk.ru/film/2360/',
        filmHire: true,
        filmNew: false,
        image:'https://st.kp.yandex.net/im/poster/8/7/1/kinopoisk.ru-The-Lion-King-871467.jpg'
    },
    {
        Time: '21:15',
        Name: 'Большой куш',
        id: ['0', '2', '6'],
        href: 'https://www.kinopoisk.ru/film/526/',
        filmHire: false,
        filmNew: true,
        image:'images/mov5.png'
        //image: 'https://st.kp.yandex.net/im/poster/1/4/4/kinopoisk.ru-Snatch-1442022.jpg'
    },
    {
        Time: '20:20',
        Name: 'Достучаться до небес',
        id: ['2', '4', '6'],
        href: 'https://www.kinopoisk.ru/film/32898/',
        filmHire: false,
        filmNew: true,
        image:'images/mov6.png'
        //image: 'https://st.kp.yandex.net/im/poster/2/3/5/kinopoisk.ru-Knockin_27-on-Heaven_27s-Door-235277.jpg'
    },
    {
        Time: '11:25',
        Name: 'Начало',
        id: ['0', '18', '10','4','3'],
        href: 'https://www.kinopoisk.ru/film/447301/',
        filmHire: false,
        filmNew: true,
        image:'images/mov7.png'
        //image: 'https://st.kp.yandex.net/im/poster/1/8/9/kinopoisk.ru-Inception-1896672.jpg'
    },
    {
        Time: '13:30',
        Name: 'В джазе только девушки',
        id: ['2', '6','11'],
        href: 'https://www.kinopoisk.ru/film/356/',
        filmHire: false,
        filmNew: true,
        image:'images/mov8.png'
        //image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/f9d40e34-f5b2-49ca-9fe0-bbdd3e43da3a/300x450'
    },
    {
        Time: '22:10',
        Name: 'Гран Торино',
        id: ['4'],
        href: 'https://www.kinopoisk.ru/film/408410/',
        filmHire: false,
        filmNew: true,
        image:'images/mov9.png'
        //image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/fe294fb7-2b61-40e0-b646-00885edf7f06/300x450'
    },
    {
        Time: '14:40',
        Name: 'Спасти рядового Райана',
        id: ['4', '19'],
        href: 'https://www.kinopoisk.ru/film/371/',
        filmHire: false,
        filmNew: true,
        image:'images/mov10.png'
        //image: 'https://st.kp.yandex.net/im/poster/1/9/5/kinopoisk.ru-Saving-Private-Ryan-1953013.jpg'
    },
    {
        Time: '20:20',
        Name: 'Зеленая книга',
        id: ['20', '4', '6'],
        href: 'https://www.kinopoisk.ru/film/1108577/',
        filmHire: false,
        filmNew: true,
        image:'images/mov11.png'
        //image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/300x450'
    }
 
]



//--------------------объект Film----------------------//
class Film{
    //поля
    //для передачи  данных в поля класса извне используется конструктор
    constructor(Time, name, ganar, href ,filmHier, filmNew, image){
        this.time=Time;
        this.name=name;
        this.ganar=ganar;
        this.href=href;
        this.filmHier=filmHier;
        this.filmNew=filmNew;
        this.image=image;
    }
    //методы
    getName(){
        return this.name;
    }
    getStart(){
        return this.time;
    }
    getGanre(){
        if(this.ganar.length>0)
        {
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

//-----------в параметр numberStyleRow передается номер стиля для формирования
//-----------стиля в виде: movi-list__table_tbody_tr1
    getRenderStringForSelectFilm(numberStyleRow){
        let renderString='';
        let filmRow=document.createElement('tr');
        filmRow.classList.add('movi-list__table_tbody_tr'+numberStyleRow);
        filmRow.classList.add('row-height');
        renderString+=`<td></td>`;
        renderString+=`<td class="vertical-align center">`+this.time+`</td>`;
        renderString+=`<td class="vertical-align indent66"><a href="`+this.href+`" target="_blank">`+this.name+`</a></td>`;
        renderString+=`<td class="vertical-align">`+this.getGanre()+`</td>`;
        renderString+=`<td class="vertical-align indent49"><img class="movi-list__button-plus" src="images/button-plus.svg" alt="Кнопка"></td></tr>`;
        filmRow.innerHTML=renderString;
        return filmRow;
    }

    getRenderStringForNewFilms(){
        let renderMosaicString='';
        let block5Films = document.createElement('div');
        block5Films.classList.add('block5__movie1');
        renderMosaicString+=`<div class="block5__relative">
                                <div class="block5__bg">
                                    <img class="block5__image maximum-height" src="`+this.image+`" alt="Изображение фильма `+this.name+`">
                                </div>
                                <div class="block5__description">
                                    <div class="block5__text-header">`+this.name+
                                        `<div class="block5__description">
                                            <div class="block5__text-header">`+this.name+
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
        block5Films.innerHTML=renderMosaicString;
        return block5Films;
    }
}

//массив фильмов для проката
let filmsHier = [];
//массив фильмов новинок
let filmsNew = [];

//---------------рассортируем массив фильмов ----------//
for(let filmIndex=0;filmIndex<films.length;filmIndex++)
{
    let newFilm=new Film(films[filmIndex].Time,films[filmIndex].Name,films[filmIndex].id,films[filmIndex].href,films[filmIndex].filmHire,films[filmIndex].filmNew,films[filmIndex].image);
    if(films[filmIndex].filmHire==true)   
    {
        filmsHier.push(newFilm);
    }
    else
    {
        filmsNew.push(newFilm);
    }
}


// Шаг 4
for(let indexFilmsHier=0; indexFilmsHier<filmsHier.length; indexFilmsHier++)
{
    let film = filmsHier[indexFilmsHier];
    
    
    let myFilm=new Film();
    const name = film.getName.apply({
        name:'тест'});
    console.log(name);
    //console.log(myFilm.getName.apply(filmsHire[indexFilmsHier]));
}


// Переменная которая получает доступ к таблице фильмов через id
let tableBody = document.getElementById('table_body');

let styleIndex=1;

//----------Рендерим таблицу "Выберите фильм"--------//
for(let index=0;index<filmsHier.length;index++)
{
    //готовим стили для строк по индексу, всего 4, перебираем их
    if(styleIndex>=4)
    {
        styleIndex=1;
    }
    else
    {
        styleIndex++;
    }
    tableBody.appendChild(filmsHier[index].getRenderStringForSelectFilm(styleIndex));
}

//переменная которая получает доступ к мозайке фильмов 
let mosaicTable = document.getElementById('blockMosaicTable');
for(let indexMosaicFilms=0; indexMosaicFilms<filmsNew.length;indexMosaicFilms++)
{
    mosaicTable.appendChild(filmsNew[indexMosaicFilms].getRenderStringForNewFilms());
}

/*
for (let index = 0; index < films.length; index++) {
    
    let new_tr = document.createElement('tr');
    new_tr.classList.add('movi-list__table_tbody_tr' + styleIndex);
    new_tr.classList.add('row-height');
    //готовим стили для строк по индексу, всего 4, перебираем их
    if(styleIndex>=4)
    {
        styleIndex=1;
    }
    else
    {
        styleIndex++;
    }
    // пустая ячейка
    let empty_cell = document.createElement('td');
    //ячейка время
    new_td1 = document.createElement('td');
    new_td1.innerHTML = films[index].Time;
    new_td1.classList.add('vertical-align');
    new_td1.classList.add('center');
    //ячейка название
    new_td2 = document.createElement('td');
    let url = document.createElement('a');
    url.innerHTML = films[index].Name;
    url.href = films[index].href;
    url.target = '_blank';
    new_td2.appendChild(url);
    new_td2.classList.add('vertical-align');
    new_td2.classList.add('indent66');
    // ячейка жанр
    let newJanre = '';
    for (let ind = 0; ind < films[index].id.length; ind++) {
        newJanre += Janres[films[index].id[ind]];
        if (ind != films[index].id.length - 1) {
            newJanre += ', ';
        }

    }
    let new_td4 = document.createElement('td');
    new_td4.classList.add('vertical-align');
    new_td4.innerHTML = newJanre;
    //кнопка добавить
    new_td3 = document.createElement('td');
    new_td3.classList.add('vertical-align');
    new_td3.classList.add('indent49');
    let newimg = document.createElement('img');
    newimg.classList.add('movi-list__button-plus');
    newimg.src = 'images/button-plus.svg';
    newimg.alt = 'Кнопка';
    new_td3.appendChild(newimg);
    //формируем строку
    new_tr.appendChild(empty_cell);
    new_tr.appendChild(new_td1);
    new_tr.appendChild(new_td2);
    new_tr.appendChild(new_td4);
    new_tr.appendChild(new_td3);
    //добавляем новую строку в таблицу
    tableBody.appendChild(new_tr)
}*/