'use client'

import { useState } from "react"

export default function Person() {

    const [person, setPerson] = useState({
        name: "Trinnapat Naksan",
        age: 20,
        email: "omobily6578@gmail.com",
        salary: "20",
    })
    
    const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {   
        const { name, value } = e.target
        setPerson({
            ...person,
            [name]: value
        })
    }   
  
    return (
        <div className="max-w-sm border border-gray-200 rounded-lg shadow-md p-4 mx-auto">
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Person:</b> {person.name}
            </div>
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Age:</b> {person.age}
            </div>
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Email:</b> {person.email}
            </div>
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Salary:</b> {person.salary}
            </div>
            <div> 
                <label
                    htmlFor="name">Name</label>
                <input
                    className="border p-2 w-full rounded-md mb-4"
                    type="text"
                    name="name"
                    value={person.name}
                    onChange={handleChage}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Age</label>
                <input
                    className="border p-2 w-full rounded-md mb-4"
                    type="number"
                    name="age"
                    value={person.age}
                    onChange={handleChage}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Email</label>
                <input
                    className="border p-2 w-full rounded-md"
                    type="email"
                    name="email"
                    value={person.email}
                    onChange={handleChage}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Salary</label>
                <input
                    className="border p-2 w-full rounded-md mb-4"
                    type="number"
                    name="Salary"
                    value={person.salary}
                    onChange={handleChage}
                />
            </div>

        </div>
    )
}