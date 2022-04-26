// 로그인, 회원가입, 회원 탈퇴
import { posts } from './index';
// 회원가입 API
function registerUser(userData) {
  return posts.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return posts.post('login', userData);
}

export { registerUser, loginUser };
