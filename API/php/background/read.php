<?php

// необходимые HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// подключение базы данных и файл, содержащий объекты
include_once "../config/database.php";
include_once "../objects/catalog.php";

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

$num = rand(1,2);

$dir    = __DIR__.'/img/'.$num.'/';
//echo $dir;

$files =  preg_grep('/^([^.])/', scandir($dir));

$f_arr = array();
$f_arr["backgrounds"] = array();
//
foreach($files as $file){
    if (($files == '.') || ($files == '..')){
    }else{
        $f_item = array(
            "img" => 'https://aislide.ru/php/background/img/'.$num.'/'.$file
        );
        array_push($f_arr["backgrounds"], $f_item);
    }

}

    http_response_code(200);

    echo json_encode($f_arr);
