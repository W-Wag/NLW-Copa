import { useState } from "react";
import { Heading, VStack, useToast} from "native-base";
import {Header} from "../components/Header";

import { api } from '../services/api'

import { Input } from "../components/Input"
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";


export function Find() {
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState('');

    const toast = useToast();
    const {navigate} = useNavigation();

    async function handleJoinPool(){
        try{
            setIsLoading(true);

            if(!code.trim()){
                return toast.show({
                    title: 'Informe o código',
                    placement: 'top',
                    bgColor: 'red.500'
                });  
            }

            await api.post('/pools/join', {code});

            toast.show({
                title: 'Você entrou no bolão com sucesso',
                placement: 'top',
                bgColor: 'green.500'
            });

            navigate('pools');


        }catch (error){
            console.log(error);
            setIsLoading(false);

            if(error.respose?.data?.message === 'Pool not found.'){
                
             return toast.show({
                title: 'Bolão não encontrado',
                placement: 'top',
                bgColor: 'red.500'
            });
            }
            if(error.respose?.data?.message === 'You already joined this pool'){
                
                return toast.show({
                   title: 'Você ja esta dentro desse bolão.',
                   placement: 'top',
                   bgColor: 'red.500'
               });
               }

            toast.show({
                title: 'Não foi possivel encontrar o bolão',
                placement: 'top',
                bgColor: 'red.500'
            });
        }
    }
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Buscar por código" showBackButton/>
            <VStack mt={8} mx={5} alignItems="center"> 

                <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
                    Encontrar um bolão através de {'\n'}
                    seu codigo único 
                </Heading>

                <Input
                mb={2}
                placeholder="Qual o codigo do seu bolão"
                autoCapitalize="characters"
                onChangeText={setCode}
                />

                <Button
                title="BUSCAR BOLÃO"
                isLoading={isLoading}
                onPress= {handleJoinPool}
                />

            </VStack>

        </VStack>
    );

}