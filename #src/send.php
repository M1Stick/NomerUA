<?php
    
    $name = $_POST["user__name"];
    $phone = $_POST["user__phone"];
    $numbers = $_POST["user__numbers"];

    
    if($name=="" or $email=="" or $phone=="" or $numbers==""){ 
        echo "Заполните все поля";
    }

    else{
        
        $to = "sauronchik26@gmail.ru"; 
        $subject = "Письмо с обратной связи"; 
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <$numbers>\r\n";

        
        $message .= "Имя пользователя: ".$name."\n";
        $message .= "Телефон: ".$phone."\n";
        $message .= "Пользователь выбрал номер: " + .$numbers."\n";

        

        $send = mail($to, $subject, $message, $headers);

        
        if ($send == "true")
        {
            echo "Ваше сообщение отправлено. Мы ответим вам в ближайшее время.\r\n";
        }
        
        else
        {
            echo "Не удалось отправить, попробуйте снова!";
        }
    }

?>