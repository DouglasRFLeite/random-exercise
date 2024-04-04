FROM python:3.8

WORKDIR /src

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8080

CMD ["gunicorn"  , "-b", "0.0.0.0:8080", "app:app"]