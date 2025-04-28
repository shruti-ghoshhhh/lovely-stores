<?php
// Database Configuration
// IMPORTANT: Replace with your actual database credentials!
define('DB_SERVER', 'localhost'); // Usually 'localhost'
define('DB_USERNAME', 'root');     // Your MySQL username (default is often 'root' for XAMPP/WAMP)
define('DB_PASSWORD', '');         // Your MySQL password (default is often empty for XAMPP/WAMP)
define('DB_NAME', 'beauty_website_db'); // The database name you created

// Attempt to connect to MySQL database
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn->connect_error) {
    // In production, you might want to log this error instead of displaying it
    die("ERROR: Could not connect. " . $conn->connect_error);
}

// Optional: Set character set to utf8mb4 for better compatibility
$conn->set_charset("utf8mb4");

// Note: We don't close the connection here.
// It will be closed automatically when the script finishes,
// or we can close it explicitly in the processing scripts if needed.
?>