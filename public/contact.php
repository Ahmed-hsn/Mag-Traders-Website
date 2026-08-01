<?php
// 1. Allow cross-origin requests if frontend is hosted separately
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 2. Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit;
}

// 3. Get the JSON payload sent by React
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// 4. Sanitize and validate inputs
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

// 5. Setup Email Data
$to = "info@magtraders.pk";
$subject = "New Website Inquiry from " . $name;

// 6. Build the highly-formatted HTML Email UI
$htmlContent = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Lead from MAG Traders</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: Helvetica, Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 40px 0;">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #E2E8F0;">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" style="background-color: #0C1B3A; padding: 35px 20px;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">MAG <span style="color: #C9A84C;">TRADERS</span></h1>
                            <p style="color: #8fa1c4; margin: 8px 0 0 0; font-size: 14px;">New Website Contact Form Submission</p>
                        </td>
                    </tr>

                    <!-- Body Content -->
                    <tr>
                        <td style="padding: 40px 40px 20px 40px;">
                            <h2 style="color: #0C1B3A; margin: 0 0 25px 0; font-size: 20px;">You have a new message!</h2>
                            
                            <!-- Detail: Name -->
                            <div style="margin-bottom: 20px;">
                                <p style="margin: 0 0 5px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: bold;">Full Name</p>
                                <p style="margin: 0; font-size: 16px; color: #1e293b;">' . $name . '</p>
                            </div>

                            <!-- Detail: Email -->
                            <div style="margin-bottom: 20px;">
                                <p style="margin: 0 0 5px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: bold;">Email Address</p>
                                <p style="margin: 0; font-size: 16px; color: #1e293b;"><a href="mailto:' . $email . '" style="color: #C9A84C; text-decoration: none;">' . $email . '</a></p>
                            </div>

                            <!-- Detail: Phone -->
                            <div style="margin-bottom: 20px;">
                                <p style="margin: 0 0 5px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: bold;">Phone Number</p>
                                <p style="margin: 0; font-size: 16px; color: #1e293b;">' . $phone . '</p>
                            </div>

                            <!-- Detail: Message -->
                            <div style="margin-bottom: 20px; background-color: #F8FAFC; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                                <p style="margin: 0 0 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: bold;">Client Message</p>
                                <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6; white-space: pre-wrap;">' . $message . '</p>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center" style="padding: 25px 40px; background-color: #f1f5f9; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0; font-size: 12px; color: #64748b;">This email was automatically generated from the MAG Traders website contact form.</p>
                            <p style="margin: 5px 0 0 0; font-size: 12px; color: #94a3b8;">Timestamp: ' . date('Y-m-d H:i:s') . '</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
';

// 7. Setup Mail Headers (Critical for HTML and Anti-Spam)
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// The From address should ideally be from your actual domain to avoid going to spam
$headers .= "From: MAG Traders Website <noreply@magtraders.pk>" . "\r\n";

// Setting Reply-To allows you to hit "Reply" in your email client and reply directly to the customer
$headers .= "Reply-To: " . $name . " <" . $email . ">" . "\r\n";

// 8. Send the email and return success/error to React
if (mail($to, $subject, $htmlContent, $headers)) {
    echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
} else {
    // If mail fails, usually it's a server configuration issue on the hosting provider side
    echo json_encode(["status" => "error", "message" => "Server failed to send email. Please try again later."]);
}
?>