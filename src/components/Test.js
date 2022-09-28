import React, { useState } from 'react'
import axios from 'axios'

const Test = () => {
    const [result, setResult] = useState('')
    const a = async () => {
        const fds = await axios('/test', {})
        setResult(fds.data.text)
        console.log(fds.data.text)
    }
    return (
        <>
            <button onClick={a}>클릭</button>
            <p>{result}</p>
            <p>github a c ios 성공</p>
            <p>test </p>
        </>
    )
}

export default Test
