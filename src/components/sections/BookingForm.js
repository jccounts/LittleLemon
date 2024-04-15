
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ReservationForm(props) {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [people, setPeople] = useState(2);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    );

    function handleDateChange(e) {
        setDate(e.target.value);

        let stringify = e.target.value;
        const date = new Date(stringify);

        props.updateTimes(date);

        setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
    }

    return (
        <form className="reservation-form">
            <div className="form-column">
                <div>
                    <label htmlFor="fName">First Name</label> <br></br>
                    <input
                        type="text"
                        id="fName"
                        placeholder="First Name"
                        required
                        minLength={2}
                        maxLength={50}
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor="lName">Last Name</label> <br></br>
                    <input
                        type="text"
                        id="lName"
                        placeholder="Last Name"
                        minLength={2}
                        maxLength={50}
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor="email">Email</label> <br></br>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        required
                        minLength={4}
                        maxLength={200}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor="phonenum">Phone Number</label> <br></br>
                    <input
                        type="tel"
                        id="phonenum"
                        placeholder="(xxx)-xxx-xxxx"
                        value={tel}
                        required
                        minLength={10}
                        maxLength={25}
                        onChange={(e) => setTel(e.target.value)}
                    ></input>
                </div>
            </div>

            <div className="form-column">
                <div>
                    <label htmlFor="people">Number of People</label> <br></br>
                    <input
                        type="number"
                        id="people"
                        placeholder="Number of People"
                        value={people}
                        required
                        min={1}
                        max={100}
                        onChange={(e) => setPeople(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor="date">Select Date</label> <br></br>
                    <input
                        type="date"
                        id="date"
                        required
                        value={date}
                        onChange={handleDateChange}
                    ></input>
                </div>

                <div>
                    <label htmlFor="time">Select Time</label> <br></br>
                    <select id="time" required>
                        {finalTime}
                    </select>
                </div>

                <div>
                    <label htmlFor="occasion">Occasion</label> <br></br>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%'}}>
                <div>
                    <small>
                        <p>
                            <strong>Note</strong>: You cannot edit your reservation after submission.
                            <br/>Please review your request before submitting.
                        </p>
                    </small>
                    <Link className="action-button" to="/confirmation">
                        Reserve Table
                    </Link>
                </div>
            </div>
        </form>
    );
}
