# Automated-Resume-Sharing-via-Google-Forms

Overview

I created this project to streamline the process of sharing my resume with Binghamton University alumni from School of Computing during networking events. Instead of manually emailing each person, I developed an automated system using Google Forms, Google Apps Script, and QR codes to facilitate the process.

Project Features

Google Form Integration: Alumni can enter their email and name via a Google Form.

Automated Email Response: Upon form submission, they receive an automated email containing my resume and a thank-you note.

QR Code Generation: A QR code is generated for easy access to the Google Form during networking events.

How It Works

Form Submission:

Alumni fill out the Google Form: Google Form Link.

Their name and email address are captured.

Automated Email:

Google Apps Script sends an email containing:

A personalized message

My resume as an attachment

A link to connect on LinkedIn

QR Code:

A QR code for the Google Form is generated and can be used during networking events.

Installation Instructions

1. Google Form Setup:

Create a Google Form with fields for name and email.
Link the form to a Google Spreadsheet.

2. Google Apps Script:

Open the spreadsheet linked to the form.
Navigate to Extensions > Apps Script and paste the code from the automation folder

3. Trigger Setup:
Run the setupTrigger() function to enable email automation.

4. Generating QR Code:
Run the generateQRCode() function to create a QR code for the form.

Usage

Share the QR code during networking events for quick form access.
Collect feedback from alumni efficiently without manual effort.

Files
sendResume.gs - Google Apps Script to automate email sending.
qrCodeGenerator.gs - Script to generate QR codes.
resume.pdf - My resume file uploaded to Google Drive.

This project showcases how automation can simplify networking and job-seeking processes, making it easier to gather feedback and stay connected.
