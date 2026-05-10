# Plug in the web repository
RUN git clone https://github.com/ivanmatcuka/habbit-frontend.git habbit-frontend
RUN cd ../habbit-frontend && npm i && ..

npm install
npm run build:development
npx cap sync
npm run build:android