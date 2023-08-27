<?php

// необходимые HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// подключение базы данных и файл, содержащий объекты
include_once "../config/database.php";
include_once "../objects/catalog.php";


// получаем соединение с базой данных
$database = new Database(   );
$db = $database->getConnection();

// инициализируем объект
$catalog = new Catalog($db);

// запрашиваем
$id = htmlspecialchars($_GET["id"]);
//$stmt = $catalog->update($id);

$entityBody = file_get_contents('php://input');
$json = json_decode($entityBody);

foreach($json as $key => $val) {
//    echo $key, $val;
    $stmt = $catalog->update($id,$key,$val);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
}
//$row = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode( $row );
// устанавливаем код ответа - 200 OK
http_response_code(200);

