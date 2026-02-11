# REAL-T 🔍  
### Fake Review Detection Chrome Extension (BERT + Flask Backend)

REAL-T is a Chrome Extension that detects whether a selected review is **Fake** or **Real** using a fine-tuned BERT model deployed via a Flask backend API.

> 🟡 Reality is just one click away.

---

## 🚀 Features

- Detect Fake vs Real reviews in real-time
- Select any text on a webpage and analyze instantly
- BERT-based NLP classification
- Dynamic UI feedback (Red = Fake, Green = Real)
- REST API integration with Flask backend
- Built using Chrome Extension Manifest V3

---

## 🏗️ System Architecture

User selects text on webpage  
→ Content Script captures selected text  
→ Stored using Chrome Storage API  
→ Popup sends POST request to Flask backend  
→ BERT model processes text  
→ Prediction returned (Fake / Real)  
→ UI updates dynamically  

---

## 🛠️ Tech Stack

### Frontend (Chrome Extension)
- HTML
- CSS
- JavaScript
- Chrome Extension API (Manifest V3)
- Content Scripts
- Background Service Worker
- Chrome Storage API

### Backend
- Python
- Flask
- REST API
- Ngrok (for public tunneling during development)

### Machine Learning
- BERT (Transformer-based NLP model)
- Text preprocessing pipeline
- Binary classification (Fake vs Real)

---

## 📁 Project Structure

REAL-T/  
│  
├── manifest.json  
├── popup.html  
├── popup.js  
├── background.js  
├── content.js  
├── icon16.png  
├── icon48.png  
├── icon128.png  
│  
└── backend/  
  ├── app.py  
  └── bert_model / saved_model  

---

## ⚙️ How It Works

1. User highlights a review on any webpage.
2. Right-click → "Check Fake/Real Review".
3. Extension captures selected text.
4. Popup sends text to Flask backend via POST request.
5. Backend runs BERT inference.
6. Result is displayed with color-coded feedback.

---

## 🔧 Installation (Development Mode)

1. Clone the repository:
   git clone https://github.com/yourusername/real-t.git

2. Open Chrome → chrome://extensions/
3. Enable Developer Mode
4. Click "Load unpacked"
5. Select the project folder

---

## 🌐 Running Backend Server

cd backend  
python app.py  

If using ngrok:

ngrok http 5000  

Update API URL in popup.js accordingly.

---

## 📌 Future Improvements

- Deploy backend to cloud (AWS / Render / Railway)
- Add authentication
- Store review history
- Improve model accuracy with larger dataset
- Publish extension to Chrome Web Store

---

## 👨‍💻 Author

Tushar Singh  
B.Tech CSE – Bennett University  
Dean’s Merit List Awardee  

YouTube: https://www.youtube.com/@Tushar.Singh1811  

⭐ If you found this project interesting, consider giving it a star!
