# Pranshu Jha Portfolio



# 📩 Contact Form to Google Sheets Integration

---

## 🔧 Setup Instructions

### 1. 📝 Create Your Google Sheet

1. Open [Google Sheets](https://sheets.google.com/)
2. Create a new sheet and name the first tab (e.g., `ContactData`)
3. In row 1, define the headers:


Name | Email | Subject | Message | Timestamp


---

### 2. ⚙️ Add Google Apps Script

1. In the sheet, go to `Extensions > Apps Script`
2. Delete everything and paste:

```js
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      throw new Error("Missing required fields");
    }

    // Append to sheet
    sheet.appendRow([
      data.name,
      data.email,
      data.subject || "", // Default
      data.message,
      new Date()
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" })
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error" })
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

```

3. Click Deploy > Manage deployments
4. Create a new deployment
5. Type: Web app
6. Execute as: Me
7. Who has access: Anyone
8. Click Deploy and copy the Web App URL


3. 🚀 Add the Web URL to Vercel Environment
- Go to Vercel Dashboard
- Select your project
- Go to Settings > Environment Variables

Add:

Name: NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEB_URL
Value: [PASTE_YOUR_WEB_APP_URL_HERE]