import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect,useState } from 'react';

const Quiz = ({navigation}) => {
  const [questions,setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);

  const shuffle = (array) => {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
     [array[i],array[j]] = [array[j],array[i]];
    }
    console.log("shufledvalues",array);
    return array;
  }

 
  const getQuiz = async() => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(combineArray(data.results[0]));
  }
  const combineArray = (_questions) =>{
    console.log("_questions", _questions);
    let option = [..._questions.incorrect_answers];
    option.push(_questions.correct_answer);
    console.log("option", option);
    shuffle(option);
    return option;
  }
  console.log(options);
  useEffect(()=>{
    getQuiz();
   
  },[])
 
  const nextQuestion = () => {
    setQues(ques+1);
    setOptions(combineArray(questions[ques+1]));
  
  };
  return (
    
    <View style={styles.container}>
      {questions && 
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.questionText}>Q.{decodeURIComponent(questions[ques].question)}</Text>
        </View>
      <View style={styles.options}>
          <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
       {ques < 9 ? (<TouchableOpacity style={styles.button} onPress={nextQuestion}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>):
        (<TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Result")}}>
          <Text style={styles.buttonText}>SHOW RESULTS</Text>
        </TouchableOpacity>)
}
      </View>
    </View>  
}
</View>
  )
}

export default Quiz;

const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    paddingHorizontal:16,
    flex: 1,
    justifyContent:'space-between',
  },
  question: {
    marginVertical: 16,
  },
  questionText:{
    fontSize: 30,
    fontWeight:'600',
    color:'black',
  },
  options:{
    marginVertical: 16,
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    marginBottom: 12
  },
  button:{
    backgroundColor:'#292F36',
    padding:20,
    paddingHorizontal:30,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
  },
  buttonText:{
    color:'white',
    fontSize:15,
  },
  option:{
    paddingVertical:12,
    backgroundColor:'#52575D',
    marginVertical:6,
    borderRadius:12,
    
  },
  optionText:{
    fontSize:18,
    fontWeight:'600',
    color:'white',
    paddingHorizontal:16,
  }
})