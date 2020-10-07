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
    14: 'Трагикомедия'
}

// Переменная, которая содержит массив фильмов
let films = [
    {
        Time: '10:10',
        Name: 'Однажды в… Голливуде',
        id: ['4', '6'],
        href: 'https://www.kinopoisk.ru/film/1047883/'
    },
    {
        Time: '12:10',
        Name: 'Голая правда',
        id: ['7', '6'],
        href: 'https://www.kinopoisk.ru/film/398239/'
    },
    {
        Time: '14:10',
        Name: 'Рок-н-рольщик',
        id: ['2', '1', '10'],
        href: 'https://www.kinopoisk.ru/film/378140/'
    },
    {
        Time: '16:10',
        Name: 'Джанго освобожденный',
        id: ['2', '1', '4', '6'],
        href: 'https://www.kinopoisk.ru/film/586397/'
    },
    {
        Time: '18:10',
        Name: 'Джентльмены',
        id: ['2', '1', '6'],
        href: 'https://www.kinopoisk.ru/film/1143242/'
    }
]


// Переменная которая получает доступ к таблице фильмов через id
let tableBody = document.getElementById('table_body');


for (let index = 0; index < films.length; index++) {
    let new_tr = document.createElement('tr');
    new_tr.classList.add('movi-list__table_tbody_tr' + (index + 1));
    new_tr.classList.add('row-height');
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
}