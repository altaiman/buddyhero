<?php
if(trim($_POST['text1']) == '') {
	$hasError = true;
} else {
$name = trim($_POST['text1']);
}



if(trim($_POST['text4']) == '')  {
	$hasError = true;
} else if (!preg_match("/[0-9a-z_\.\-]+@[0-9a-z_\.\-]+\.[a-z]{2,4}/i",
trim($_POST['text4'])))  {
	$hasError = true;
} else {
	$email = trim ($_POST['text4']);
}






if(!isset($hasError)) {
	$emailto = 'book@buddyhero.com';
	$subject = 'BOOKING';
	$body = "name: $name \n\nemail: $email\n\n" .
	"subject: \n\ncomments:\n $comments";
	$headers = 'From: MyWEB' . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	mail ($emailto, $subject, $body, $headers);
	$emailsent = true;
}

if (isset($hasError)) {

   echo "<script type=\"text/javascript\">";
   echo "window.alert (\"Please compleate all feilds correctly.\")";
   echo "</script>";
   echo "Please compleate all feilds correctly.";
}






if ($emailsent == true) {
	echo "<script type=\"text/javascript\">";
	echo "window.alert (\"Successfully!\")";
	echo "</script>";
	
	echo "<p><strong>Successfully!</strong></p>";
}



?>