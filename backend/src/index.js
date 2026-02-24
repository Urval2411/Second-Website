const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const ExcelJS = require("exceljs");

const app = express();
const PORT = process.env.PORT || 5000;

// Path to persistent message store
const DATA_DIR = path.join(__dirname, "..", "data");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

// Ensure data directory and file exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(MESSAGES_FILE)) fs.writeFileSync(MESSAGES_FILE, "[]", "utf8");

function loadMessages() {
  try {
    return JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8"));
  } catch {
    return [];
  }
}

function saveMessages(messages) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf8");
}

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/messages", (req, res) => {
  const { name, phone, message } = req.body || {};

  if (!name || !phone || !message) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields: name, phone, message",
    });
  }

  const newMessage = {
    id: Date.now(),
    name,
    phone,
    message,
    receivedAt: new Date().toISOString(),
  };

  const messages = loadMessages();
  messages.push(newMessage);
  saveMessages(messages);

  console.log("New message saved:", newMessage);
  res.status(201).json({ success: true });
});

app.get("/api/messages/export", async (req, res) => {
  const messages = loadMessages();

  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Urval Shah Portfolio";
  workbook.created = new Date();

  const sheet = workbook.addWorksheet("Messages");

  // Column definitions with widths
  sheet.columns = [
    { header: "ID", key: "id", width: 16 },
    { header: "Name", key: "name", width: 24 },
    { header: "Phone / Contact", key: "phone", width: 32 },
    { header: "Message", key: "message", width: 60 },
    { header: "Received At", key: "receivedAt", width: 24 },
  ];

  // Style the header row
  const headerRow = sheet.getRow(1);
  headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
  headerRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF3B5BDB" },
  };
  headerRow.alignment = { vertical: "middle", horizontal: "center" };
  headerRow.height = 22;

  // Add data rows
  messages.forEach((msg) => {
    const row = sheet.addRow({
      id: msg.id,
      name: msg.name,
      phone: msg.phone,
      message: msg.message,
      receivedAt: new Date(msg.receivedAt).toLocaleString(),
    });
    row.alignment = { vertical: "top", wrapText: true };
  });

  // Alternate row shading
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1 && rowNumber % 2 === 0) {
      row.eachCell((cell) => {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFF0F4FF" },
        };
      });
    }
  });

  // Freeze the header row
  sheet.views = [{ state: "frozen", ySplit: 1 }];

  const filename = `messages-${new Date().toISOString().split("T")[0]}.xlsx`;
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);

  await workbook.xlsx.write(res);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
  console.log(`Export messages: http://localhost:${PORT}/api/messages/export`);
});
