import React from 'react'

export default function SignUpForm({ handleChange, handleSubmit, formData }) {
  return (
    <form onSubmit={handleSubmit} className="form-dialogue">
        <div className="form-item">
            <label htmlFor="firstname"> First Name: </label>
            <input
                type="text"
                id="firstname"
                value={formData.firstname}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="lastname"> Last Name: </label>
            <input
                type="text"
                id="lastname"
                value={formData.lastname}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="email"> Email: </label>
            <input
                type="email"
                id="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="address"> Passport Photo: </label>
            <input
                type='file'
                id="image_url"
                value={formData.image_url}
                onChange={handleChange}
            />
            </div>
        <div className="form-item">
            <label htmlFor="password"> Password: </label>
            <input
                type="password"
                id="password"
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
            />
        </div>
        <button className="btn" type="submit">
            Register
        </button>
    </form>
  )
}
