import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
import { TextColor, DisabledColor } from '../../interfaces';

interface CoordinateProps {
  text: string;
  selected: boolean;
}

const Coordinate = (props: CoordinateProps) : JSX.Element => {
  const { text, selected } = props;
  return (
    <View style={[styles.coordinateContainer, selected ? styles.selectedCoordinate : styles.coordinate]}>
      <Text style={[styles.coordinateText, selected ? styles.selectedCoordinateTextColor : styles.coordinateTextColor]}>{text}</Text>
    </View>
  )
}

interface CoordinateWordsProps {
  words: Array<string>;
  selectedWord: string | undefined;
  onItemClick: (word: string) => void
}

export const CoordinateWords = (props: CoordinateWordsProps) : JSX.Element => {
  const { words, onItemClick, selectedWord } = props;
  return (
    <FlatList
      style={styles.container}
      numColumns={3}
      keyExtractor={ item => item }
      data={words}
      renderItem={({ item }) => 
        <TouchableOpacity 
          activeOpacity={1} 
          onPress={() => {
            onItemClick(item)
        }}>
          <Coordinate text={item} selected={selectedWord === item}/>
        </TouchableOpacity>}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  coordinateText: {
    fontSize: 16,
    color: TextColor,
    fontWeight: '500'
  },
  coordinateContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 8,
    borderRadius: 20,
    padding: 20,
    margin: 10,
  },
  coordinate: {
    backgroundColor: '#fff',
  },
  coordinateTextColor: {
    color: '#000'
  },
  selectedCoordinate: {
    backgroundColor: DisabledColor,
  },
  selectedCoordinateTextColor: {
    color: 'transparent'
  }
})