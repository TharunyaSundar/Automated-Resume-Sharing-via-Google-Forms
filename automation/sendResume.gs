function sendResume(e) {
  if (!e || !e.values) {
    Logger.log("Error: Form submission event data is missing.");
    return;
  }
  var email = e.values[3]; // Adjust the index based on the email field's column
  var name = e.values[2];
  var subject = "Hi " + name + ", here's my resume!";
  var body = `
Hi ${name},

It was so great meeting you at the networking event! I really enjoyed our conversation and found your insights super helpful, it got me thinking about so many new ideas and opportunities.

I’m reaching out because I’d love to get your thoughts on my resume (attached here). I’m preparing to apply for software developer roles, and any feedback you can share, whether it’s on keywords I might’ve missed, ways to present my projects better, or even quick skills I could pick up and would mean a lot to me.

Also, if you’ve come across any cool AI tools or resources lately, I’d love to hear about them. I’m always looking for ways to stay updated and keep learning new things in the tech space.

Thanks a ton for taking the time to help—I really appreciate it! Let’s stay in touch on LinkedIn: [My LinkedIn Profile](https://www.linkedin.com/in/tharunya-sundar-14b47623a/).

Looking forward to hearing from you!

Best,  
Tharunya Sundar
  `;;
  
  // Add the resume file
  var file = DriveApp.getFilesByName("ResumeTharunyaSundar.pdf").next(); // Ensure your file is uploaded to Google Drive
  MailApp.sendEmail({
    to: email,
    subject: subject,
    body: body,
    attachments: [file]
  });
}

// Trigger function on form submit
function setupTrigger() {
  ScriptApp.newTrigger("sendResume")
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onFormSubmit()
    .create();
}
