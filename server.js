const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/feedback', (req, res) => {
  const { name, message } = req.body;
  const content = `Tên: ${name}\nGóp ý: ${message}\n---\n`;
  fs.appendFile('feedback.txt', content, (err) => {
    if (err) return res.status(500).send('Lỗi khi lưu góp ý');
    res.send('✅ Góp ý đã được ghi nhận. Cảm ơn bạn!');
  });
});

app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});