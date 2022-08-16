import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box, Button, Text, Grid, useColorMode, useTheme } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { GridItem } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import {getAllCategories} from '../../store/actions/categoryActions'

export default function Home() {
    const{categories} = useSelector((state) => state.category);
    const categoryDispatch = useDispatch();
    useEffect(() => {
        categoryDispatch(getAllCategories());

    },[])


    return (
        <ChakraProvider>

            <Grid
                templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
                gridTemplateRows={'150px 1fr 150px'}
                gridTemplateColumns={'650px 1fr'}
                h='600px'
                w='100%'

                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='750' bg='orange.300' area={'header'}>


                    <Heading noOfLines={1}>
                        Welcome Book Store
                    </Heading>
                </GridItem>
                
                    <Box boxSize='m'>
                        <Image src='https://images.unsplash.com/photo-1580945793409-17afce9a340f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='Dan Abramov' />
                    </Box>
           
                <GridItem pl='2' bg='green.300' area={'main'}>
                    <Heading>
                        {categories.map((category) => (
                            <Box key={category.id}>
                                <Text>{category.name}</Text>
                            </Box>
                        ))}
                    </Heading>
                </GridItem>
             
            </Grid>
        </ChakraProvider >
    )
}