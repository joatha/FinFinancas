import React, { useState } from 'react';
import { StyleSheet, View,Image } from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
  
  const [email, setEmail] = useState("")

  const entrar = () =>{
      alert("Bem-Vindo!")
    
    }

  return (
 
  <View style={styles.container}>
         <View > 
           <Image  style={styles.imagePng} source={require('../FinFinancas/assets/img/01.png')}/>
        </View>
        <Text style={styles.textTitleLogin}>Fin!</Text>
        
         <Text style={styles.conteudoTexto}>
           Seu 
           aplicativo 
           de finanças 
           pessoais. 
           </Text>
           
           <Input 
            placeholder="E-mail"
            style={styles.iptEmail}
            keyboardType="email-address"
            leftIcon={{type: 'font-awesome', name: 'envelope' }}
            onChangeText={value => setEmail(value)}
            />

            <Input 
            placeholder="Senha"
            style={styles.iptEmail}
            secureTextEntry={true}
            leftIcon={{type: 'font-awesome', name: 'lock' }} />
           
            <View style={styles.buttonMain}> 
            <Button
           
              icon={
                <Icon
                  name="check-circle"
                  size={20}
                  color="white"/>
                }
                
              title="Entrar"
              buttonStyle={styles.buttonMain}
             />
             
                            
             </View>
      </View>
     );  
   }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8948CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitleLogin:{
    color:'#FFFFFF',
    fontSize:48,
    fontStyle:'normal'
  },
  conteudoTexto:{
    fontSize:24,
    color:"#FFFFFF",
    textAlign:'center',
    marginBottom:10,

  },
  imagePng:{
    width:150,
    height:100,
    alignItems:'center',
    marginBottom:20,
    opacity:50
  },
  iptEmail:{
    color:'#FFFFFF',
   
  },
  buttonStilo:{
    width:300,
    borderRadius:5,
    fontSize:20
    
  },
  buttonMain:{
    
    width:300,    
    marginBottom:20,
        
  },
  buttonSecond:{
    width:500,    
    marginTop:20
  },
 

});
