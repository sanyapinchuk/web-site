<?php
$f = fopen("log.txt",'a');
fwrite($f,"\r\n");
fclose($f);
file_put_contents('log.txt', json_encode($_POST,JSON_UNESCAPED_UNICODE) . " ||  Date: " . date('Y-m-d H:i:s'), FILE_APPEND);
$message ="";
if($_SERVER['HTTP_REFERER']=='https://it-car.by/contact_us')
{
    $message =
        'name: '. $_POST['name']."\r\n".
        'email: '.$_POST['email']."\r\n".
        'phone: '.$_POST['phone']."\r\n".
        'budget: '. $_POST['budget']."\r\n".
        'request: '. $_POST['request'];

    mail('info.itcar@gmail.com', 'Request from the user', $message);
    header('Location: https://it-car.by/success_order');
}
else
{
    $message =
        'name: '. $_POST['name']."\r\n".
        'email: '.$_POST['email']."\r\n".
        'phone: '.$_POST['phone']."\r\n".
        'car\'s address: '. $_SERVER['HTTP_REFERER'];

    mail('info.itcar@gmail.com', 'Order from the user', $message);
    header('Location: '.$_SERVER['HTTP_REFERER']);
}