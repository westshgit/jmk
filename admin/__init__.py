from pydantic import BaseModel

from lib.email import Email


class Admin(BaseModel):
    name: str
    email: Email
