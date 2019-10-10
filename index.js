// This program counts off ten second in node.js.
(async function () {
  async function wait(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new Date().getSeconds());
      },seconds * 1000)
    })
  }
  console.log('start')
  let n = 10;

  while(n--) {
    console.log(await wait(1));
  }
  console.log('done')
})();