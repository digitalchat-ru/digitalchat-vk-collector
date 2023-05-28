FROM node:18.16.0-alpine as builder
WORKDIR /usr/app
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig*.json ./
RUN yarn install
COPY . ./
RUN yarn build

FROM gcr.io/distroless/nodejs:18
WORKDIR /usr/app
COPY --from=builder /usr/app .
USER 1000
CMD ["index.js"]