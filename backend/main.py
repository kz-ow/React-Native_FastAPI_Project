# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import TextSchema
from 
import logging

logger = logging.getLogger("uvicorn.error")

app = FastAPI(
    title="バックエンド",
    description="モバイルアプリケーションのバックエンド",
    version="0.1.0",
    redirect_slashes=False
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],            # 本番ではフロントのURLだけに制限
    allow_methods=["*"],            # OPTIONS, POST, GET…すべて許可
    allow_headers=["*"],            # content-type も含めてすべて許可
)

@app.post("/test", tags=["Test"])
async def test_endpoint(data: TextSchema):
    """
    テスト用のエンドポイント。
    受け取ったデータに”checked”を付けて返します。
    """
    logger.info(f"Received data: {data}")
    payload = data.text + " accepted!!"
    return {"status": "success", "output_payload": payload}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
