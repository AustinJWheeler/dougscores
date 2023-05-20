FROM ubuntu:latest
LABEL authors="austinwheeler"

ENTRYPOINT ["top", "-b"]