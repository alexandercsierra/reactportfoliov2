import React from 'react'
import styled from 'styled-components'

export default function Footer(props) {
    return (
        <div className={props.footerClass}>
        {/* // <div className='fixed-bottom' style={{background: '#2b2b2b', padding: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> */}
            	<p style={{margin: '0'}}> © Copyright Alexander Sierra 2020</p>
        </div>
    )
}
