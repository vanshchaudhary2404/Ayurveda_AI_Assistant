# 🌿 AI Assistant for Ayurveda Herbal Guidance

A dual-mode AI-powered assistant that helps users identify Ayurvedic herbs via camera image recognition and get personalized herb recommendations based on symptoms using NLP.  
Built under the Ministry of AYUSH theme for health-tech innovation.

---

## 📌 Features

- **📷 Image-based herb identification**  
  Users can click or upload photos of herbs; the AI model recognizes the herb and provides usage details.

- **📝 Symptom-based herb recommendation**  
  Users type symptoms like "cold and sore throat"; the assistant suggests appropriate Ayurvedic herbs with usage instructions.

- **🌐 Responsive Web Interface**  
  Built using React, suitable for both desktop and mobile use.

---

## 🚀 Tech Stack

| Layer        | Technology                          |
|--------------|--------------------------------------|
| Frontend     | React, Tailwind CSS                  |
| Backend      | Python Flask                         |
| AI - Image   | TensorFlow (MobileNetV2)             |
| AI - NLP     | spaCy, Custom Rule Engine            |
| Image Tools  | OpenCV                               |
| Data Store   | Firebase / JSON / SQLite             |
| Deployment   | Vercel (Frontend), Render / Heroku (Backend) |

---

## 🧠 How It Works

### 🔍 1. Herb Identification (Image)
- User uploads/captures a herb image
- Image is sent to Flask API
- TensorFlow model predicts herb
- App displays its name, uses, dosage, and precautions

### ✍️ 2. Symptom Mapping (Text)
- User enters symptoms via form
- Backend parses text using spaCy
- Matches symptoms to predefined herb mappings
- Displays relevant herbs and usage

---

## 📁 Folder Structure

Ayurveda-AI-Assistant/
├── frontend/ # React frontend
│ └── camera-upload.jsx # Camera input
├── backend/ # Flask backend
│ ├── app.py
│ ├── models/ # Trained image model
│ └── utils/
│ └── nlp_rule_engine.py
├── data/
│ └── symptom_herb_mapping.json
├── README.md
└── requirements.txt


---

## 💾 Dataset Sources

- 📖 Ministry of AYUSH, CCRAS publications, and classical Ayurvedic texts
- 📷 Herb image datasets from:
  - [PlantVillage Dataset](https://github.com/spMohanty/PlantVillage-Dataset)
  - [Kaggle](https://www.kaggle.com)
  - Custom-scraped images (Bing API)

---

## 🛠 Installation
Coming soon 

### Backend (Flask)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

## Future Scope
Voice input and response using speech recognition
Language support: Hindi, Marathi, Tamil, etc.
Mobile app with offline support (TensorFlow Lite + React Native)
Integration with Ayushman Bharat Digital Health Mission (ABHA ID)

## Contributors
Vansh Chaudhary,
