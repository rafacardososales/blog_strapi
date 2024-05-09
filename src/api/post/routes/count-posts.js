import { routes } from "./post";

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/posts/count',
      handle: 'post.count'
    }
  ],
};
