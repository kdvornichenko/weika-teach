<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('weika_teach@mercyyy.ru', 'Виктория Меньшагина');
//Кому отправить
$mail->addAddress('gglade999@gmail.com');
//Тема письма
$mail->Subject = 'Новая Заявка';

//Тело письма
if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['tel']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['lvl']))){
    $body.='<p><strong>Уровень:</strong> '.$_POST['lvl'].'</p>';
}

$mail->Body = $body

//Отправляем
if(!$mail->send()){
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['mesage' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>