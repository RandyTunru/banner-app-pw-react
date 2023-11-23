"use client";

import { useEffect , useState } from "react";
import "./diary.css";
import axios from "axios";
import Navbar from "@components/navbar/navbar";

export default function Diary() {
    const [judul, setJudul] = useState([])
    const [isiDiary, setIsiDiary] = useState([])

    const endpoint = "https://6555c3ef84b36e3a431e4752.mockapi.io/Diary"
    async function getDiary() {
        const res = await axios.get(endpoint)
        const data = res.data
        const nama = data.map((item) => item.nama)
        const isi_diary = data.map((item) => item.isi_diary)
        setJudul(nama)
        setIsiDiary(isi_diary)
    }

    useEffect(() => {
        getDiary()}, [])

    return(
        <>
        {judul.length > 0 ? (
            <ul>
                {judul.map((item, index) => (
                    <li key={index}>
                        <div className="diary-container">
                            <h1>{item}</h1>
                            <p>{isiDiary[index]}</p>
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            "API not loading"
          )}
        </>
    )
}