import axios from 'axios';
export const fetchData = async (url, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error.message);
      if (i < retries - 1) {
        await new Promise((res) => setTimeout(res, delay)); 
      } else {
        throw error;
      }
    }
  }
};
