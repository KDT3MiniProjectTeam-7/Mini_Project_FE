export const getTokenFromCookies = () => {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + 'accessToken'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
