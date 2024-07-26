import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([userRes, photoRes]) => [
      {
        status: userRes.status,
        value: userRes,
      },
      {
        status: photoRes.status,
        value: photoRes,
      },
    ]);
}
