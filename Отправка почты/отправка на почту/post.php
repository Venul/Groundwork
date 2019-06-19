<?
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="lsn.prizrak@list.ru";  // e-mail админа 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды  
$backurl="http://currenswatch.com/order";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
$email=$_POST['email']; 
  
 
// Проверяем валидность e-mail 
 
 
$msg=" 
  
Имя: $name
  
E-mail: $email 
  
"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $name", "$msg"); 
 
  
 
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 1); 
</script>";  
exit; 
 

 
?>