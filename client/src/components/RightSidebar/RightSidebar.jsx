import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

const RightSidebar = () => {
  return (
    <aside className='Right-side'>
      <Widget/>
      <WidgetTags/>
    </aside>
  )
}

export default RightSidebar