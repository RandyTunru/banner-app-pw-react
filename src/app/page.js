"use client";

import "@styles/page.css";
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState("A Analta Dwiyanto")
  const [inputValue, setInputValue] = useState("")

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function changeName(e) {
    e.preventDefault()
    // if (e.type === "keydown" && e.key !== "Enter") return
    setName(inputValue)
  }

  return (
    <>
      <div className="container">
        <div id="bio">
          <img src="../../profileImg.jpg" id="profile-image"></img>
          <div id="bio-details">
            <h1>{name}</h1>
            <p>D121211023</p>
            <p>Dengan senyum karamel ku, menyinari harimu</p>
          </div>
        </div>
        <form id="form-wrapper" onSubmit={changeName}>
          <input type="text" className="name-card-item" id="name" placeholder="Tuliskan namamu..." onChange={handleInputChange}/>
          {inputValue !== "" ? (
              <button type="submit" className="name-card-item" id="btn">Halo!</button>
            ) : (
              <button type="submit" className="name-card-item" id="btn" disabled>Disabled!</button>
            )
          }
        </form>
      </div>
    </>
  )
}
