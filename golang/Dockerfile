FROM golang:alpine AS builder

WORKDIR /go/src/github.com/desafio-docker

COPY main.go .

RUN GOOS=linux go build main.go

FROM scratch

COPY --from=builder /go/src/github.com/desafio-docker/main .

ENTRYPOINT [ "./main" ]