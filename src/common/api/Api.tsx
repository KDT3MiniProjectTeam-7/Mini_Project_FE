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
    const data = await axios.get('http://3.36.178.242:8080/user/keywords');
    console.log(data);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const addSearchKeywords = async (keywords: string) => {
  try {
    const data = await axios.post('http://3.36.178.242:8080/user/keywords', { searchContent: keywords });
    console.log(data);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteSearchKeywordsSingle = async (searchId: number) => {
  try {
    const data = await axios.delete('http://3.36.178.242:8080/user/keywords', {
      data: { searchId: `${searchId}` },
    });
    console.log(data);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteSearchKeywordsAll = async (keywords: string) => {
  try {
    const data = await axios.delete('http://3.36.178.242:8080/user/keywords/all');
    console.log(data);
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
