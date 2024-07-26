export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'success' })).catch((err) => new Error()).finally(() => {
    console.log('Got a response from the API');
  });
}
