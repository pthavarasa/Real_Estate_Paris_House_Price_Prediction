#!/bin/sh

uvicorn app.backend.api:app --host 0.0.0.0 --port $PORT