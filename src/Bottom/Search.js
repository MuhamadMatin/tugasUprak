import * as React from 'react';
import { View, Text } from 'react-native';

function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingBottom: 70, paddingLeft: 10, paddingRight: 10 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 600,
          alignSelf: 'center',
        }}>
        Search
      </Text>
    </View>
  );
}

export default Search;
