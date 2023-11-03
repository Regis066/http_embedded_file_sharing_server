const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for storage
  },
});

const upload = multer({ storage: storage });

app.post('/uploads', upload.single('file'), (req, res) => {
  // File uploaded and processed successfully
  res.send('File uploaded and processed.');
  console.log("File received🤣🤣🤣😂😂🔥");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
