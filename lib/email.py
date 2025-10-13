from pydantic import BaseModel


class Email(BaseModel):
    value: str
