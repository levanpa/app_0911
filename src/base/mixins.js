import axios from 'axios';

export default {
  methods: {
    log: (...data) => console.log(...data),
    getCompanyData: async () => {
      const api = `${process.env.VUE_APP_API_ROOT}company`;
      const data = await axios.get(api).then((response) => {
        if (response.status === 200) {
          return response.data
        }
      });
      return data;
    }
  },
  created() {
  }
}