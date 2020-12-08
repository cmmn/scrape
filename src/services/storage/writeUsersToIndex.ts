// import fs from 'fs';
// import path from 'path';
// import { replaceAll } from './replaceAll';

// export const writeUsersToIndex = (users: any[]): void => {
//   console.log(users);
//   const pathName = path.join(__dirname, '../data/users/index.js');
//   const writeStream = fs.createWriteStream(pathName);

//   // write each value of the array on the file breaking line
//   writeStream.write('/* eslint-disable prettier/prettier */\n');
//   writeStream.write('export const users = [\n');
//   users.forEach((user) => {
//     const arrayItemStr = `  ${JSON.stringify(user)},\n`;
//     const arrayItemStrFormatted = arrayItemStr.replace('{', '{ ').replace('}', ' }');
//     const arrayItemStrColon = replaceAll(arrayItemStrFormatted, ':', ': ');
//     const arrayItemStrComma = replaceAll(arrayItemStrColon, ',', ', ');
//     writeStream.write(arrayItemStrComma);
//   });
//   writeStream.write('];' + '\n');

//   // the finish event is emitted when all data has been flushed from the stream
//   writeStream.on('finish', () => {
//     console.log(`wrote all the array data to file ${pathName}`);
//   });

//   // handle the errors on the write process
//   writeStream.on('error', (err) => {
//     console.error(`There is an error writing the file ${pathName} => ${err}`);
//   });

//   // close the stream
//   writeStream.end();
// };
