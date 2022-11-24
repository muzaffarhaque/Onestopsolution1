import React from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom'

export default function Buy_sell_books() {

 
  let data=JSON.parse( localStorage.getItem("Profile"))
  return (
    <div>Buy_sell_books
      <img src={data} alt="" />
    </div>
  )
}
