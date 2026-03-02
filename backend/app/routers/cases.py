from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def get_cases():
    return {"cases": []}


@router.get("/{case_id}")
def get_case(case_id: int):
    return {"case_id": case_id}


@router.post("/")
def create_case():
    return {"message": "Case created"}
