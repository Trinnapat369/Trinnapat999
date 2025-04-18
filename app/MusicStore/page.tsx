'use client'

import { useState } from "react"

export default function MusicStore() {
    const [instruments, setInstruments] = useState([
        { id: 1, name: "Fender Guitar", price: 300, like: 20, is_new: true },
        { id: 2, name: "Yamaha Keyboard", price: 450, like: 15, is_new: false },
        { id: 3, name: "Pearl Drum", price: 600, like: 10, is_new: true },
    ])

    const [newInstrument, setNewInstrument] = useState({
        name: '',
        price: '',
        like: '',
        is_new: false
    })

    const addInstrument = () => {
        if (!newInstrument.name || !newInstrument.price) return
        const newItem = {
            ...newInstrument,
            id: instruments.length + 1,
            price: parseFloat(newInstrument.price),
            like: parseInt(newInstrument.like),
        }
        setInstruments([...instruments, newItem])
        setNewInstrument({ name: '', price: '', like: '', is_new: false })
    }

    const deleteInstrument = (id) => {
        setInstruments(instruments.filter(item => item.id !== id))
    }

    return (
        <div className="border-2 max-w-md border-gray-300 rounded-lg mx-auto p-4">
            <h1 className="text-xl font-bold">🎸 Music Store</h1>
            <ul className="my-4">
                {instruments.map(instr => (
                    <li key={instr.id} className="my-2 border-b pb-2">
                        <div><b>{instr.name}</b> - ${instr.price}</div>
                        <div>❤️ {instr.like} {instr.is_new && <span className="text-green-500 ml-2">(New!)</span>}</div>
                        <button onClick={() => deleteInstrument(instr.id)} className="text-red-500 text-sm mt-1">Delete</button>
                    </li>
                ))}
            </ul>

            <h2 className="text-lg font-semibold mt-4">Add New Instrument</h2>
            <input className="border p-1 m-1" type="text" placeholder="Name"
                value={newInstrument.name}
                onChange={e => setNewInstrument({ ...newInstrument, name: e.target.value })} />
            <input className="border p-1 m-1" type="number" placeholder="Price"
                value={newInstrument.price}
                onChange={e => setNewInstrument({ ...newInstrument, price: e.target.value })} />
            <input className="border p-1 m-1" type="number" placeholder="Likes"
                value={newInstrument.like}
                onChange={e => setNewInstrument({ ...newInstrument, like: e.target.value })} />
            <label className="ml-2">
                <input type="checkbox"
                    checked={newInstrument.is_new}
                    onChange={e => setNewInstrument({ ...newInstrument, is_new: e.target.checked })} />
                <span className="ml-1">Is New?</span>
            </label>
            <br />
            <button onClick={addInstrument} className="bg-blue-500 text-white px-4 py-1 mt-2 rounded">Add</button>
        </div>
    )
}
