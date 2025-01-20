function generateQRCode() {
  var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSe9B-WgAtsyxGV9DpM_3G05FOSK23b5KnFTusGb0Oqa15clSA/viewform?usp=sharing"; // Replace with your Google Form link
  var qrCodeURL = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(formURL);

  try {
    // Fetch the QR code image
    var response = UrlFetchApp.fetch(qrCodeURL);
    var blob = response.getBlob().setName("GoogleFormQRCode.png");

    // Save the QR code to Google Drive
    var file = DriveApp.createFile(blob);
    Logger.log("QR code saved to Drive: " + file.getUrl());
    return file.getUrl(); // Return the URL to the QR code
  } catch (e) {
    Logger.log("Error generating QR code: " + e.message);
  }
}
