import React from "react"


function IntroSectionAuxDiv(props){
    switch(props.currentHighlight){
        case 'research':
            return <h1>i like research</h1>
        case 'design':
            return <h2>i like design</h2>
        case 'pup':
            return <p>an image of cookies goes here</p>
        default:
            return <p> an image of harmon</p>
    }
}

export default IntroSectionAuxDiv