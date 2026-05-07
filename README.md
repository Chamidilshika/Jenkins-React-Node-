# Jenkins React Node CI/CD Pipeline

A full-stack CI/CD pipeline project using Jenkins, React, and Node.js to automate build and integration processes.

## 📌 Project Overview

This project demonstrates a simple full-stack application integrated with a Jenkins CI pipeline.
Whenever code is pushed to GitHub, Jenkins automatically:

Clones the repository
Installs backend dependencies (Node.js)
Installs frontend dependencies (React)
Builds the React application

## 🧰 Tech Stack

⚛️ React (Frontend)
🟢 Node.js + Express (Backend)
⚙️ Jenkins (CI/CD Tool)
🐳 Docker 
📦 Git + GitHub (Version Control)

## ⚙️ Features

✔ CI pipeline using Jenkins
✔ Automatic dependency installation
✔ React build automation
✔ Node.js backend API integration
✔ GitHub integration
✔ Pipeline debugging experience

## 🚀 How to Run Locally

1️⃣ Clone the repository

git clone https://github.com/your-username/Jenkins-React-Node.git
cd Jenkins-React-Node

2️⃣ Run Backend

cd server
npm install
node index.js

Backend runs on:

http://localhost:5000

3️⃣ Run Frontend

cd client
npm install
npm start

Frontend runs on:

http://localhost:3000

## 🔄 Jenkins Pipeline Flow

GitHub webhook triggers Jenkins job
Jenkins pulls latest code
Installs backend dependencies
Installs frontend dependencies
Builds React application
Executes pipeline successfully


## 🎯 Learning Outcomes

This project helped me understand:

CI/CD concepts
Jenkins pipeline configuration
GitHub integration with Jenkins
Full-stack project structure
Automation of build processes