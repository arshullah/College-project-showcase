import ProductCard from '@/components/ProductCard';
import axios from 'axios'
import React, { useState } from 'react'

const BrowseProject = () => {

const [projectLiist, setProjectLiist] = useState([]);

const fetchProjects = async ()=>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/project/getall`);
    
}
  
   


    return (
        <div>BrowseProject</div>
    )
}

export default BrowseProject;