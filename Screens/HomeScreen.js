import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from '@ui-kitten/components';
import React, {useEffect} from 'react';

const HomeScreen = ({ navigation }) => {
    const [principal, setPrincipal] = React.useState('');
    const [annualinterest, setannualinterest] = React.useState('');
    const [period, setperiod] = React.useState('');


    function clearInput(){
        setPrincipal('')
        setannualinterest('')
        setperiod('')
    }

    function handlePrincipal(text){
        setPrincipal(text);
    }

    function handleAnnualinterest(text){
        setannualinterest(text);
    }
    function handlePeriod(text){
        setperiod(text);
    }

    function submitbutton(){
        // console.log("Principal: ",principal);
        // console.log("Annual Interest: ",annualinterest);
        // console.log("Years: ", period)
        if (principal.match(/^[a-zA-Z]+$/)) {
            alert( "Only Numbers");
           }
        else if (annualinterest.match(/^[a-zA-Z]+$/)) {
            alert( "Only Numbers");
        }
        else if (period.match(/^[a-zA-Z]+$/)) {
            alert( "Only Numbers");
        }
        else{
            // alert(principal * (1 + annualinterest)**period)
            let decimalint = annualinterest / 100
            let set1 = (1+ decimalint) ** period
            let totalamt = principal * set1
            let totaled = parseFloat(totalamt).toFixed(2) - 0.00
            let totalinterest = parseFloat(totalamt).toFixed(2) - principal
            
            //alert(totalinterest)
            navigation.replace('Result', {
                totalamt: totaled,
                totalinterest: totalinterest
              });
        }
      

    }
  return (
    <View style={styles.main}>
        
        <Text style={styles.text} category='h1'>Interest Calculator</Text>
        <Input
        style={styles.input}
        textStyle={{paddingVertical:12,marginLeft:-5,paddingLeft:10,marginRight:0,fontSize:25,}}size='small'
        placeholder='Principal'
        keyboardType = 'number-pad'
        value={principal}
        onChangeText={(text)=>{handlePrincipal(text)}}
        />
        <Input
        style={styles.input}
        textStyle={{paddingVertical:12,marginLeft:-5,paddingLeft:10,marginRight:0,fontSize:25}}size='small'
        placeholder='Annual Interest %'
        keyboardType = 'number-pad'
        value={annualinterest}
        onChangeText={(text)=>{handleAnnualinterest(text)}}
        />
        <Input
        style={styles.input}
        textStyle={{paddingVertical:12,marginLeft:-5,paddingLeft:10,marginRight:0,fontSize:25}}size='small'
        placeholder='Period'
        keyboardType = 'number-pad'
        value={period}
        onChangeText={(text)=>{handlePeriod(text)}}
        />
        <Button style={styles.button} onPress={submitbutton}>
        {evaProps => <Text {...evaProps} style={{fontSize: 25, color: 'white'}}>Calculate</Text>}
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    main:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        flex: 1,
        flexDirection: 'column',
    },
    input:{
        marginBottom: 10,
        borderRadius: 20,
        borderWidth: 0
    },
    button:{
        width: '80%',
        marginTop: 20,
        paddingVertical : 12,
        borderRadius : 60,
        
    },
    text:{
        fontSize: 50,
        marginBottom: 30,
        textAlign: 'center'
    }
});
