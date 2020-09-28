let Janres = {
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

let films=[
    {
        Time:'10:10',
        Name:'Однажды в… Голливуде',
        id:['4','6'],
        href:'https://www.kinopoisk.ru/film/1047883/'
    },
    {
        Time:'12:10',
        Name:'Голая правда',
        id:['7','6'],
        href:'https://www.kinopoisk.ru/film/398239/'
    },
    {
        Time:'14:10',
        Name:'Рок-н-рольщик',
        id:['2','1', '10'],
        href:'https://www.kinopoisk.ru/film/378140/'
    },
    {
        Time:'16:10',
        Name:'Джанго освобожденный',
        id:['2','1','4','6'],
        href:'https://www.kinopoisk.ru/film/586397/'
    },
    {
        Time:'18:10',
        Name:'Джентльмены',
        id:['2','1','6'],
        href:'https://www.kinopoisk.ru/film/1143242/'
    },
]

// let tds=document.getElementsByTagName('td');


// for(let i=0; i < tds.length; i+=3)
// {
//     let url=document.createElement('a');
//     url.innerHTML=films[i/3].Name;
//     url.href=films[i/3].href;
//     url.target='_blank';
    
//     tds[i].innerHTML=films[i/3].Time;
//     tds[i+1].appendChild(url);
// }

let tableBody=document.getElementById('table_body');

for(let index=0;index<films.length;index++)
{
    let new_tr=document.createElement('tr');
    new_tr.classList.add('movi-list__table_tbody_tr'+(index+1));
    new_tr.classList.add('row-height');
    //ячейка время
    new_td1=document.createElement('td');
    new_td1.innerHTML=films[index].Time;
    new_td1.classList.add('vertical-align');
    new_td1.classList.add('center');
    //ячейка название
    new_td2=document.createElement('td');
    let url=document.createElement('a');
    let newJanre='. Жанр: ';
    for(let ind=0;ind<films[index].id.length;ind++)
    {
        newJanre+=Janres[films[index].id[ind]]+' ';
    }
    url.innerHTML=films[index].Name+newJanre;
    url.href=films[index].href;
    url.target='_blank';
    new_td2.appendChild(url);
    new_td2.classList.add('vertical-align');
    new_td2.classList.add('indent66');
    //кнопка добавить
    new_td3=document.createElement('td');
    new_td2.classList.add('vertical-align');
    new_td3.classList.add('indent49');
    let newimg=document.createElement('img');
    newimg.classList.add('movi-list__button-plus');
    newimg.src='images/button-plus.svg';
    newimg.alt='Кнопка';
    new_td3.appendChild(newimg);
    new_tr.appendChild(new_td1);
    new_tr.appendChild(new_td2);
    new_tr.appendChild(new_td3);
    tableBody.appendChild(new_tr)
}