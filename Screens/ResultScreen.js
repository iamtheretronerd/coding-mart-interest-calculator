import { StyleSheet, View, Image } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import React from 'react';

const RefreshIcon = (props) => (
    <Image style={{height: 30, width: 30}} source={require('../Images/restart.png')} />
  );
  


const ResultScreen = ({route, navigation}) => {
    const { totalamt, totalinterest } = route.params;

    function submitbutton(){
        navigation.replace('Home')
    }
  return (
    <View style={styles.main} >
        <Text style={styles.text}  category='h1'>Result</Text>
        <View style={styles.card}>
            <Text category='h1'>Total Amount</Text>
            <Text category='h2' style={{color: 'blue'}}>{JSON.stringify(totalamt)}</Text>
        </View>
        <View style={styles.card}>
            <Text category='h1'>Interest</Text>
            <Text category='h2'  style={{color: 'blue'}}>{JSON.stringify(totalinterest)}</Text>
        </View>
        <Button style={styles.button} status='primary' accessoryLeft={RefreshIcon} onPress={submitbutton}>
                {evaProps => <Text {...evaProps} style={{fontSize: 25, color: 'white', marginLeft: 20}}>Calculate again</Text>}
        </Button>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
    main:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        flex: 1,
        flexDirection: 'column',
    },
    card:{
        width: '100%',
        height: '20%',
        elevation: 0,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 100,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    text:{
        fontSize: 30,
        marginBottom: 30,
        textAlign: 'center'
    },
    button:{
        marginTop: 50,
    }
});
