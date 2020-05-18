<?php
include('db.php');

    $data = "U1bc5e8b9661c28a9b92eccacc2f93817";
  
  $sql =  "SELECT * FROM tb_user WHERE user_idline ='$data' "; 
  $result = mysqli_query($con, $sql);
  while($row = mysqli_fetch_array($result))
  {
    $id = $row['user_idline'];
    $bank = $row['user_bank'];
    $total = $row['user_total'];
  }
       $arr = array('userId_line' =>$id, 'bank' => $bank, 'total' => $total, 'status' => 'member');

        echo json_encode($arr);
?>