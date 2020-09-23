import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal,ScrollView ,KeyboardAvoidingView} from 'react-native';
import db from '../Config';
import firebase from 'firebase';


export default class QuestionnaireScreen extends React.Component{
    constructor(){
        super();
        this.state = {
          Profession:'',
          weight:'',
          height:'',
          medicationTime:'',
          sleepTime:'',
          wokeUpTime:'',
          workingHours:'',
          numberOfMeals:'',
          exerciseTime:''
        }
    }

    AddInformation = () =>{
           db.collection("Questionnaire").add({
               "Profession":this.state.Profession,
               "Weight":this.state.weight,
               "Height":this.state.height,
               "WorkingHours":this.state.workingHours,
               "MedicationTime":this.state.medicationTime,
               "NumberOfMeals":this.state.numberOfMeals,
               "TimetoBed":this.state.sleepTime,
               "WokeUpTime":this.state.wokeUpTime,
               "ExerciseTime":this.state.exerciseTime
           })
           return Alert.alert("Information Added");
    }


    render(){
        return(
            <View>
            <View>
                <Text>Tell us something about yourself</Text>
                
            </View>
            <View>
                <TextInput
                  placeholder = " Your Profession"
                  onChangeText = {(text)=>{
                      this.setState({
                          Profession:text
                      })
                  }}
                />

<TextInput
                  placeholder = " Your Weight"
                  keyboardType = {"numeric"}
                  onChangeText = {(text)=>{
                      this.setState({
                          weight:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Your Height (in inches)"
                  keyboardType = {"numeric"}
                  onChangeText = {(text)=>{
                      this.setState({
                          height:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Your Working Hours"
                  keyboardType = {"numeric"}
                  onChangeText = {(text)=>{
                      this.setState({
                          workingHours:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Any Disease (If yes then medication time)"
                  onChangeText = {(text)=>{
                      this.setState({
                          medicationTime:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Number of meals in 1 day"
                  keyboardType = {"numeric"}
                  onChangeText = {(text)=>{
                      this.setState({
                          numberOfMeals:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Time when you sleep"
                  onChangeText = {(text)=>{
                      this.setState({
                          sleepTime:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Time when you woke up"
                  onChangeText = {(text)=>{
                      this.setState({
                          wokeUpTime:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Exercise time (If you do)"
                  onChangeText = {(text)=>{
                      this.setState({
                          exerciseTime:text
                      })
                  }}
                />
                </View>
                <View>
                   <TouchableOpacity
                    onPress = {()=>{
                        this.AddInformation();
                    }}
                    
                   >
                     <Text>SUBMIT</Text>
                   </TouchableOpacity>

                   <TouchableOpacity
                     
                   >
                     <Text>CANCEL</Text>
                   </TouchableOpacity>
                </View>

            </View>
        )
    }
} 