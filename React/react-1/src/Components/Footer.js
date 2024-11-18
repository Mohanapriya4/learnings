import React from 'react'

const Footer = ({items}) => {
    // const year = new Date();
  return (
    <footer>
     List {items.length===1?"item":"items"}: {items.length}
      {/* Copyright &copy; {year.getFullYear()} */}
    
    </footer>
  )
}

export default Footer