<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit;
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

$name = isset($data['name']) ? htmlspecialchars(strip_tags(trim($data['name']))) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) && !empty($data['phone']) ? htmlspecialchars(strip_tags(trim($data['phone']))) : 'Not provided';
$message = isset($data['message']) ? htmlspecialchars(strip_tags(trim($data['message']))) : '';

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Please provide a valid email address."]);
    exit;
}


$to = "info@magtraders.pk"; 

$subject = "New Website Inquiry from " . $name;

$htmlContent = '
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; background-color: #F8FAFC; padding: 20px;">
    <div style="max-width: 600px; background: #fff; padding: 30px; border-radius: 8px; border: 1px solid #E2E8F0;">
        <h2 style="color: #0C1B3A;">New Lead from MAG Traders Website</h2>
        <p><strong>Name:</strong> ' . $name . '</p>
        <p><strong>Email:</strong> ' . $email . '</p>
        <p><strong>Phone:</strong> ' . $phone . '</p>
        <p><strong>Message:</strong><br>' . nl2br($message) . '</p>
    </div>
</body>
</html>
';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// DO NOT CHANGE THIS: Hosting providers require this to match your domain name
$headers .= "From: MAG Traders <info@magtraders.pk>" . "\r\n"; 
$headers .= "Reply-To: " . $name . " <" . $email . ">" . "\r\n";

// Try to send the email
$mailSent = @mail($to, $subject, $htmlContent, $headers);

if ($mailSent) {
    echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
} else {
    // If it fails, get the exact PHP error
    $errorMessage = error_get_last()['message'] ?? 'Unknown mail server error.';
    echo json_encode(["status" => "error", "message" => "Server mail error: " . $errorMessage]);
}
?>