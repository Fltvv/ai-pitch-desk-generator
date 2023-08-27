<?php

class Catalog
{
    private $conn;
    private $table_name = "base";

    // свойства объекта
    public $id;
    public $name;
    public $market;
    public $product;

    // конструктор для соединения с базой данных
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // метод для получения товаров
    function read($id)
    {
        // выбираем все записи
        if ($id == 0) {
            $query = "SELECT
            p.id, p.name, p.market, p.product
        FROM
            " . $this->table_name . " p
        ORDER BY p.priority DESC";
        } else {
            $query = "SELECT
        p.id, p.name, p.market, p.product
    FROM
        " . $this->table_name . " p
        WHERE p.id = " . $id . " ";
        }

        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // выполняем запрос
        $stmt->execute();
        return $stmt;
    }

    function update($id, $key, $val)
    {
        // выбираем все записи

        $query = "UPDATE  " . $this->table_name . " 
        set " . $key . "='" . $val . "' WHERE id = " . $id . " ";
//        echo  $query;

        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // выполняем запрос
        $stmt->execute();
        return $stmt;
    }


    function insert()
    {
        // выбираем все записи
        $query = "INSERT INTO " . $this->table_name . " (`name`) VALUES ('new startup')";
        echo $query;
        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // выполняем запрос
        $stmt->execute();
        return $stmt;
    }

}