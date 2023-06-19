FROM archlinux:latest

RUN pacman -Syu --noconfirm \
        curl \
        unzip \
    && :

# Install Deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL="/root/.deno"
ENV PATH="${PATH}:${DENO_INSTALL}/bin"
