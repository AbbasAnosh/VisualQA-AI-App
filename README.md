# Visual Question Answering App

This repository contains a Visual Question Answering (VQA) application built using FastAPI for the backend, React for the frontend, and Tailwind CSS for styling. The app leverages the ViLT model from Hugging Face, specifically the [ViLT-B/32 fine-tuned for VQA](https://huggingface.co/dandelin/vilt-b32-finetuned-vqa).

## Installation

To get started, you'll need to install the following packages:

- `fastapi`
- `Pillow`
- `torch`
- `transformers`
- `uvicorn`

You can install these packages using pip:

```bash
pip install fastapi Pillow torch transformers uvicorn
```

Additionally, ensure you have Node.js and npm installed to manage the React frontend dependencies.

## Files

- **main.py**: This is the main application file where the FastAPI app is defined and run.
- **model.py**: This file includes the final implementation of the model logic used in the app.
- **frontend/**: This directory contains the React frontend code, styled with Tailwind CSS.

## Running the App

### Backend

To run the FastAPI backend, use the following command:

```bash
uvicorn main:app --reload
```

### Frontend

Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
npm install
```

Then, start the React development server:

```bash
npm start
```

## Usage

Once both the backend and frontend servers are running, you can interact with the VQA model through the web interface. The app uses the ViLT model to process images and generate responses to visual questions.
