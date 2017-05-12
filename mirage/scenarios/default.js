export default function(server) {
  let users = server.createList('user', 3);
  server.createList('post', 3, { user: users[0] });
}
