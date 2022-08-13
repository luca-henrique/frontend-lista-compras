import axios from 'axios';

export const services = {
  getImages: (product) => {
    const params = {
      key: 'AIzaSyDvnr1R-YrX43DlqcxC0iSRvxOYkSbiJcU',
      cx: 'a78bb5bbccbb640c4',
      searchType: 'image',
      lr: 'lang_pt',
      q: product,
      num: 1,
    };

    return axios
      .get('https://www.googleapis.com/customsearch/v1', {params})
      .then((resp) => resp.data.items[0].link)
      .catch((err) => err);
  },
};
