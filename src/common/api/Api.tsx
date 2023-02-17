import axios from 'axios';

export async function getCart() {
  const data = await axios.get('https://7102b765-02ea-4b41-983b-addf4c37adea.mock.pstmn.io/user/recent-products/cart');
  console.log(data);
  if (data.status !== 200) {
    throw new Error();
  }
  return data;
}
