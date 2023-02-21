import axios from 'axios';

export async function getCart() {
  try {
    const data = await axios.get(
      'https://7102b765-02ea-4b41-983b-addf4c37adea.mock.pstmn.io/user/recent-products/cart'
    );
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
}

export const getDataTest = async () => {
  try {
    const data = await axios.get(
      'https://7102b765-02ea-4b41-983b-addf4c37adeack.pstmn.io/user/recent-products/Recommendation/자차&성인'
    );

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

// 최근 검색어
export const getSearchKeywords = async () => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie}`;
    // const data = await axios.get(
    //   'https://7102b765-02ea-4b41-983b-addf4c37adea.mock.pstmn.io/user/recent-products/user/keywords'
    // );
    const data = await axios.get('http://3.36.178.242:8080/user/keywords');
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
