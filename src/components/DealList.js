import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledFlatList = styled(FlatList);

const DealList = ({deals}) => {
  return (
    <StyledView className="flex-1 bg-gray-200 w-full p-2 mt-8">
      <StyledFlatList
        data={deals}
        renderItem={({item}) => (
          <StyledText className="text-slate-800">{item.title}</StyledText>
        )}
      />
    </StyledView>
  );
};

export default DealList;
