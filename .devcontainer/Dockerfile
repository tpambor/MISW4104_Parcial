FROM node:18-bullseye

RUN apt update && \
  apt install --no-install-recommends --yes \
    chromium chromium-sandbox dos2unix \
    git openjdk-17-jre nano sudo \
  && apt clean && \
  rm -rf /var/lib/apt/lists/*

RUN git config --system --add safe.directory "*"

ENV CHROME_BIN=/usr/bin/chromium

COPY .gitignore sonar-scanner-cli-4.8.0.2856.zi[p] /opt/

RUN cd /opt && \
  rm .gitignore && \
  wget -nc https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.8.0.2856.zip && \
  unzip sonar-scanner-cli-4.8.0.2856.zip && \
  rm sonar-scanner-cli-4.8.0.2856.zip && \
  chmod +x sonar-scanner-4.8.0.2856/bin/sonar-scanner

RUN printf "node\tALL=(ALL:ALL) NOPASSWD:ALL\n" > /etc/sudoers.d/node
USER node
