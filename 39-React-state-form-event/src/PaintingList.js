import React from "react"
import PaintingCard from "./PaintingCard"

function PaintingList(props){
    console.log(props.paintingObjs)
    return(<div>
        <p>I am Painting List</p>
        {props.paintingObjs.map(painting => {
            return <PaintingCard {...painting} key={painting.id}/>
            // return <PaintingCard painting={painting}/>

        })
        }
    </div>)
}

export default PaintingList
