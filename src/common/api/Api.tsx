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
