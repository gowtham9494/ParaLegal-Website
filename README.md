# ParaLegal Website

A legal tech web application for case management, built with a **FastAPI** backend and **Next.js** frontend. Includes a library of standardized legal contract templates sourced from [CommonPaper](https://github.com/CommonPaper).

---

## Features

- Case management REST API
- Authentication endpoints
- 12 standardized legal contract templates (CC BY 4.0)

---

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | Next.js (TypeScript)              |
| Backend  | FastAPI (Python 3)                |
| Validation | Pydantic v2                    |
| Server   | Uvicorn                           |

---

## Project Structure

```
ParaLegal-Website/
├── backend/              # FastAPI application
│   ├── app/
│   │   ├── routers/
│   │   │   ├── auth.py   # Authentication endpoints
│   │   │   └── cases.py  # Case management endpoints
│   │   ├── models/
│   │   └── schemas/
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/             # Next.js application
│   ├── src/app/
│   └── package.json
├── templates/            # Legal contract templates
│   ├── Mutual-NDA.md
│   ├── CSA.md
│   ├── DPA.md
│   ├── BAA.md
│   ├── PSA.md
│   ├── AI-Addendum.md
│   └── ...
└── catalog.json          # Template metadata
```

---

## Getting Started

### Backend

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`.

### Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## API Endpoints

| Method | Endpoint              | Description        |
|--------|-----------------------|--------------------|
| GET    | `/`                   | Health check       |
| POST   | `/api/auth/login`     | Login              |
| POST   | `/api/auth/logout`    | Logout             |
| GET    | `/api/cases/`         | List all cases     |
| GET    | `/api/cases/{id}`     | Get case by ID     |
| POST   | `/api/cases/`         | Create a new case  |

---

## Legal Templates

The `/templates` directory contains 12 standardized contract templates licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/):

- Mutual Non-Disclosure Agreement (NDA)
- Cloud Service Agreement (CSA)
- Service Level Agreement (SLA)
- Data Processing Agreement (DPA)
- Business Associate Agreement (BAA)
- Professional Services Agreement (PSA)
- Partnership Agreement
- Software License Agreement
- Pilot Agreement
- Design Partner Agreement
- AI Addendum
- Mutual NDA Cover Page

---

## License

Code: See [LICENSE](LICENSE)
Templates: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — sourced from [CommonPaper](https://github.com/CommonPaper)
