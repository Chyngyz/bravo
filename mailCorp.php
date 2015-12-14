<?php

$EmailFrom = "bravo-bishkek@mail.ru";
$EmailTo = "bravo-bishkek@mail.ru";
$Subject = "Заявка с сайта на заказ банкета";
$Name = Trim(stripslashes($_POST['name'])); 
$Tel = Trim(stripslashes($_POST['phone']));
$headers = 'Cc: frolova.project@gmail.com' . "\r\n";


// prepare email body text
$Body = "";
$Body .= "Имя: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Телефон: ";
$Body .= $Tel;
$Body .= "\n";


// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

?>