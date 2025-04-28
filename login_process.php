<?php
session_start(); // Start the session
require_once 'db_connect.php'; // Include database connection

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');
    $errors = [];

    // --- Validation ---
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }
    if (empty($password)) {
        $errors[] = "Password is required.";
    }

    // --- Proceed if basic validation passes ---
    if (empty($errors)) {
        $sql = "SELECT id, full_name, email, password_hash FROM users WHERE email = ?";

        if ($stmt = $conn->prepare($sql)) {
            $stmt->bind_param("s", $email);

            if ($stmt->execute()) {
                $result = $stmt->get_result();

                if ($result->num_rows == 1) {
                    $user = $result->fetch_assoc();

                    // Verify password
                    if (password_verify($password, $user['password_hash'])) {
                        // Password is correct, start a new session and store user data
                        // session_regenerate_id(); // Good practice to prevent session fixation

                        $_SESSION['loggedin'] = true;
                        $_SESSION['user_id'] = $user['id'];
                        $_SESSION['user_email'] = $user['email'];
                        $_SESSION['user_name'] = $user['full_name'];

                        // Redirect to a logged-in page (e.g., dashboard)
                        header("location: dashboard.php");
                        exit();
                    } else {
                        // Password is not valid
                        $errors[] = "Invalid email or password.";
                    }
                } else {
                    // Email doesn't exist
                    $errors[] = "Invalid email or password.";
                }
            } else {
                 $errors[] = "Oops! Something went wrong. Please try again later.";
                 // Log error: error_log("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
            }
            $stmt->close();
        } else {
             $errors[] = "Database error. Please try again later.";
             // Log error: error_log("Prepare failed: (" . $conn->errno . ") " . $conn->error);
        }
    }

    // --- If login failed or validation errors ---
    if (!empty($errors)) {
         $_SESSION['error_message'] = implode("<br>", $errors);
         header("location: login.html");
         exit();
    }

    // Close connection
    $conn->close();

} else {
    // Redirect to login page if accessed directly
    header("location: login.html");
    exit();
}
?>