export const isExpiredToken = (code: string) => {
  if (code === '410') {
    console.log('로그인 유효시간이 만료되었습니다. 로그인 화면으로 이동합니다.');
    document.cookie = `${document.cookie}; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
  }
  window.location.pathname = '/login';
};

// if (data?.code) {
//   isExpiredToken(data.code);
// }
