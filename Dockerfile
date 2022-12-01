FROM ubuntu:22.04

RUN apt-get update \
    && apt-get upgrade -y \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y \
        curl \
        unzip \
    && :

# Install Deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL="/root/.deno"
ENV PATH="${PATH}:${DENO_INSTALL}/bin"

CMD echo "Sleeping indefinitely..." && sleep infinity
