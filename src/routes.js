import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multerConfig';

const routes = new Router();

const upload = multer(multerConfig);

routes.get('/users', (request, response) =>
  response.json({ messege: 'Hello World' })
);

routes.post('/upload', upload.single('file'), (request, response) => {
  const { originalname: name, filename: path } = request.file;

  return response.json({
    name,
    path,
    url: `http://localhost:4000/image/${path}`,
  });
});

export default routes;
