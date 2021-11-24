import React, { useState, useEffect } from 'react'

export default function useDebounce(value, timer) {
    const [debounce, setDebounce] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(value)
        }, timer)
        return () => {
            clearTimeout(timeout)
        }
    }, [value, timer])
    return debounce
}
