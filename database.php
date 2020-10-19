<?php
class Database
{
    const DATABASE = 'users';
    const TABLE = 'orders';
    private $pdo;
    private $user = 'root';
    private $password = '';

    public function connect(){
        $this->pdo=new PDO('mysql:host=localhost;db=' . $this::DATABASE, $this->user, $this->password);
        return $this->pdo;
    }

    public function createTable()
    {
        $this->pdo->query("CREATE TABLE IF NOT EXISTS " . $this::TABLE . "(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            phone TEXT,
            date TEXT
            )");
    }

    public function createRecord($data)
    {
        $date=('Y-m-d H:i:s');
        $sql = "INSERT INTO " . $this::TABLE .
        "(name, phone, date)
        VALUES (:name, :phone, $date)";
        $request = $this->pdo->prepare($sql);
        if($request)
            $request->execute($data);
        return $this->pdo->lastInsertId();
    }

    
}