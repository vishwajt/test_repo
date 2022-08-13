FROM python:3.7
LABEL maintainer="vishwajitdalve@gmail.com"
WORKDIR /usr/src/app
COPY publisher.py /usr/src/app/
COPY requirements.txt /usr/src/app/
RUN pip install --upgrade pip
RUN pip3 install -r requirements.txt
CMD ["python3", "publisher.py"]