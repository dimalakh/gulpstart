<?php
date_default_timezone_set("Asia/Irkutsk");
parse_str($result['query'],$params);



if(isset($_POST['number']) ){
  $form   = $_POST['form'];
	$name   = $_POST['name'];
	$number = $_POST['number'];
  $utm .= "<p><strong>utm_source:</strong> ".$_POST['utm_source'];
  $utm .= "<p><strong>utm_term:</strong> ".$_POST['utm_term'];
  $utm .= "<p><strong>utm_region:</strong> ".$_POST['utm_region'];

	$to = "setkon4@gmail.com";
	$from = "yo2u@domain.com";
  $date_time = date("d/m/Y h:i:s");

	$subject = 'Получена заявка с сайта «домен»';
	$message = '<b>Дата и время:</b> '.$date_time.' <br><b>Форма:</b> '.$form.'<br><b>Имя клиента:</b> '.$name.'<br><b>Телефон клиента:</b> '.$number.'<br><b>UTM метка:</b>'.$utm.'';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>
