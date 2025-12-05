# Birthday Countdown 🎉

A lightweight **static Birthday Countdown website** hosted on **AWS S3**. This project displays a real-time countdown showing **days, weeks, hours, minutes, and seconds** remaining until a selected birthday. Perfect for personal pages, event reminders, or celebratory landing pages—all without any backend.

## 🚀 Features

- Real-time countdown
- Fully static & serverless
- Lightweight & fast
- Easy customisation
- Low-cost hosting

## 🏗️ Architecture Overview

This project uses a simple, serverless architecture:

```
    User Browser
        |
        V
   S3 Static Website Hosting
        |
        V
   Client-side Script  (HTML • CSS • JavaScript - Countdown Logic)
        |
        V
   Birthday Countdown
```

-> No Lambda, no API Gateway, no DynamoDB—just front-end logic running directly in the user's browser.

## 📁 Creation Steps

### ✅ Project Setup:

1.  Create project structure
2.  Build the HTML file (.html)
3.  Add styling (.css)
4.  Add countdown JavaScript (.js)
5.  Test locally (development)

### 🚀 Deployment Steps:

6.  Create an AWS S3 bucket
7.  Enable static website hosting
8.  Upload project files (HTML + CSS + JS)
9.  Make files public
10. Access the website (S3 Static Web Hosting)

-> Refer to the full documentation for detailed implementation steps.

📄Documentation: [documentation.pdf](https://github.com/user-attachments/files/23960316/s3-static-bday-countdown.pdf)

## 📅 Example Countdown Output

```
23 days
3 weeks
552 hours
33,120 minutes
1,987,200 seconds
```

## 🌐 Live Page URL

Livepage URL: [Birthday Countdown LivePage](http://s3-static-bday-countdown.s3-website.ap-south-1.amazonaws.com)

## 🖼️ Preview

![Image](https://github.com/user-attachments/assets/fd5871ba-c334-446b-82aa-ed5bdaf40844)
