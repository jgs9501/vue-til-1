import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  // 배포를 할 경우 vuejs.org history 검색해보면 정적인 자원들을 서버에 배포 할 때,
  // 서버에 url에 대한 필터링 기능을 넣어주어야 한다
  mode: 'history',
  routes: [
    {
      // 모든 패스는 로그인으로 리다이렉트
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      // 위쪽 글을 제외하나 나머지 URL이 해당
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
