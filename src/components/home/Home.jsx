import React from 'react'
import { useEffect, useState } from 'react';
import Pokemon from './pokemon'
import { ChakraProvider, Box, Image, Center, SimpleGrid } from "@chakra-ui/react"


const baseURL = 'https://pokeapi.co/api/v2/pokemon'
const getAllPokemon = baseURL + '?limit=151'

function GetPokemon(name) {
  return new Promise((resolve) => {
      fetch(`${baseURL}/${name}`)
          .then((res) => {
              resolve(res.json())
          })
  })
}


const Home = () => {
    const [names, setNames] = useState([]);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch(getAllPokemon)
        .then((res) => res.json())
        .then((data) => {
          setNames(data.results.map(pokemon => {
            return pokemon.name
          }));
        })
    }, [])
  
    useEffect(() => {
      let pokemonRequests = []
      names.forEach(
        (name) => {
          pokemonRequests.push(GetPokemon(name))
        }
      )
  
      Promise.all(pokemonRequests).then((allPokemonData) => {
        setData(allPokemonData.map(pokemon => {
          return Pokemon(pokemon)
        }))
      })
    }, [names])
  
    return (
      <ChakraProvider>
        <Box w="100%" p={4} color="white">
  
          <SimpleGrid minChildWidth="240px" spacing="20px">
            {data}
          </SimpleGrid>
        </Box>
      </ChakraProvider>
    );
  }

export default Home