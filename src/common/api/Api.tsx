import axios from 'axios';
import { defaultInstance, authInstance } from './Axios';

export const postCartItems = async (id: number) => {
  try {
    const params = { productId: id };
    await authInstance.post('/cart', params);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const delCartItems = async (id: number) => {
  try {
    await authInstance.delete('/cart', {
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
  try {
    const { data } = await authInstance.get('/user/keywords');
    return data.resultData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const addSearchKeywords = async (keywords: string) => {
  try {
    await authInstance.post('/user/keywords', { searchContent: keywords });
    console.log('검색어 추가 완료');
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteSearchKeywordsSingle = async (searchId: number) => {
  try {
    await authInstance.delete('/user/keywords', { data: { searchId: searchId } });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteSearchKeywordsAll = async () => {
  try {
    await authInstance.delete('/user/keywords/all');
  } catch (err: any) {
    console.log(err.message);
  }
};

// 최근 본 상품
export const getRecentProduct = async () => {
  try {
    const { data } = await authInstance.get('/user/recentproducts');
    return data.resultData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const addRecentProduct = async (productId: number) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie}`;
    const data = await axios.post('http://3.36.178.242:8080/user/recentproducts', { productId: productId });
    // console.log(data.data.resultData);
    return data.data.resultData;
  } catch (err: any) {
    console.log(err.message);
  }
};

// 검색결과 조회
export const getSearchResults = async (title: string, category: string, page: number) => {
  try {
    const { data } = await defaultInstance.get(`/search?title=${title}&category=${category}&page=${page}`);
    console.log(data.resultData);
    return data.resultData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getPost = async () => {
  try {
    const { data } = await defaultInstance.get(`items/all/청년&학생&문화&?category=subscription&page=1`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async () => {
  try {
    const { data } = await authInstance.get('/cart');

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const postTags = async (tags: string[]) => {
  try {
    const params = { tags: tags };
    const { data } = await authInstance.post(`/user/tags`, params);
    console.log(data, tags);
  } catch (err) {
    console.log(err);
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
  try {
    const { data } = await authInstance.get(`/user`);
    console.log('성공');

    return data;
  } catch (err: any) {
    console.log(err);
  }
};

export const getRecommendation = async (tags: string) => {
  try {
    const { data } = await defaultInstance.get(`/Recommendation/${tags}`);

    return data;
  } catch (err: any) {
    console.log(err);
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
    console.log(err.message);
  }
};

// 로그인
export const postLogin = async (email: string, password: string) => {
  try {
    const { data } = await defaultInstance.post('login', {
      email: email,
      password: password,
    });
    if (data.status === 'success') {
      document.cookie = `accessToken=${data.accessToken}; max-age=3600`;
    }
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
