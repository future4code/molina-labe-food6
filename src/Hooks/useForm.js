import { useState } from "react"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const clear = () => {
        setForm(initialState)
    }

    const setAll = (state) => {
        setForm(state)
    }

    return [form, onChange, clear, setAll]
}

export default useForm 