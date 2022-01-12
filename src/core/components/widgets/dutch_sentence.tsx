import React from 'react';
import { 
  ScrollView, 
  Text, 
  View,
  StyleSheet
} from 'react-native';
import { TextColor } from '../../interfaces';
import { Sentence } from '../../apis';

interface Props {
  sentence: Sentence;
  selectedWord: string | undefined;
}

interface WordProps {
  word: string;
  selectedWord: string | undefined;
}

const Word = (props : WordProps) : JSX.Element => {
  const { word } = props;
  return (
    <View style={styles.wordContainer}>
      <Text style={styles.word}>{word}</Text>
      <View style={styles.dashedBorder}></View>
    </View>
  );
}

const EmptyWord = (props: WordProps) : JSX.Element => {
  const { word, selectedWord } = props;
  return selectedWord ? (
    <View style={styles.coordinateContainer}>
      <Text style={styles.coordinateText}>{selectedWord}</Text>
    </View>
  ) : (
    <View style={styles.wordContainer}>
      <Text style={styles.emptyWord}>{word}</Text>
      <View style={styles.border}></View>
    </View>
  )
}

export const DutchSentence = (props: Props) : JSX.Element => {
  const { sentence, selectedWord } = props;
  const words = sentence.dutch.split(' ');
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ alignItems: 'flex-end' }}
      horizontal={true}
    >
      { words.map((item, index) => {
        if (index == sentence.missingPosition) {
          return <EmptyWord word={item} selectedWord={selectedWord} />
        } else {
          return <Word word={item} selectedWord={selectedWord} />
        }
      }) }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  wordContainer: {
    marginHorizontal: 10,
  },
  word: {
    fontSize: 25,
    color: '#fff'
  },
  emptyWord: {
    fontSize: 25,
    color: 'transparent'
  },
  border: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#fff'
  },
  dashedBorder: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderRadius: 1,
    borderStyle: 'dotted',
    borderColor: '#fff'
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
    borderRadius: 16,
    padding: 10,
    backgroundColor: '#fff'
  },
})