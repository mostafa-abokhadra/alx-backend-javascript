import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      for (let i = 0; i < results.length; i+=1) {
        const obj = {
          status: results[i].status,
          value: results[i].status === 'fulfilled' ? results[i].value : String(results[i].reason),
        };
        arr.push(obj);
      }
      return arr;
    });
}
