import { Input,InputGroup,InputLeftElement } from '@chakra-ui/react'
import {FaSearch} from "react-icons/fa"
export default function SearchBox({keywords,setKeywords}){

    function handleChange(e){
        setKeywords(e.target.value)
    }

    return (
        <InputGroup boxShadow="sm" borderColor={'gray.400'} borderRadius="md" mb="4rem">
            <InputLeftElement 
                pointerEvents="none"
                children={<FaSearch />}
            />
            <Input 
                placeholder='Search for keywords like shop, sign up, relaxed, salesforce' onChange={handleChange} 
                value={keywords}              
            />
        </InputGroup>
    )
}