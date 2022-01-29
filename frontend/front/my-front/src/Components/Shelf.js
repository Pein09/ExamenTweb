import { Fragment, useState, useEffect } from 'react';

import { Button } from '@material-ui/core';
import InfoIcon from "@material-ui/icons/Info";
import {useNavigate} from "react-router-dom";

function Pages() {
   const [data, setData] = useState([]);
   const navigate = useNavigate();

    useEffect(() =>{
        async function fetchData(){
            try{

                const result = await fetch("http://localhost:8000/api/sequelize/virtualshelf");
                const data = await result.json();
                setData(data);
              }
              catch(err){
                console.err(`No data found: ${err}`);
              }   
            }
        fetchData();
    }, [])

    return <Fragment>
      {
          data.map(x => <div>
             <p> {x.VirtualShelfId}</p>
             <p>Description: {x.Description}</p>
             <p>Date: {x.Date}</p>
           
          </div>)

          
}
<Button
startIcon = {<InfoIcon />} color ="primary" size = "small"
onClick={function onClick(){
navigate("/books");
}}
>Data about books </Button>
         
      
      
    </Fragment>;
}
export default Pages;


