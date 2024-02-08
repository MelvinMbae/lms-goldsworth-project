import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '@fullcalendar/multimonth'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { useContext } from 'react';
import { appContext } from './utils/appContext';

function Calendar({ eventsList }) {

    const navigate = useNavigate();
    const { user, session } = useContext(appContext)
    // console.log(user)
    const filteredEvents = session.user_type === "teacher" ? eventsList.filter((event) => { return event.teacher_id === user.teacher_id }) : eventsList.filter((event) => { return event.student_id === user.student_id })

    const handleDateClick = () => {
        alert("Date Event clicked!")
    };

    const handleEventClick = (info) => {
        const eventTitle = info.event.title;
        const eventStart = info.event.start;
        const eventEnd = info.event.end;

        Swal.fire({
            title: "Event Details",
            html: `<strong>Title:</strong> ${eventTitle}<br><strong>Start:</strong> ${eventStart}<br><strong>End:</strong> ${eventEnd}`,
            icon: "info",
            confirmButtonText: "OK",
        });
    };

    const handleAddEvent = () => {
        navigate('/create-event');
        alert("Custom button clicked!")
    };

    return (
        <div className='contents'>
            <FullCalendar
                plugins={[dayGridPlugin, multiMonthPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin, listPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: 'prev,next addEventButton',
                    center: 'title',
                    end: 'multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay,list'

                }}

                eventAdd={true}
                selectable={true}

                height={"120vh"}
                themeSystem={""}
                navLinks={true}
                editable={false}
                nowIndicator={true}

                allDaySlot={true}
                timeZone="local"
                aspectRatio={2}
                stickyFooterScrollbar={"auto"}
                initialDate={new Date().toISOString().split("T")[0]}
                events={filteredEvents.map((event) => ({
                    title: event.title,
                    allDay: event.allDay,
                    groupId: event.groupId,
                    startTime: event.startTime,
                    endTime: event.endTime,
                    daysOfWeek: event.daysOfWeek,
                    course_id: event.course_id,
                    student_id: event.student_id,
                    startRecur: event.startRecur,
                    endRecur: event.endRecur
                }
                ))
                }
                customButtons={{
                    addEventButton: {
                        text: "Add Event",
                        click: handleAddEvent,
                    },
                }}
                eventClick={handleEventClick}
                dateClick={handleDateClick}
            />
        </div>
    )
}

export default Calendar

// businessHours={{ daysOfWeek: [1, 2, 3, 4, 5], startTime: '08:00', endTime: '17:00' }}