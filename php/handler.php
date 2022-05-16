<?php
$f = fopen("log.txt",'a');
fwrite($f,"\r\n");
fclose($f);
file_put_contents('log.txt', json_encode($_POST), FILE_APPEND);
$message ="";
if($_SERVER['HTTP_REFERER']=='https://it-car.by/contact_us')
{
    $message =
        'name: '. $_POST['name']."\r\n".
        'email: '.$_POST['email']."\r\n".
        'phone: '.$_POST['phone']."\r\n".
        'budget: '. $_POST['budget']."\r\n".
        'request: '. $_POST['request'];

    mail('sanya.pinchuk.2015@mail.ru', 'Order from the user', $message);
    header('Location: https://it-car.by/success_order');
}
else
{
    $message =
        'name: '. $_POST['name']."\r\n".
        'email: '.$_POST['email']."\r\n".
        'phone: '.$_POST['phone']."\r\n".
        'car\'s address: '. $_SERVER['HTTP_REFERER'];

    mail('sanya.pinchuk.2015@mail.ru', 'Order from the user', $message);
    header('Location: '.$_SERVER['HTTP_REFERER']);
}




