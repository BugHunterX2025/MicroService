const autocannon = require("autocannon");
const urls = ["http://localhost:3000", "http://localhost:3000/main"];
const duration = 30; // specify the duration for the test in seconds
urls.forEach((url) => {
  const inst = autocannon(
    {
      url,
      duration: duration,
    },
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`url : ${url}`);
        console.log("no or request", result.requests.total);
        console.log("dureation", result.duration);
      }
    }
  );
  autocannon.track(inst);
});
