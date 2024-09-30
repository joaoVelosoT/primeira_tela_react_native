import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
export default function CadNews() {


    const initialForm = {
        nome : "",
        email : "",
        senha : "",
        telefone : "",
        cpf : "",
    };

    const [formState, setFormState] = useState(initialForm);

    const handleInput = (event) => {
        const target = event.currentTarget;
        const {value , nome, email, senha, telefone, cpf} = target; 

    } 

    // const [nome, setNome] = useState('');
    // const [email, setEmail] = useState('');
    // const [senha, setSenha] = useState('');



    // const handleSubmit = () => {

    //     // Validacao de formulario

    //     if(!nome || !email || !senha){
    //         alert("Por favor, preencha todos os nomes")
    //     }

    //     console.log("Nome: ", nome);
    //     console.log("Email: ", email);
    //     console.log("Senha: ", senha); 

    //     setNome("");
    //     setEmail("");
    //     setSenha("");
    // }
  return (
    <View style = {styles.container}>
        <TextInput
            style = {styles.input}
            placeholder ='Digite seu nome'
            value={nome}
            onChangeText={setNome}
        />  
        <TextInput
            style = {styles.input}
            placeholder ='Digite seu email'
            value = {email}
            onChangeText={setEmail}
        />
        <TextInput
            style = {styles.input}
            placeholder ='Digite sua senha'
            value = {senha}
            secureTextEntry = {true }
            onChangeText={setSenha}
        />
        <TextInput
            style = {styles.input}
            placeholder ='Digite seu telefone'
            value = {senha}
            secureTextEntry = {true}
            onChangeText={setSenha}
        />
        <TextInput
            style = {styles.input}
            placeholder ='Digite seu CPF'
            value = {senha}
            secureTextEntry = {true }
            onChangeText={setSenha}
        />
        <Button
            title='Enviar'
            onPress={handleSubmit}
            
        />
        {nome && email && senha && (
            <Text>
                senha: {'*'.repeat(senha.length)}
            </Text>
        )}
         
    </View>
    
  )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 30
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 0.5,
        marginBottom: 12,
        paddingLeft: 8
    }
    
})