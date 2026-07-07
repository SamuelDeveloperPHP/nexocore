<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Caso precisem de CORS no dev
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require 'vendor/autoload.php';
require __DIR__ . '/mail_config.php'; // credenciais SMTP (fora do controle de versão)

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$company = $data['company'] ?? '';
$message = $data['message'] ?? '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Configurações do Servidor SMTP
    $mail->isSMTP();
    $mail->Host       = MAIL_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = MAIL_USERNAME;
    $mail->Password   = MAIL_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Usar SSL
    $mail->Port       = MAIL_PORT;

    $mail->CharSet = 'UTF-8';

    // Remetente (deve ser o mesmo e-mail do Username na Hostinger)
    $mail->setFrom(MAIL_USERNAME, 'Site NexoCore');

    // Destinatário (para quem vai chegar o e-mail de orçamento)
    $mail->addAddress(MAIL_TO);
    
    // Responder para (o e-mail de quem preencheu o formulário)
    $mail->addReplyTo($email, $name);

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = "Novo Contato pelo Site: $name";
    
    $body = "<h2>Nova solicitação de demonstração / orçamento</h2>
             <p><strong>Nome:</strong> " . htmlspecialchars($name) . "</p>
             <p><strong>E-mail:</strong> " . htmlspecialchars($email) . "</p>
             <p><strong>Empresa:</strong> " . htmlspecialchars($company) . "</p>
             <br>
             <p><strong>Mensagem:</strong></p>
             <p>" . nl2br(htmlspecialchars($message)) . "</p>";

    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
}
