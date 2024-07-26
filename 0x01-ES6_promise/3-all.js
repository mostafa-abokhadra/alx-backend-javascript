import uploadPhoto, { createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((val) => {
    process.stdout.write(`${val.body} `);
    createUser().then((val) => {
      console.log(`${val.firstName} ${val.lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
  }).catch(() => {
    console.log('Signup system offline');
  });
}
