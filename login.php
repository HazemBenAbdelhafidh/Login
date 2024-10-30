<?php

$nom = $_POST['username'];
$email = $_POST['email'];
$pw = $_POST['password'];
mysql_connect("localhost", "root", "");
mysql_select_db("login");


$req1 = "SELECT * FROM Login WHERE email='$email' and Password='$pw'";
$res1 = mysql_query($req1);
if (mysql_num_rows($res1) >= 0) {
    echo "logging in";
} else {
        echo "you are not signed up with this email or wrong password/email";
}

mysql_close();
?>
