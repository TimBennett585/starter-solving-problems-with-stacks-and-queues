const Queue = require("../lib/queue");

const connected = (G, s, r) => {
  const users = Object.keys(G);

  if (users.length === 0) {
    return false;
  }

  if (s === r) {
    return true;
  }

  const enqueued = [s];

  const discovered = new Queue();

  discovered.enqueue(s);

  while (discovered.first) {
    let user = discovered.dequeue();

    const followers = G[user];

    for (const followedUser of followers) {
      if (followedUser === r) {
        return true;
      }

      if (!enqueued.includes(followedUser)) {
        enqueued.push(followedUser);
        discovered.enqueue(followedUser);
      }
    }
  }

  return false;
};

module.exports = connected;
