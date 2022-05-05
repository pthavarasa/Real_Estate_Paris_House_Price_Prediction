#!/bin/sh

export PORT=80

uvicorn app.backend.api:app --host 0.0.0.0 --port $PORT