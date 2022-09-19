const ListComponent=(props)=>{

    if(props.data === undefined || props.data === null || props.data.length === 0) {
        return (<div className="container">
            <strong>
                No Data to Display
            </strong>
        </div>);
     }  

    else{
        return(
            
            props.data.map((e,index)=>(
             <tr>{
               Object.keys(e).map((header,index)=>(

                <td>{e[header]}</td>
               ))
    }
    </tr>
              
                
           ))

           
            )
        
    }

};

export default ListComponent;