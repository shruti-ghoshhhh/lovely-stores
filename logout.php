<?php
session_start(); // Resume the session

// Unset all session variables
$_SESSION = array();

// Destroy the session
session_destroy();

// Redirect to login page
header("location: login.html");
exit;
?>