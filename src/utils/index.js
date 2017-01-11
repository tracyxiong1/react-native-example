import { PixelRatio, Dimensions } from 'react-native';

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  post(url, data, callback) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(url, fetchOptions)
    .then(response => response.json())
    .then((responseData) => {
      callback(responseData);
    });
  },
};

export default Util;
