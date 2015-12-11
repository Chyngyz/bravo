<?php

$EmailFrom = "bravo-bishkek@mail.ru";
$EmailTo = "bravo-bishkek@mail.ru";
$Subject = "Заявка с сайта на заказ столика";
$Name = Trim(stripslashes($_POST['name'])); 
$Tel = Trim(stripslashes($_POST['phone'])); 


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