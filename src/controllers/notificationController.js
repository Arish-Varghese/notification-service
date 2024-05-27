let notifications = [];

const createNotification = (req, res) => {
  const { message, user } = req.body;
  const newNotification = { id: notifications.length + 1, message, user, date: new Date() };
  notifications.push(newNotification);
  res.status(201).json(newNotification);
};

const getNotifications = (req, res) => {
  res.status(200).json(notifications);
};

module.exports = {
  createNotification,
  getNotifications,
};
