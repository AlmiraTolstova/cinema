<?php

class userData{
    //свойства
    public $name ='user';
    public $select_place = '0';
    public $agree = 'off';
    public $mail = 'user_mail@mail.org';
    public $phone = '+79XXXXXXXXX';

    //методы
    /*checkData
        Проверяет корректность заполненных пользователем данных
        @param String @name
        @param int $select_place
        @param boolean $agree

        @return boolean
     */
    public function checkData($name, $select_place, $agree){
        if(($name !='') & ( $select_place!='Выберите место') & ($agree!=false))
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
    public function saveData($name, $select_place, $agree) {
        $this->name=$name;
        $this->select_place=$select_place;
        $this->agree=$agree;
    }

    /**returnError
     * Возврат пользователя на страницу заполнения формы
     * @return void
     */
    public function returnError(){
        header('location: /index.html' );
    }

    /**returnSuccess
     * Переотправляет пользователя на страницу благодарности
     * @return void
    */
    public function returnSuccess(){
        header('location: /php/thanks.php?name=' . $this->name);
    }
}

$user = new userData();

if($user->checkData($_POST['name'], $_POST['select_place'], $_POST['agree'])=='on')
{
    $user->saveData($_POST['name'], $_POST['select_place'], $_POST['agree']);
    $user->returnSuccess();
}
else
{
    $user->returnError();
}

// $name = $_POST['name'] ?? '';
// $select_place = $_POST['select_place'] ?? '';
// $agree = $_POST['agree'];



//для следующего ТЗ
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