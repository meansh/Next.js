"use client"

import React, { useState } from 'react'
import Header from '@/Components/Header'

const page = () => {
   const [user, setUser] = useState("Sarthak")
   const [editor, setEditor] = useState("Akarsh")
    return (
        <>
        <Header user = {user} edit = {editor}/>
        {user}
        </>
    )
}

export default page;