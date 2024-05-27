Notification Service
This project is a notification service built using Node.js/Express.js. It allows you to send notifications via email.

Features
Email Sending: Send email notifications to users.
Simple API: Easy-to-use API for sending notifications.
Setup
To set up the project locally, follow these steps:

//Clone the repository:
bash
git clone https://github.com/Arish-Varghese/notification-service.git

//Install dependencies:
cd notification-service
npm install

//Set up your environment variables. Create a .env file in the root directory and add the following:
SENDGRID_API_KEY=your_sendgrid_api_key
Replace your_sendgrid_api_key with your actual SendGrid API key.

//Start the server:
npm start
The server will start running at http://localhost:3000.
API Endpoints
POST /api/send-email: Send an email notification.

//Request Example
POST /api/send-email
{
  "to": "recipient@example.com",
  "subject": "Test Notification",
  "text": "This is a test notification."
}

Technologies Used:
Node.js
Express.js
SendGrid

Author
Arish Varghese

