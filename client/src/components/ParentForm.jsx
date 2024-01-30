import React from 'react'

export default function ParentForm({ handleChange, parent }) {

  return (
    <div id='parentform' className="form-dialogue">
        <div className="form-item">
            <label htmlFor="firstname"> First Name: </label>
            <input
                type="text"
                id="Firstname"
                value={parent.Firstname}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="lastname"> Last Name: </label>
            <input
                type="text"
                id="Lastname"
                value={parent.Lastname}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="email"> Email: </label>
            <input
                type="email"
                id="Email"
                autoComplete="off"
                value={parent.Email}
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="address"> Passport Photo: </label>
            <input
                type='file'
                id="Image_url"
                value={parent.Image_url}
                onChange={handleChange}
            />
            </div>
        <div className="form-item">
            <label htmlFor="password"> Password: </label>
            <input
                type="password"
                id="Password"
                autoComplete="off"
                value={parent.Password}
                onChange={handleChange}
            />
        </div>
    </div>
  )
}
