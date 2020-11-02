//API Геолокацииб с помощью него мы определяем город
const GEO_API = 'http://api.sypexgeo.net/',
//Список населенных пунктов
CITIES_API =  'https://glavpunkt.ru/api/get_rf_cities';

let city = '',
cities;// = [];

function getXmlRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            callback.call(xhr.responseText);
        }
        if(xhr.status != 200){
            console.log('error');
            //дописать город
        }
    }
    xhr.send();
}

function sleep(){
    let i = 0
    while(i < 100000000){
        i++;
    }
    return;
}

jQuery(($)=>{
    $('#city_name').on('click',function(e){
        e.preventDefault();
        $.fancybox.open({
            src : '#choose_city',
            type : 'inline',
        });
        
        if(!cities){
            console.log('cities');
            getXmlRequest(CITIES_API, function(){
                cities = $.parseJSON(this);
                console.log(cities);
            })
        }
    });
    $('[name=city_choose]').on('keyup',function(){
        let search = $(this).val(),
        result = '<ul>',
        counter = 0;
        for(let i=0; i<cities.length; i++){
            if(cities[i].name.toLowerCase().indexOf(search.toLowerCase()) >=0){

                result += '<li>'+cities[i].name+'</li>';
                counter++;
            }
        }
        result+='</ul>';
        if(!counter){
            result='Ничего не найдено';
        }
        $('#search_result').html(result);

        $('body').on('click', '#search_result li', function(){
            $('#city_name').html($(this).html());
            $.fancybox.close();
        })
    })
})



jQuery(document).ready(($) => {
    $('.ajax-loader').show();
    $.ajax({
        url: GEO_API,
        type: 'GET',
        dataType: 'json',
        success:function(result){
            console.log(result);
            city=result.city.name_ru;
            sleep();
            console.log(city);
            $('#city_name').html(city);
            $('.ajax-loader').hide();
        },
        error:function(result){
            $('.ajax-loader').hide();
        }

    })
 
})