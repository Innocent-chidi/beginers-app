import { useState } from 'react'

const ContactForm2 = () => {
    const initUser = {
        name: "",
        email: "",
        comment: ""
    }
    const [user, setUser] = useState(initUser)

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${user.name} ${user.email} ${user.comment}`)
        setUser(initUser)
    }

  return (
    <div className='contact-form-div'>
        <h4>Send us a message below. We respond within 24Hrs. Version 2</h4>
        <form onSubmit={handleSubmit}>
            <div className='input-div'>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    value={user.name}
                    onChange={handleChange}
                />
            </div>
            <div className='input-div'>
                <label htmlFor='email'>Email</label>
                <input 
                    id='email'
                    name='email'
                    type='email'
                    value={user.email}
                    onChange={handleChange}
                />
            </div>
            <div className='input-div'>
                <label htmlFor='comment'>Comment</label>
                <textarea 
                    id='comment'
                    name='comment'
                    value={user.comment}
                    onChange={handleChange}
                />
            </div>
            <button>Send</button>
        </form>
    </div>
  )
}

export default ContactForm2