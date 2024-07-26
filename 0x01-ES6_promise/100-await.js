import {uploadPhoto, createUser } from'./utils'

export default async function asyncUploadUser() {
    try {
        let res1 = await uploadPhoto();
        let res2 = await createUser();
        return {
            photo: res1,
            user: res2
        };
    } catch(err) {
        return {
            photo: null,
            user: null,
          };
    }
}