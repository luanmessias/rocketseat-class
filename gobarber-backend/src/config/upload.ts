import path from 'path';
import crypto from 'crypto';
import multer from 'multer';
import fs from 'fs';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');
const uploadsFolder = path.resolve(tmpFolder, 'uploads');

if(!fs.existsSync(tmpFolder)){
  fs.mkdirSync(tmpFolder);
}

if(!fs.existsSync(uploadsFolder)){
  fs.mkdirSync(uploadsFolder);
}

export default {
  tmpFolder,
  uploadsFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
