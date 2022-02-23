import React from 'react'

export default function ScreenHeading(props) {
  return (
    <div className='headind-container'>
        <div className='screen-heading'>
            <span>{props.title}</span>
        </div>
        {props.subHeading ? (
            <div className='screen-sub-heading'>
                <spam>{props.subHeading}</spam>
            </div>
        ):(
            <div></div>
        )}
        <div className='heading-seperator'>
            <div className='seperator-line'></div>
            <div className='seperator-blob'></div>
            <div></div>
        </div>
    </div>
  )
}
