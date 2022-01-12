import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import { WordPair } from '../../apis';

interface ShowWordProps {
  word: string;
  isFirst: boolean;
  highlighted: boolean;
}

export const ShowWord = (props: ShowWordProps) : JSX.Element => {
  const { word, highlighted, isFirst } = props;
  const text = isFirst ? word.charAt(0).toUpperCase() + word.slice(1) : word;
  return (
    <Text style={[styles.englishWord, highlighted && styles.underline]}>
      {text}
    </Text>
  )
}

interface EnglishSentenceProps {
  words : Array<WordPair>,
  highlight: number
} 

export const EnglishSentence = (props: EnglishSentenceProps) : JSX.Element => {
  const { words, highlight } = props;

  return (
    <ScrollView horizontal={true}>
      { words.map((item, index) => { 
        return (
          <ShowWord word={item.en} highlighted={index==highlight} isFirst={index==0} />
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  englishWord: {
    color: '#fff',
    fontSize: 27,
    fontWeight: '500',
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  underline: {
    fontSize: 28,
    fontWeight: '700',
    textDecorationLine: 'underline'
  }
})