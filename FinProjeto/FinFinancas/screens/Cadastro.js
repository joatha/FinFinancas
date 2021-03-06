import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, CheckBox, Input, Text} from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
import { Button as PaperButton,Provider, Dialog, Paragraph, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDialog from '../components/CustomDialogo';
import usuarioService from '../services/UsuarioService';

export default function Cadastro({navigation}) {
    const [email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [senha, setSenha] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [isSelected, setSelected] = useState(false)
    const[errorEmail, setErrorEmail]= useState(null)
    const[errorNome, setErrorNome]= useState(null)
    const[errorcpf, setErrorCpf]= useState(null)
    const[errortelefone, setErrorTelefone]= useState(null)
    const [errorSenha, setErrorSenha] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const [visibleDialog, setVisibleDialog] = useState(false);
    const [titulo, setTitulo] = useState(null)
    const [mensagem, setMensagem] = useState(null)
    const [tipo, setTipo] = useState(null)
  
    let cpfField= null
    let telefoneField = null

    const showDialog = (titulo, mensagem, tipo) =>{
      setVisibleDialog(true)
      setTitulo(titulo)
      setMensagem(mensagem)
      setTipo(tipo)
    }

    const hideDialog = (status) =>{
      setVisibleDialog(status)
    }
  
  
    const validar =()=>{
        let error = false
        setErrorEmail(null)
        setErrorCpf(null)
        setErrorSenha(null)
  
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if(!re.test(String(email).toLowerCase())){
          setErrorEmail("Preencha seu e-mail corretamente")
          error=true
        }
        if(!cpfField.isValid()){
          setErrorCpf("Preencha seu CPF corretamente")
          error=true
        }
        if(telefone ==null){
          setErrorCpf("Preencha o telefone corretamente")
          error=true
        }
        if(senha ==null){
          setErrorSenha("Preencha a senha")
          error=true
        }
        return !error
    }
  
    const Cadastrar =() =>{
        if(validar()){
          setLoading(true)

          let data={
              email: email,
              cpf : cpf,
              nome:nome,
              telefone:telefone,
              senha:senha,
          }
          usuarioService.salvar(data)
          .then((response) =>{
            setLoading(false)
            const title = (response.data.status) ? "Sucesso" : "Erro"
            showDialog(titulo, response.data.mensagem, "SUCESSO")
           
          })
          .catch((error) =>{
            setLoading(false)
            showDialog("Erro", "Houve um erro inesperado", "ERRO")
            
          })
        }
  }
    return (
    <View >
      <Text h3>Cadastre-se</Text>
     
      <Input
         placeholder="E-mail"
         onChangeText={value => {  setEmail(value) 
                                   setErrorEmail(null)
        }}
         keyboardType="email-address"
         errorMessage={errorEmail}
      />
       <Input
         placeholder="Nome"         
         onChangeText={value => setNome(value) }         
         errorMessage={errorNome}
      />
      
      <View>   

      <TextInputMask
        placeholder="CPF"
        type={'cpf'}
        value={cpf}
        onChangeText={value => {
        setCpf(value) 
        setErrorCpf(null)
       }}
        keyboardType="number-pad"
        returnKeyType="done"
        ref={(ref) => cpfField = ref}
      />
      </View>
      <Text >{errorcpf}</Text>

      <View >   
      <TextInputMask
        placeholder="Telefone"
        type={'cel-phone'}
        options={{
          maskType:'BRL',
          withDDD: true,
          dddMask:'(99)'
        }}
        value={telefone}
        onChangeText={value => setTelefone(value) }
        keyboardType="phone-pad"
        returnKeyType="done"
        ref={(ref) => telefoneField = ref} />
         </View>
         <Text >{errortelefone}</Text>

         <Input
         placeholder="Senha"         
         onChangeText={value => setSenha(value) }         
         errorMessage={errorSenha}
         secureTextEntry={true}
        />

        <CheckBox
          title="Eu aceito os termos de uso"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="red"
          checked={isSelected}
          onPress={()=> setSelected(!isSelected)}

        />
      {
        isLoading &&
        <Text>Carregando...</Text>
      }
      {!isLoading &&
      <Button
        icon={
        <Icon
        name="check"
        size={15}
        color="white"
       />
      }
        title="Cadastrar"
        onPress={()=>Cadastrar()}
        />
      }

      {visibleDialog &&
        <CustomDialog titulo={titulo} mesagem={mensagem} tipo={tipo} visible={visibleDialog} onClose={hideDialog}></CustomDialog>
      }
    
     </View>
  );
}