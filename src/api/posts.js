// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { instance } from './index';
// 학습 노트 데이터를 조회하는 API

function fetchPosts() {
  return instance.get('posts');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return instance.post('posts', postData);
}

export { fetchPosts, createPost };
