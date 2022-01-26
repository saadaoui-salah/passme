FROM python

WORKDIR /backned

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "--bind", "0.0.0.0:8000"]