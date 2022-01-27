FROM python

WORKDIR /backned

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENV PORT=8000
ENV SECRET_KEY=django-insecure-81q=vihhlg27h%v01f_go@1t-lfdb$(s364o@vk@*j9e7eyw$2
ENV ENV=dev 
ENV PORT=8000 
ENV HOST=ec2-54-157-15-228.compute-1.amazonaws.com
ENV NAME=dau8toeff4ehhi
ENV USER=myvzoyzpjzgkma
ENV DB_PORT=5432 
ENV PASSWORD=8b9d9f701307a6df33fd5823559ec6997d1c56c4d9113062c76b961fa721b1a2 

EXPOSE ${PORT}

RUN gunicorn core.wsgi:application --bind 0.0.0.0:8000