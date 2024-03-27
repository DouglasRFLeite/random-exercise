FROM python:3.8

WORKDIR /usr/src/app

COPY . .

RUN pip install --no-cache-dir Flask

EXPOSE 5000

CMD ["python", "./app.py"]