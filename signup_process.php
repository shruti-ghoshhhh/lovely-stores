<?php
session_start(); // Start the session to store messages
require_once 'db_connect.php'; // Include the database connection

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data and perform basic sanitization
    $fullname = trim($_POST['fullname'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');
    $confirm_password = trim($_POST['confirm_password'] ?? '');
    $terms = isset($_POST['terms']); // Check if checkbox was checked

    $errors = [];

    // --- Validation ---
    if (empty($fullname)) {
        $errors[] = "Full Name is required.";
    }
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }
    if (empty($password)) {
        $errors[] = "Password is required.";
    } elseif (strlen($password) < 6) { // Example: minimum length
        $errors[] = "Password must be at least 6 characters long.";
    }
    if ($password !== $confirm_password) {
        $errors[] = "Passwords do not match.";
    }
    if (!$terms) {
        $errors[] = "You must agree to the Terms & Conditions.";
    }

    // --- Check if email already exists ---
    if (empty($errors)) {
        $sql_check = "SELECT id FROM users WHERE email = ?";
        if ($stmt_check = $conn->prepare($sql_check)) {
            $stmt_check->bind_param("s", $email);
            $stmt_check->execute();
            $stmt_check->store_result();

            if ($stmt_check->num_rows > 0) {
                $errors[] = "This email address is already registered.";
            }
            $stmt_check->close();
        } else {
            $errors[] = "Database error (check). Please try again later.";
             // Log the actual error: error_log("Prepare failed: (" . $conn->errno . ") " . $conn->error);
        }
    }

    // --- Insert user if no errors ---
    if (empty($errors)) {
        // Hash the password securely
        $password_hash = password_hash($password, PASSWORD_DEFAULT);

        $sql_insert = "INSERT INTO users (full_name, email, password_hash) VALUES (?, ?, ?)";

        if ($stmt_insert = $conn->prepare($sql_insert)) {
            // Bind variables to the prepared statement as parameters
            $stmt_insert->bind_param("sss", $fullname, $email, $password_hash);

            // Attempt to execute the prepared statement
            if ($stmt_insert->execute()) {
                // Redirect to login page with success message
                $_SESSION['success_message'] = "Registration successful! Please log in.";
                header("location: login.html");
                exit();
            } else {
                $_SESSION['error_message'] = "Something went wrong. Please try again later.";
                 // Log the actual error: error_log("Execute failed: (" . $stmt_insert->errno . ") " . $stmt_insert->error);
            }
            $stmt_insert->close();
        } else {
             $_SESSION['error_message'] = "Database error (insert). Please try again later.";
              // Log the actual error: error_log("Prepare failed: (" . $conn->errno . ") " . $conn->error);
        }
    }

    // --- If there were errors, store them in session and redirect back ---
    if (!empty($errors)) {
        $_SESSION['error_message'] = implode("<br>", $errors);
        // Optionally, store form data to repopulate fields (more complex)
        // $_SESSION['form_data'] = $_POST;
        header("location: signup.html");
        exit();
    }

    // Close connection
    $conn->close();

} else {
    // Redirect to signup page if accessed directly without POST method
    header("location: signup.html");
    exit();
}
?>