<?php
session_start(); // Resume session

// Check if the user is logged in, otherwise redirect to login page
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("location: login.html");
    exit;
}

// Get user's name from session - Use htmlspecialchars for security
$userName = isset($_SESSION['user_name']) ? htmlspecialchars($_SESSION['user_name']) : 'User';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard | Aura Beauty</title>
    <link rel="stylesheet" href="style.css"> <!-- You might want a different CSS -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        /* Simple dashboard styles */
        body {
             background: linear-gradient(135deg, #fce3ec, #f8e0f3);
             font-family: 'Poppins', sans-serif;
             display: flex;
             justify-content: center;
             align-items: center;
             min-height: 100vh;
             color: #333;
        }
        .dashboard-container {
            background-color: #fff;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 500px;
        }
        .dashboard-container h1 {
            color: #e73c7e;
            margin-bottom: 20px;
        }
        .dashboard-container p {
            margin-bottom: 30px;
            font-size: 1.1em;
        }
        .logout-button {
            display: inline-block;
            padding: 10px 25px;
            background-color: #e73c7e;
            color: white;
            border: none;
            border-radius: 8px;
            text-decoration: none;
            font-size: 1em;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .logout-button:hover {
            background-color: #c22a65;
        }
    </style>
</head>
<body>
    <div class="dashboard-container">
        <h1>Welcome, <?php echo $userName; ?>!</h1>
        <p>You have successfully logged into your Aura Beauty account.</p>
        <p>This is your dashboard area. You can add more content here.</p>
        <a href="logout.php" class="logout-button">Logout</a>
    </div>
</body>
</html>