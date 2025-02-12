


import React, { useEffect, useState } from 'react'

import '../styles/fetch.css'
const Fetchdata = () => {

    const [fetchData,setFetchData] =useState([])
    const [filterData, setFilterData] = useState([])
    const [search, setSearch]=useState('')

    async function showData(){

        try{

            let res=await fetch('https://jsonplaceholder.typicode.com/users')

            let data=await res.json()

            console.log(data)

            setFetchData(data)
            setFilterData(data)
        }catch(e){

            console.log(e)
        }
    }


    useEffect(()=>{
        showData()
    },[])

const handleChange=(e)=>{
    let serchData=e.target.value

    setSearch(serchData)
    let filterData=fetchData.filter(item=>item.name.toLowerCase().includes(serchData.toLowerCase()))
    setFilterData(filterData)
}

const handleChangeEmail=(e)=>{
    let serchData=e.target.value
    setSearch(serchData)
    let filterData=fetchData.filter(item=>item.email.toLowerCase().includes(serchData.toLowerCase()))
    setFilterData(filterData)
}

  return (
    
<div id='container'>


<div>
    <label for='name'>Name :</label>
    <input type='text' placeholder='Filter by Name' onChange={handleChange} value={search} />
    <label for='name'>Email:</label>
    <input type='text' placeholder='Filter by Email' onChange={handleChangeEmail} value={search} />
</div>
{
    filterData.map((ele,id)=>{

        return(
            <ul key={id}>
                <li>Name: {ele.name}</li>
                <li>Email: {ele.email}</li>
            </ul>
            
        )
    })
}
</div>
  )
}

export default Fetchdata