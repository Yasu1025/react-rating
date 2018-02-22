import React from 'react'

export const AddColorForm = ({onNewColor=f=>f}) => {
    let _title, _color
    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ""
        _color.value = "#000000"
        _title.focus()
    }
    return(
        <form onSubmit={submit}>
            <p>
                <input type="text"
                       ref = {input => _title = input}
                       placeholder="Color Title" required />
            </p>
            <p>
                <input type="color"
                       ref = {input => _color = input} required />
            </p>
            <button>Add</button>
        </form>
    )
}
