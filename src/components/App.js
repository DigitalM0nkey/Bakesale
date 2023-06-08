import React, {useEffect, useState} from 'react';

import {View, Text} from 'react-native';
import {styled} from 'nativewind';
import fetchInitalDeals from '../ajax';
import DealList from './DealList';

const StyledView = styled(View);
const StyledText = styled(Text);

const App = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function fetchInitialDeals() {
      const response = await fetchInitalDeals();
      setDeals(response);
    }
    fetchInitialDeals();
  }, []);

  console.log('deals => ', deals);

  return (
    <StyledView className="flex-1 items-center justify-center">
      {deals.length > 0 ? (
        <DealList deals={deals} />
      ) : (
        <StyledText className="text-slate-  800">Loading...</StyledText>
      )}
    </StyledView>
  );
};

export default App;
