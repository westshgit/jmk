from fastapi import APIRouter, FastAPI

from admin.routes import admin as admin_router

app = FastAPI()

api = APIRouter(prefix="/api")

# Register admin path under /api
api.include_router(admin_router, prefix="/admin")

# Base route
app.include_router(api)
# Register lifespan and initialize database connection
