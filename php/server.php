<?php
    require_once'function.php'
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>测试数据提交</title>
</head>
<body>
<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    if(empty($name)){
        die('用户名为空！');
    }
    if(empty($email)){
        die('用户邮箱为空！');
    }
    if(empty($subject)){
        die('用户建议主题为空！');
    }
    if(empty($message)){
        die('用户建议内容为空！');
    }

    $conn = connectDb();
    $conn->query('set names utf8');
    $conn->query("INSERT INTO myHomePage(name,email,subject,message) value('$name','$email','$subject','$message')");
    if(mysqli_errno()){
        echo mysqli_errno();
    }else{
    ?>
        <script type="text/javascript">
          alert("提交成功！3秒后自动跳转");
        </script>
        <?php
        header("location:../index.html");
    }
    ?>
   </body>
   </html>