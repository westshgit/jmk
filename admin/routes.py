from fastapi import APIRouter

from admin import Admin
from lib.email import Email

admin = APIRouter()


@admin.get("/")
async def _() -> Admin:
    return Admin(name="West", email=Email(value="west@west.com"))
