<?php

class userData{
    //свойства
    public $name ='user';
    public $select_place = '0';
    public $agree = 'off';
    public $mail = 'user_mail@mail.org';
    public $phone = '+79XXXXXXXXX';

    //методы
    /**checkEmail($mail)
     * Проверяет корректность заполненных пользователем данных (должны присутствовать домены org и com)
     * @param String @mail
     * 
     * @return boolean
     */

    function checkEmail($mail){
        if(substr_count($mail, 'org')>0 || substr_count($mail, 'com')>0){
            return true;
        }
        else{
            return false;
        }
    }

    /*checkData
        Проверяет корректность заполненных пользователем данных
        @param String @name
        @param int $select_place
        @param boolean $agree

        @return boolean
     */
    public function checkData($name, $select_place, $agree, $mail, $phone){
        if(($name !='') & ( $select_place!='Выберите место') & ($agree!=false) & ($mail!='')&($phone!='') & $this->checkEmail($mail)==1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    /**saveData
     *  присваивает переменным значения данных из массива
     *  @param String @name
     *  @param int $select_place
     *  @param boolean $agree
     *
     * @return void
     */
    public function saveData($name, $select_place, $agree, $mail, $phone) {
        $this->name=$name;
        $this->select_place=$select_place;
        $this->agree=$agree;
        $this->mail=$mail;
        $this->phone=$phone;
    }

    /**returnError
     * Возврат пользователя на страницу заполнения формы
     *  @param String @name
     *  @param int $select_place
     *  @param boolean $agree
     * 
     * @return void
     */
    public function returnError($name, $select_place, $agree, $mail, $phone){
        //перенаправляем на основную страницу и передаем queryString с всеми нужными данными для формы
        header('location: /index.php?name=' . $name . '&select_place=' . $select_place . '&agree=' . $agree . '&mail=' . $mail . '&phone=' . $phone . '&invalid=' . true);
    }

    /**returnSuccess
     * Переотправляет пользователя на страницу благодарности
     * @return void
    */
    public function returnSuccess(){
        header('location: /php/thanks.php?name=' . $this->name . '&select_place=' . $this->select_place . '&agree=' . $this->agree . '&mail=' . $this->mail . '&phone=' . $this->phone);
    }
}

$user = new userData();

if($user->checkData($_POST['name'], $_POST['select_place'], $_POST['agree'], $_POST['mail'], $_POST['phone'])==true)
{
    $user->saveData($_POST['name'], $_POST['select_place'], $_POST['agree'], $_POST['mail'], $_POST['phone']);
    $user->returnSuccess();
}
else
{
    $user->returnError($_POST['name'], $_POST['select_place'], $_POST['agree'], $_POST['mail'], $_POST['phone']);
}

// $name = $_POST['name'] ?? '';
// $select_place = $_POST['select_place'] ?? '';
// $agree = $_POST['agree'];



// для следующего ТЗ
// include('client.php');
// include('Database.php');

// define('CLIENTS', __DIR__ . '/clients.csv');
// define('COOKIE_LIFETIME', time()+60*60*24*30);

// $errors = validate($_POST);

// $pdo = new Database;
// $pdo->conntect();

// if($errors){
//     echo json_encode($errors);
// } else{
//     $client = new Client($_POST);

//     $SESSION['name']= $_POST['name'];
//     $SESSION['phone']=$_POST['phone'];

//     setcookie('name', $_POST['name'], COOKIE_LIFETIME);
//     setcookie('phone', $_POST['phone'], COOKIE_LIFETIME);
// }



// // Cookie
// session_start();

// $name = $_POST['name'] ?? '';
// $phone = $_POST['phone'] ?? '';

// $_SESSION['user_name'] = $name;
// $_SESSION['user_name'] = $phone;
// if (strlen($phone) < 5) {
//     $_SESSION['error_phone'] = 'Слишком короткий номер телефона';
//     header('location:/index.php');
// } else{
//     $_SESSION['error_phone'] = '';
//     header('location:/thanks.php');
// }

