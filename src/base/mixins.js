import axios from 'axios';

export default {
  methods: {
    log: (...data) => console.log(...data),
    async fetchCompanyData() {
      const api = `${process.env.VUE_APP_API_ROOT}company`;
      return await axios.get(api).then((response) => {
        if (response.status === 200) {
          return response.data
        }
      });
    },
    async fetchProducts() {
      const api = `${process.env.VUE_APP_API_ROOT}product`;
      let data = await axios.get(api).then((response) => {
        if (response.status === 200) {
          return response.data
        }
      });
      if (data) data = data.map((item) => this.refineData(item, 'product'));
      return data;
    },
    async fetchSingleProduct(id = 1) {
      const api = `${process.env.VUE_APP_API_ROOT}product/${id}`;
      return await axios.get(api).then((response) => {
        if (response.status === 200) {
          return this.refineData(response.data, 'product');
        }
      });
    },
    // refine data before using
    refineData(inputData, type = 'product') {
      let currencyFormatter = new Intl.NumberFormat('vi-VN');
      if (type === 'product') {
        inputData.discount = Math.floor((inputData.price * 100) / inputData.origin_price);
        inputData.price_text = currencyFormatter.format(inputData.price);
        inputData.origin_price_text = currencyFormatter.format(inputData.origin_price);
        inputData.quantity = inputData.stock - inputData.sold;
        return inputData;
      }
      return false;
    }
  },
}