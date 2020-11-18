const fetchData = () => {
  const promise = new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000); // async code, it doesn't happen immediately, callback function

console.log("Hello!"); // sync code happens immediately
console.log("Hi!"); // sync code happens immediately
