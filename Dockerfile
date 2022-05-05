FROM python:3.7

ADD app ./app/
ADD model ./model/

COPY start.sh ./start.sh

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r app/requirements.txt

EXPOSE 80

RUN chmod +x start.sh

CMD ["./start.sh"]