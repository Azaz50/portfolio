<?php
// This PHP file is now a proxy to Web3Forms API for contact form submissions
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect and sanitize inputs
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name']), ENT_QUOTES, 'UTF-8') : '';
    $email = isset($_POST['email']) ? filter_var(htmlspecialchars(trim($_POST['email']), ENT_QUOTES, 'UTF-8'), FILTER_SANITIZE_EMAIL) : '';
    $mobile = isset($_POST['mobile']) ? htmlspecialchars(trim($_POST['mobile']), ENT_QUOTES, 'UTF-8') : '';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8') : '';

    // Validate required fields
    if (empty($name) || empty($email) || empty($mobile) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email format.']);
        exit;
    }
    if (!preg_match('/^[0-9]{10}$/', $mobile)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid mobile number.']);
        exit;
    }

    // Prepare data for Web3Forms
    $data = [
        'access_key' => '5682fa48-f05c-4638-9881-a21b6657f2ad',
        'name' => $name,
        'email' => $email,
        'mobile' => $mobile,
        'message' => $message
    ];

    $json = json_encode($data);

    // Send request to Web3Forms API
    $ch = curl_init('https://api.web3forms.com/submit');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json'
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // Output Web3Forms response
    echo $response;
    exit;
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
    exit;
}
