const cron = require("node-cron");

const schedule = (req, res) => {
  const { scheduleType } = req.body;

  let cronExpression;

  if (scheduleType === "daily") {
    cronExpression = "0 0 * * *";
  } else if (scheduleType === "weekly") {
    cronExpression = "0 0 * * 1";
  } else {
    return res.status(400).json({ error: "Invalid schedule type" });
  }

  const task = cron.schedule(cronExpression, () => {
    console.log("Hola Mundo!");
  });

  res.status(200).json({ message: `Scheduled task to run ${scheduleType}` });
};

module.exports = {
  schedule,
};
