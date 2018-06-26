const Uppy = require("uppy");
const Dashboard = require("uppy/src/plugins/Dashboard");
const Tus = require("uppy/src/plugins/Tus");

const uppy = Uppy({ autoProceed: false })
  .use(Dashboard, {
    trigger: "#select-files"
  })
  .use(Tus, { endpoint: "https://master.tus.io/files" });

uppy.on("complete", result => {
  console.log(
    `Upload complete! We've uploaded these files! ${result.successful}`
  );
});

export default uppy;
