FROM python:3.7

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

ADD app ./
ADD model ./

EXPOSE 8000

CMD ["uvicorn", "app/backend/api:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]