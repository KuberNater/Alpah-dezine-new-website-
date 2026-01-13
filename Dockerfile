FROM node

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN npm i -g pnpm 

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD pnpm run start
