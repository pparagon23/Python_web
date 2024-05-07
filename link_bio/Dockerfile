#step 1
FROM python:3.12.2

WORKDIR /app
COPY . .

ENV VIRTUAL_ENV=/app/.venv_docker
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
RUN python3.12 -m venv $VIRTUAL_ENV

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

RUN docker build -t pparagon-fb:latest . 
RUN docker run -d  -p 3000:3000 --name app1 pparagon-fb:latest
CMD docker run -d  -p 8000:8000 --name app2 pparagon-fb:latest
