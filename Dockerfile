FROM python:3.8

ENV RAPIDAPI_KEY="1a6191428bmshd5ace4b8d86cad3p178e0ejsnb39eb0718b4b"

WORKDIR /src

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8080

CMD ["gunicorn"  , "-b", "0.0.0.0:8080", "app:app"]