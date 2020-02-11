import React from 'react'

export default function Form() {
    return (
        <form>
            <label HTMLFor='name'>Name</label>
            <input placeholder='name' name='name'/>
            <label HTMLFor='email'>Email</label>
            <input type='email' placeholder='email' name='email'/>
            <label HTMLFor='message'></label>
            <textarea name='message'/>
        </form>
    )
}
