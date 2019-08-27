import React from 'react'

function PaintingForm(props){
    return(
        <div>
            <form onSubmit={(e) => props.add(e)}>
                <input type='text' placeholder='Painting Title'/>
                <input type='text' placeholder='Painting Image URL'/>
                <input type='text' placeholder='Artist Name'/>
                <input type='submit' value='Add Painting'/>

            </form>
        </div>
    )
}

export default PaintingForm