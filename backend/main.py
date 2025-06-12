# backend/main.py
from fastapi import FastAPI
import logging

logger = logging.getLogger("uvicorn.error")

app = FastAPI(
    title="バックエンド",
    description="モバイルアプリケーションのバックエンドAPI",
    version="0.1.0",
    redirect_slashes=False
)


# health check endpoint
@app.get("/health", tags=["Health Check"])
async def health_check():
    """
    健康チェック用のエンドポイント。
    アプリケーションが正常に動作しているかを確認します。
    """
    return {"status": "ok", "message": "Application is running smoothly."}


if __name__ == '__main__':
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=80, reload=True)
