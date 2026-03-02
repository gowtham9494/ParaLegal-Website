from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, cases

app = FastAPI(title="ParaLegal API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(cases.router, prefix="/api/cases", tags=["cases"])


@app.get("/")
def root():
    return {"message": "ParaLegal API is running"}
