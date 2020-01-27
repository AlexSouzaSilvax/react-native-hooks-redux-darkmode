import React from 'react';
import { TouchableOpacity, View, Text, Image, Dimensions, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import iconDarkMode from '../../assets/iconDarkMode.png';
import iconLightMode from '../../assets/iconLightMode.png';

function alterarStatusDarkMode(status) {
    return { type: 'ALTERAR_DARKMODE', status }
 }

export default function Tela1({navigation}) {

    const statusAtual = useSelector(state => state.darkMode);
    const dispatch = useDispatch();

    function alteraMode() {        
        if(statusAtual) {                        
            dispatch(alterarStatusDarkMode(false));
        } else {            
            dispatch(alterarStatusDarkMode(true));
        }        
    }

    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: statusAtual ? 'black' : 'white'}}>
             <StatusBar
          barStyle={statusAtual ? 'dark-content' : 'light-content'}
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor="#00BCD4"
          //Background color of statusBar
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
            <View style={{width: Dimensions.get('screen').width - 50, backgroundColor: '#aaa', alignItems: 'center', borderRadius: 4}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 5}}>Tela 1</Text>
                <Text style={{fontSize: 18, marginTop: 10}}>Status do darkMode: {statusAtual ? 'true' : 'false'}</Text>
                <TouchableOpacity onPress={alteraMode} style={{marginTop: 50, width: 80, height: 80, borderRadius: 40, backgroundColor: '#34343450', alignItems: 'center', justifyContent: "center" }}>
                    <Image source={statusAtual ? iconDarkMode : iconLightMode} style={{width:35, height: 35}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Tela2')} style={{width: Dimensions.get('screen').width - 50, height: 42, marginTop: 50, backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center', margin: 8 }}>
                    <Text style={{fontSize: 20}}>Tela 2</Text>
                </TouchableOpacity>
            </View>
            <Text style={{marginTop:15, fontSize: 18, color: statusAtual ? 'white' : 'black'}}>@alexsouzasilvax</Text>
        </View>
    );
}