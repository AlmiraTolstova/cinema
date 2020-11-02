<!-- Сюда мы направляемся от server.php -->
<?php
// Проверяем заполненность строки name
if(!isset($_GET['name'])){
    //Если строка пустая, мы возвращаемся на index.php
    header('location: /index.php' );
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1{
            font-size: 24px;
            padding-left: 25%;
            padding-top: 20%;
        }
        button{
            border: none;
            border-radius: 0.75rem;
            background-color: rgb(144, 210, 61);
            width: 11rem;
            height: 2.75rem;
            color: rgb(255, 255, 255);
            margin-left: 43%;
        }
    </style>
</head>
<body>

    <h1 >Спасибо, <?php echo $_GET['name']?>, мы свяжемся с Вами в ближайшее время по телефону <?php echo $_GET['phone']?>!</h1>
    
    <form action="/index.php">
        <button>
            Вернуться на главную
        </button>
    </form>
</body>
</html>

