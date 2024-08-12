#!/usr/bin/node

export default getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const obj = {
        status: 200,
        body: 'Success',
      };
      resolve(obj);
    } else {
      const obj = {error: 'The fake API is not working currently'};
      reject(obj);
    }
  });
}
