import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

export interface Sentence {
  coordinates: Array<string>;
  highlightPosition: number;
  missingPosition: number;
  english: string;
  dutch: string;
  words: Array<WordPair>;
}

export interface WordPair {
  en: string;
  de: string;
}

export const useApi = (collectionName: string) => {
  const [ loading, setLoading ] = useState<boolean>(true);

  const [ data, setData ] = useState<Array<Sentence>>([]);

  const collection = firestore().collection(collectionName);


  const fetch = () => {
    collection.get()
      .then(querySnapshot => {
        setLoading(false);
        const sentences : Array<Sentence> = [];
        querySnapshot.docs.forEach(doc => {
          const data = doc.data();
          const sentence : Sentence = {
            coordinates : data['coordinates'],
            highlightPosition: data['highlight_position'],
            missingPosition: data['missing_word_position'],
            words: data['english_words'],
            english: data['english'],
            dutch: data['dutch']
          }
          console.log(sentence);
          sentences.push(sentence);
        })
        setData(sentences);
      })
  }

  useEffect(() => {
    fetch();
  }, []);

  return { loading, data }
}
