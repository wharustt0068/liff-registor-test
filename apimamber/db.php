<?php
    $con = mysqli_connect("localhost", "id13750600_userdbwaaw121", "/O\|XMLX3mDF3=@y", "id13750600_dbwaaw121");
    mysqli_set_charset($con,"utf8");

    // check connection
    if(mysqli_connect_error()){
        echo "Failed to connect to MySQL:" .mysqli_connect_error();
    }

?>