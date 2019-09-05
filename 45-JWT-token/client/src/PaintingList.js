import React from "react"
import PaintingCard from "./PaintingCard"

function PaintingList(props){
    // console.log("Painting List")
    console.log(props.paintingObjs)
    return(<div>
        {localStorage.token 
        ? props.paintingObjs.map(painting => {
            return <PaintingCard painting={painting} key={painting.id}/>
            // return <PaintingCard painting={painting}/>

        })
        : <h1>Please LogIn</h1>
        }
        
    </div>)
}

export default PaintingList
