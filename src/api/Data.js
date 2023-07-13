import axios from 'axios';

export const getData = async () => {
    try {
        const response = await axios.get('http://5.196.73.135:8085/data');
        return response.data;
    } catch (error) {
            
        }
}
