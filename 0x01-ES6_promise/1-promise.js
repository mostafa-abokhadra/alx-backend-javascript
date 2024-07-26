export default getFullResponseFromAPI(success) {
    const aPromise = new Promise((resolved, rejected) => {
        if (success) {
            resolved({status: 200, body: 'Success'});
        } else {
            rejected(Error("The fake API is not working currently"));
        }
    }).then((res) => {
        return res;
    }, (rej) => {
        return rej;
    })
}