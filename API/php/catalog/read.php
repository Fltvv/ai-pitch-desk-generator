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
 
// запрашиваем товары

$id = htmlspecialchars($_GET["id"]);
$stmt = $catalog->read($id);
$num = $stmt->rowCount();

// проверка, найдено ли больше 0 записей
if ($num > 0) {
    // массив товаров
    $products_arr = array();
    $products_arr["catalog"] = array();

    // получаем содержимое нашей таблицы
    // fetch() быстрее, чем fetchAll()
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // извлекаем строку
        extract($row);
        $product_item = array(
            "id" => $id,
            "name" => html_entity_decode($name),
            "market" => $market,
            "product" => $product,
            "img_product" => 'https://aislide.ru/img/image/'.$id.'_product.jpg',
            "img_market" => 'https://aislide.ru/img/image/'.$id.'_market.jpg',
            "img_name" => 'https://aislide.ru/img/image/'.$id.'_name.jpg',
            "img" => 'https://aislide.ru/img/image/'.$id.'_description.jpg',
            "ppt_black_en" => 'https://aislide.ru/ppt/'.$id.'_black_en.pptx',
            "ppt_black_ru" => 'https://aislide.ru/ppt/'.$id.'_black_ru.pptx',
            "ppt_white_en" => 'https://aislide.ru/ppt/'.$id.'_white_en.pptx',
            "ppt_white_ru" => 'https://aislide.ru/ppt/'.$id.'_white_ru.pptx',
            "ppt" =>

            [
                [
                    "color"=> 'white',
                    "lang"=> 'ru',
                    "link"=>'https://aislide.ru/ppt/'.$id.'_white_ru.pptx'
                ],
            [
               "color"=> 'black',
              "lang"=> 'ru',
              "link"=>'https://aislide.ru/ppt/'.$id.'_black_ru.pptx'
            ],

                [
                    "color"=> 'white',
                    "lang"=> 'en',
                    "link"=>'https://aislide.ru/ppt/'.$id.'_white_en.pptx'
                ],
                [
                    "color"=> 'black',
                    "lang"=> 'en',
                    "link"=>'https://aislide.ru/ppt/'.$id.'_black_en.pptx'
                ]
            ]
        );
        array_push($products_arr["catalog"], $product_item);
    }

    // устанавливаем код ответа - 200 OK
    http_response_code(200);

    // выводим данные о товаре в формате JSON
    echo json_encode($products_arr);
}

else {
    // установим код ответа - 404 Не найдено
    http_response_code(404);

    // сообщаем пользователю, что товары не найдены
    echo json_encode(array("message" => "Каталог пустой."), JSON_UNESCAPED_UNICODE);
}