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
        return(substr_count($mail, 'org')>0 || substr_count($mail, 'com')>0);
    }

    /*checkData
        Проверяет корректность заполненных пользователем данных
        @param String @name
        @param int $select_place
        @param boolean $agree

        @return boolean
     */
    public function checkData($name, $select_place, $agree, $mail, $phone){
        return(($name !='') & ( $select_place!='Выберите место') & ($agree!=false) & ($mail!='')&($phone!='') & $this->checkEmail($mail)==1);
        
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
        $this->phone=$this->preparePhone($phone);
    }

    /*preparePhone($phone)
     * Подготавливает строку для сохранения (убирает все дефисы и скобки)
     * @param String @name
     * 
     * @return String 
    */
    public function preparePhone($phone){
        $preparedString='';
        $preparedString=$phone;
        $arrayReplaceSymbols=['-',' ', '(', ')', '[', ']', ',', '.', '_'];
        $preparedString=str_replace($arrayReplaceSymbols,'',$preparedString);
        if($preparedString[1]=='8'){
            $preparedString[1]='7';
        }
        return $preparedString;
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


