<?php
session_start(); // Start session

// Display and clear error messages
$error_message = '';
if (isset($_SESSION['error_message'])) {
    $error_message = '<div class="message error">' . $_SESSION['error_message'] . '</div>';
    unset($_SESSION['error_message']); // Clear the message
}
// We typically don't show success messages on the signup page itself
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="page-container">
        <div class="form-container">
            <!-- Signup Form -->
            <form id="signup-form" class="auth-form" method='post' action='signup_process.php'>
                <h2>Create Your Account</h2>
                 <p class="form-subtitle">Join us and discover your glow!</p>

                <div class="input-group">
                    <label for="signup-name">Full Name</label>
                    <input type="text" id="signup-name" name="fullname" placeholder="Your Full Name" required>
                </div>
                <div class="input-group">
                    <label for="signup-email">Email</label>
                    <input type="email" id="signup-email" name="email" placeholder="you@example.com" required>
                </div>
                <div class="input-group">
                    <label for="signup-password">Password</label>
                    <input type="password" id="signup-password" name="password" placeholder="Create a strong password" required>
                </div>
                 <div class="input-group">
                    <label for="signup-confirm-password">Confirm Password</label>
                    <input type="password" id="signup-confirm-password" name="confirm_password" placeholder="Confirm your password" required>
                </div>
                 <div class="form-options terms">
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">I agree to the <a href="#">Terms & Conditions</a></label>
                </div>
                <button type="submit" class="submit-button">Sign Up</button>

                 <p class="social-login-text">Or sign up with</p>
                 <div class="social-login">
                   <button type="button" class="social-button google">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.03v2.8h5.21c-.43 1.81-2.12 3.1-4.18 3.1-2.52 0-4.57-2.05-4.57-4.57s2.05-4.57 4.57-4.57c1.17 0 2.24.46 3.06 1.2l2.19-2.19C15.7 5.06 13.97 4 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c4.19 0 7.56-3.17 7.95-7.29a7.1 7.1 0 0 0-.15-1.61z"/></svg>
                       Google
                   </button>
                   <button type="button" class="social-button facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.9 3.8-3.9c1.1 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33V22c4.78-.75 8.44-4.9 8.44-9.9V12.06c0-5.53-4.5-10.02-10-10.02z"/></svg>
                       Facebook
                   </button>
               </div>

                <p class="switch-page-link">
                    Already have an account? <a href="login.html">Login Here</a>
                </p>
            </form>
        </div>
    </div>

     <!-- Optional: Add basic form submission handling prevention for demo -->
    <script>
        document.getElementById('signup-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Signup form submitted (demo)');
            alert('Signup Submitted (Demo)! Check console.');
            // Add your actual signup logic here
        });
    </script>
</body>
</html>