import React from 'react'

export default function StudentForm({ handleChange, student }) {
  return (
    <div id='studentform'  className="form-dialogue">
        <div className="form-item">
            <label htmlFor="firstname"> First Name: </label>
            <input
                type="text"
                id="firstname"
                value={student.firstname}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="lastname"> Last Name: </label>
            <input
                type="text"
                id="lastname"
                value={student.lastname}
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
                value={student.email}
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
        <label htmlFor="personal_email"> Personal_email: </label>
        <input
            type="personal_email"
            id="personal_email"
            autoComplete="off"
            value={student.personal_email}
            onChange={handleChange}
        />
        </div>
        <div className="form-item">
            <label htmlFor="address"> Passport Photo: </label>
            <input
                type='file'
                id="image_url"
                name="image_url"
                // value={student.image_url}
                onChange={handleChange}
            />
            </div>
        <div className="form-item">
            <label htmlFor="password"> Password: </label>
            <input
                type="password"
                id="password"
                autoComplete="off"
                value={student.password}
                onChange={handleChange}
            />
        </div>
    </div>
  )
}
