
import axios from 'axios';

export const processFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);


    const response = await axios.post('https://api.example.com/extract', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    
    return response.data;
  } catch (error) {
    console.error('File processing failed:', error);
    throw error;
  }
};
