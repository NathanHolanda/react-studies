import React, {useState, useEffect} from 'react'

const useCounter = (number = 10) => {
    const [counter, setCounter] = useState(number)

    const inc = () => setCounter(counter + 1)

    const dec = () => setCounter(counter - 1)

    return [counter, inc, dec]
}

const useFetch = (url, method = 'GET') => {
    const [content, setContent] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        fetch(url, {method})
        .then(resp => resp.json())
        .then(json => 
            setContent({
                data: json,
                loading: false
            })
        )
    }, [url, method])

    return content
}

export {
    useCounter,
    useFetch
}