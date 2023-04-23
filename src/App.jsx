import { useEffect, useState } from "react"
import SearchBox from "../components/SearchBox"
import "./App.css"
import { Container,SimpleGrid } from "@chakra-ui/react"
import Card from "../components/Card"
export default function App(){
  const [keywords,setKeywords]=useState("")
  const [companies,setCompanies]=useState(null)

  useEffect(()=>{
    
    const fetchCompanies=async()=>{
      try{
        const response = await fetch(`https://mentor-hr-dhruvsrivastava-backend.onrender.com/${keywords}`);
        const companies = await response.json();
        console.log(companies);
        setCompanies(companies)
      }catch(error){
        console.log(error)
      }
    }
    if(keywords.length)
      fetchCompanies()

  },[keywords])

  const cardElements=companies?.map((company,i)=>(
    <Card company={company}key={i}/>
  ))


  return (
    <>
    <Container size="lg" mt={10}>

      <SearchBox keywords={keywords} setKeywords={setKeywords}/>
      
      <SimpleGrid columns={[1,null,`${companies && companies.length>1?2:1}`]} spacing="6rem">
        {cardElements}
      </SimpleGrid>

    </Container>
    </>
  )
}