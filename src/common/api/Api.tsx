import { getTokenFromCookies } from '../../utils/getTokenFromCookies';
import { defaultInstance, authApi } from './Axios';

const BASE_URL = import.meta.env.VITE_HOST_URL;
let token;
let authInstance: any;

// 변하는 쿠키값을 반영해서 instance 정의
const Instance = () => {
  token = getTokenFromCookies();
  authInstance = authApi(BASE_URL, token);
};

export const postCartItems = async (id: number) => {
  Instance();

  try {
    Instance();
    const params = { productId: id };
    const data = await authInstance.post('/cart', params);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const delAllCartItems = async () => {
  Instance();

  try {
    const data = await authInstance.delete('/cart/all');
  } catch (err: any) {
    console.log(err.message);
  }
};

export const delCartItems = async (id: number) => {
  Instance();

  try {
    const data = await authInstance.delete('/cart', {
      data: {
        productId: id,
      },
    });
  } catch (err: any) {
    console.log(err.message);
  }
};

// 최근 검색어
export const getSearchKeywords = async () => {
  Instance();

  try {
    const { data } = await authInstance.get('/user/keywords');
    return data.resultData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const addSearchKeywords = async (keywords: string) => {
  Instance();

  try {
    await authInstance.post('/user/keywords', { searchContent: keywords });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteSearchKeywordsSingle = async (searchId: number) => {
  Instance();

  try {
    await authInstance.delete('/user/keywords', { data: { searchId: searchId } });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteSearchKeywordsAll = async () => {
  Instance();

  try {
    const { data } = await authInstance.delete('/user/keywords/all');
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

// 최근 본 상품
export const getRecentProduct = async () => {
  Instance();

  try {
    const { data } = await authInstance.get('/user/recentproducts');
    return data.resultData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const addRecentProduct = async (productId: number) => {
  Instance();

  try {
    const params = { productId: productId };
    await authInstance.post('/user/recentproducts', params);
  } catch (err: any) {
    console.log(err.message);
  }
};

// 검색결과 조회
export const getSearchResults = async (title: string, category: string, page: number) => {
  try {
    const { data } = await defaultInstance.get(`/search?title=${title}&category=${category}&page=${page}`);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getPost = async () => {
  try {
    const { data } = await defaultInstance.get(`items/all/청년&학생&문화&?category=subscription&page=1`);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getCart = async () => {
  Instance();

  try {
    const { data } = await authInstance.get('/cart');
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const postTags = async (tags: string[]) => {
  Instance();

  try {
    const params = { tags: tags };
    const { data } = await authInstance.post(`/user/tags`, params);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getCategoryItem = async (tags: string, category: string, page: number) => {
  try {
    const { data } = await defaultInstance.get(`items/all/${tags}?category=${category}&page=${page}`);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getUserInfo = async () => {
  Instance();

  try {
    const { data } = await authInstance.get(`/user`);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getRecommendation = async (tags: string) => {
  try {
    const { data } = await defaultInstance.get(`/Recommendation/${tags}`);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getDetailItem = async (id: number) => {
  try {
    const { data } = await defaultInstance.get(`items/${id}`);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

// 회원가입
export const postUser = async (email: string, password: string, name: string, birth: string) => {
  try {
    const { data } = await defaultInstance.post('register', {
      email: email,
      password: password,
      name: name,
      birth: birth,
    });
    return data;
  } catch (err: any) {
    console.log('회원가입 api 에러', err.message);
  }
};

// 로그인
export const postLogin = async (email: string, password: string) => {
  try {
    const { data } = await defaultInstance.post('login', {
      email: email,
      password: password,
    });
    // 로그인 시, 로컬스토리지 클리어
    localStorage.clear();
    if (data.status === 'success') {
      document.cookie = `accessToken=${data.accessToken}; max-age=3600`;
    }
    return data;
  } catch (err: any) {
    console.log('로그인 api 에러', err.message);
  }
};

// 로그아웃
export const postLogout = async () => {
  Instance();

  try {
    // key value로 바꿔주면 업데이트
    const data = await authInstance.post('logout');
    document.cookie = `${document.cookie}; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
    return data;
  } catch (err: any) {
    console.log('로그아웃 api 에러', err.message);
  }
};

// 회원정보 수정
export const patchUser = async (name?: string, oldPassword?: string, newPassword?: string, birth?: string) => {
  Instance();
  try {
    const { data } = await authInstance.patch('user', {
      name: name,
      oldPassword: oldPassword,
      newPassword: newPassword,
      birth: birth,
    });
    return data;
  } catch (err: any) {
    console.log('회원정보 수정 api 에러', err.message);
  }
};
