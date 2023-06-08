const apiHost = 'https://bakesaleforgood.com/api';

const fetchInitialDeals = async () => {
  try {
    const response = await fetch(apiHost + '/deals');
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};

export default fetchInitialDeals;
