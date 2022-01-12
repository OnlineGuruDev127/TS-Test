import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import { Sentence } from '../../apis';
import {
  DisabledColor,
  BorderSubViewBackgroundColor,
  redBackgroundColor,
} from '../../interfaces';


interface Props {
  sentence: Sentence;
  selectedWord: string | undefined;
  onCheckClicked: Function;
  selectedCheck: boolean | false;
}

enum CtrlStatus {
  Idle = 1,
  Checking,
  Correct,
  Wrong
}

export const CheckBtn = (props: Props) : JSX.Element => {
  
  const { sentence, selectedWord, onCheckClicked, selectedCheck } = props;

  const status = selectedWord ? CtrlStatus.Checking : CtrlStatus.Idle;

  return (
    <View style={styles.checkBtnContainer}>
      {selectedCheck && <Text style={styles.resultTxt}>Great Job!</Text>}
      <TouchableOpacity
        style={[styles.actionButtonContainer, {
          backgroundColor: selectedWord ? selectedCheck? 'white' : BorderSubViewBackgroundColor :  DisabledColor
        }]}
        onPress={onCheckClicked}
      >
        <Text
          style={[styles.actionButtonText, {
            color: selectedWord && selectedCheck ?
              selectedWord === 'Hause' ?
                BorderSubViewBackgroundColor : redBackgroundColor
              : 'white'
          }]}>
          {selectedWord ? selectedCheck ? 'continue' : 'check answer' : 'continue'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  checkBtnContainer: {
    flex: 1,
  },
  actionButtonContainer: {
    width: Dimensions.get('window').width - 40,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: DisabledColor,
  },
  labelContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase'
  },
  resultTxt: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: '800',
    fontSize: 16,
    color: 'white'
  }
})