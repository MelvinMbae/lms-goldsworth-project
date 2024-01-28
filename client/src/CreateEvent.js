import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CreateEvent() {
    const [formData, setFormData] = useState({
        allDay: 0,
        groupId: 40,
        start: new Date(),
        end: new Date(),
        daysOfWeek: "1,2,3,4,5",
        startTime: new Date(),
        endTime: new Date(),
        startRecur: new Date(),
        endRecur: new Date(),
        title: "",
        student_id: 2,
        course_id: 2,
        teacher_id: 3,
    });

    const navigate = useNavigate();

    function handleChange(e) {
        const id = e.target.id;
        let value = e.target.value;

        if (id === 'start' || id === 'end' || id === 'startTime' || id === 'startRecur' || id === 'endRecur') {
            value = new Date(value);
        }

        setFormData({ ...formData, [id]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Format date values
        const formattedFormData = {
            ...formData,
            start: formData.start.toDateString().split('T')[0],
            end: formData.end.toDateString().split('T')[0],
            startTime: formData.startTime.toDateString().split('T')[1].slice(0, 5),
            endRecur: formData.endRecur ? formData.endRecur.toDateString().split('T')[0] : null,
            startRecur: formData.startRecur ? formData.startRecur.toDateString().split('T')[0] : null,
        };

        const emptyField = Object.keys(formattedFormData).find(
            (key) => !formattedFormData[key].toString().trim()
        );

        if (emptyField) {
            Swal.fire({
                title: "Invalid!",
                text: `Please enter a valid ${emptyField}`,
                icon: "error",
                confirmButtonText: "Okay",
            });
            return;
        }

        fetch("/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedFormData),
        })
            .then((r) => r.json())
            .then((r) => {
                // alert(`Welcome ${r.firstname}`);
                navigate("/calendar", { replace: true });
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Invalid");
            });
    }

    return (
        <div className="login-dialogue">
            <div className="form-dialogue">
                <form onSubmit={handleSubmit}>
                    <h2 className="form-dialogue-h2">Create an Event</h2>
                    <div className="form-item">
                        <label htmlFor="start"> Start:</label>
                        <input
                            type="date"
                            id="start"
                            value={formData.start}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="end"> End:</label>
                        <input
                            type="date"
                            id="end"
                            value={formData.end}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="daysOfWeek"> Days:</label>
                        <input
                            type="text"
                            id="daysOfWeek"
                            value={formData.daysOfWeek}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="startTime"> StartTime:</label>
                        <input
                            type="time"
                            id="startTime"
                            value={formData.startTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="startRecur"> startRecur:</label>
                        <input
                            type="date"
                            id="startRecur"
                            value={formData.startRecur}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="endRecur"> Start Recurrence:</label>
                        <input
                            type="date"
                            id="endRecur"
                            value={formData.endRecur}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="title"> Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="event-btn" type="submit">
                        Create Event
                    </button>
                </form>
            </div>
        </div>
    );
}
