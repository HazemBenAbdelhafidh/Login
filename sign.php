<?php
    $day=$_POST['day'];
    $month=$_POST['month'];
    $year=$_POST['year'];
    $nom=$_POST['username'];
    $email=$_POST['email'];
    $pw=$_POST['password'];
    $phone=$_POST['phone'];
    mysql_connect("localhost","root","");
    mysql_select_db("login");
    $req1="select * from `sign up` where email='$email'";
    $res1=mysql_query($req1);
    if(mysql_num_rows($res1)>0){
        echo "email est déja utilise";
    }
    else{
        $req2="insert into `sign up` values('$nom','$email','$phone','$pw','$year-$month-$day')";
        $res2=mysql_query($req2);
        if(mysql_affected_rows()>0){
            echo "sign up reussite";
        }
        else{
            echo "you already have account with this Email";
        }
    }
    mysql_close();
?>
