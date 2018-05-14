import React from 'react';


function ImageCredit({link, children}) {
    return (
        <div style={{fontSize: '1rem', marginTop: '1rem'}}>
            Credit: <a href={link}>{ children }</a>
        </div>
    )
}

export default ImageCredit;