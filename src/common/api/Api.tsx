import axios from 'axios';
import { defaultInstance , authInstance } from './Axios'

export const postCartItems = async (id: number) => {
  try {
    const params = { productId: id };
    await axios.post('https://7102b765-02ea-4b41-983b-addf4c37adea.mock.pstmn.io/user/recent-products/cart', params);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const delCartItems = async (id: number) => {
  try {
    // const params = { productId: id };
    await axios.delete('https://7102b765-02ea-4b41-983b-addf4c37adea.mock.pstmn.io/user/recent-products/cart', {
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
    // const data = await axios.get(
    //   'https://7102b765-02ea-4b41-983b-addf4c37adea.mock.pstmn.io/user/recent-products/user/keywords'
    // );
    const data = await axios.get('user/keywords');
    // console.log(data.data.resultData);
    return data.data.resultData;
  } catch (err: any) {
    // console.log(err.message);
  }
};

export const addSearchKeywords = async (keywords: string) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie}`;
    const data = await axios.post('http://3.36.178.242:8080/user/keywords', { searchContent: keywords });
    // console.log(data.data.resultData);
    return data.data.resultData;
  } catch (err: any) {
    // console.log(err.message);
  }
};

export const deleteSearchKeywordsSingle = async (searchId: number) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie}`;
    const data = await axios.delete('http://3.36.178.242:8080/user/keywords', { data: { searchId: searchId } });
    // console.log(data.data.resultData);
    console.log('한개 삭제됨!');
    return data.data.resultData;
  } catch (err: any) {
    // console.log(err.message);
  }
};

export const deleteSearchKeywordsAll = async () => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie}`;
    const data = await axios.delete('http://3.36.178.242:8080/user/keywords/all');
    // console.log(data.data.resultData);
    return data.data.resultData;
  } catch (err: any) {
    // console.log(err.message);
  }
};

// 최근 본 상품
export const getRecentProduct = async () => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie}`;
    const data = await axios.get('http://3.36.178.242:8080/user/recentproducts');
    // console.log(data.data.resultData);
    return data.data.resultDatata;
  } catch (err: any) {
    // console.log(err.message);
  }
};

export const addRecentProduct = async (productId: number) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie}`;
    const data = await axios.post('http://3.36.178.242:8080/user/recentproducts', { productId: productId });
    // console.log(data.data.resultData);
    return data.data.resultData;
  } catch (err: any) {
    // console.log(err.message);
  }
};

// 검색결과 조회
export const getSearchResults = async (title: string, category: string, page: number) => {
  try {
    const data = await axios.get(`http://3.36.178.242:8080/search?title=${title}&category=${category}&page=${page}`);
    console.log(data.data.resultData);
    return data.data.resultData;
  } catch (err: any) {
    // console.log(err.message);
  }
};

export const getPost = async () => {
  try {
    const { data } = await defaultInstance.get(`items/all/청년&학생&문화&?category=subscription&page=1`)

    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCart = async () => {
  try {
    const { data } = await authInstance.get('/cart');

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
}

export const postTags = async (tags : string[]) => {
  try {
    const { data } = await authInstance.post(`/user/tags`, {
      data : {
        tags : tags
      }
    });

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
}

export const getUserInfo = async () => {
  try {
    const { data } = await authInstance.get(`/user`);

    return data;
  } catch (err: any) {
    console.log(err);
  }
}

export const getRecommendation = async () => {
  try {
    const { data } = await defaultInstance.get(`/Recommendation/청년&대중교통&무주택자`);

    return data;
  } catch (err: any) {
    console.log(err);
  }
}

