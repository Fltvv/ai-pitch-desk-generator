<?php

class Database
{
    // укажите свои учетные данные базы данных
    private $host = "91.236.136.217:3306";
    private $db_name = "u420606_finance";
    private $username = "u420606_finance";
    private $password = "пароль вы можете получить в телеграме @mgarbuzenko";
    public $conn;

    // получаем соединение с БД
    public function getConnection()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Ошибка подключения: " . $exception->getMessage();
        }

        return $this->conn;
    }
}