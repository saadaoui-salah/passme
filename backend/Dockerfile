FROM python

WORKDIR /backned

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENV PORT=8000

EXPOSE ${PORT}

RUN gunicorn core.wsgi:application --bind 0.0.0.0:${PORT}