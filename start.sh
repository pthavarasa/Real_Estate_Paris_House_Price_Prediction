#!/bin/sh

cd ./app/frontend

nohup python -m http.server 8001 &

cd ../../

uvicorn app.backend.api:app --host 0.0.0.0 --port 8000 --reload