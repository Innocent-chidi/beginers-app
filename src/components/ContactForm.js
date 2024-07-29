import { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${name} ${email} ${comment}`)
        setName('')
        setEmail('')
        setComment('')
    }

  return (
    <div className='contact-form-div'>
        <h4>Send us a message below. We respond within 24Hrs</h4>
        <form onSubmit={handleSubmit}>
            <div className='input-div'>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='input-div'>
                <label htmlFor='email'>Email</label>
                <input 
                    id='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='input-div'>
                <label htmlFor='comment'>Comment</label>
                <textarea 
                    id='comment'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <button>Send</button>
        </form>
    </div>
  )
}

export default ContactForm