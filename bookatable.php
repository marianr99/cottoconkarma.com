<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Start output buffering
ob_start();

// Include PHPMailer classes
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Set timezone
date_default_timezone_set('Asia/Dhaka');

// Debug log (optional)
$debug_log = __DIR__ . '/logs/form_debug.log';
$log_dir = dirname($debug_log);
if (!is_dir($log_dir)) {
    mkdir($log_dir, 0755, true);
}
if (!is_writable($log_dir)) {
    chmod($log_dir, 0755);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $form_type = htmlspecialchars(trim($_POST['form_type'] ?? ''));

    $form_configs = [
        'regular_booking_form' => ['time', 'date', 'personName', 'email'],
        'spacial_request_form' => ['time', 'date', 'personName', 'email'],
        'booking_form' => ['number', 'personName', 'date', 'time'],
        'subscribe_form' => ['email'],
        'reserve_form' => ['phone', 'date', 'time', 'yourName', 'emailAddress', 'Guests'],
        'quote_form' => ['username', 'email', 'message'],
        'contact_form' => ['name', 'subject', 'email', 'message'],
        'login_form' => ['name', 'password'],
    ];

    error_log("Received form_type: $form_type\n", 3, $debug_log);

    if (empty($form_type) || !isset($form_configs[$form_type])) {
        echo "Invalid form type.";
        ob_end_flush();
        exit;
    }

    $expected_fields = $form_configs[$form_type];
    $form_data = [];
    $errors = [];

    foreach ($expected_fields as $field) {
        $raw_value = $_POST[$field] ?? '';
        $value = htmlspecialchars(trim($raw_value));

        if (($field === 'email' || $field === 'emailAddress') &&
            (!filter_var($value, FILTER_VALIDATE_EMAIL))) {
            $errors[] = "Invalid email address.";
        } elseif (($field === 'number' || $field === 'phone') &&
            (!preg_match("/^[\+]?[0-9\s\-]{8,}$/", $value))) {
            $errors[] = "Invalid phone number.";
        } elseif (($field === 'Guests' || $field === 'person') &&
            (!is_numeric($value) || (int)$value <= 0)) {
            $errors[] = "Invalid guest count.";
        } elseif (empty($value)) {
            $errors[] = ucfirst($field) . " is required.";
        }

        $form_data[$field] = $value;
    }

    if (!empty($errors)) {
        echo "Error: " . implode(" ", $errors);
        ob_end_flush();
        exit;
    }

    // Send email with PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'mail.smtp.com';  // Enter Your SMTP Host           
        $mail->SMTPAuth   = true;
        $mail->Username   = 'test@smtp.com';    // Enter Your SMTP userName  
        $mail->Password   = 'demo_password';    // Enter Your SMTP Password     
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Recipients
        $mail->setFrom('test@smtp.com', 'Website Form'); // Enter Your SMTP mail  
        $mail->addAddress('your-email@gmail.com');   // Enter Your Email      

        // Content
        $mail->isHTML(true);
        $mail->Subject = ucfirst(str_replace('_', ' ', $form_type)) . " Submission";

        $body = "";
        foreach ($form_data as $key => $value) {
            $body .= ucfirst($key) . ": $value\n";
        }

        $mail->Body = $body;

        $mail->send();
        header("Location: thankyou.html");
        ob_end_flush();
        exit;
    } catch (Exception $e) {
        error_log("Mailer Error: {$mail->ErrorInfo}\n", 3, $debug_log);
        echo "Message could not be sent. Try again later.";
        ob_end_flush();
    }
} else {
    echo "Invalid request.";
    ob_end_flush();
}
?>
