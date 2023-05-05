import "./EmployeeForm.scss";
import { useNavigate, Link } from "react-router-dom";

function EmployeeForm() {

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <>
            <form className="form" onSubmit={submitHandler}>
                <h1 className="form__h1">
                    Team Event Review
                </h1>
                <ol>
                    <li className="form__question">
                        Which of the following statements best describes your current relationship with your colleagues?
                        <div className="form__options">
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb1Q1" value="We have a strong sense of camaraderie and connection."/><p>We have a strong sense of camaraderie and connection.</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb2Q1" value="We have a cordial but distant relationship."/><p>We have a cordial but distant relationship.</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb3Q1" value="We have a strained or conflict-ridden relationship."/><p>We have a strained or conflict-ridden relationship.</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb4Q1" value="I do not know my colleagues well enough to form an opinion."/><p>I do not know my colleagues well enough to form an opinion.</p></div>
                        </div>
                    </li>
                    <li className="form__question">
                        Which of the following team-building relationship activities have you participated in before? (Select all that apply)
                        <div className="form__options">
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb1Q2" value="Mentorship program"/><p>Mentorship program</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb2Q2" value="Job-shadowing"/><p>Job-shadowing</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb3Q2" value="Cross-training"/><p>Cross-training</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb4Q2" value="Lunch and learning sessions"/><p>Lunch and learn sessions</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb5Q2" value="Book club"/><p>Book club</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb6Q2" value="Other: (specify)"/><p>Other: (specify)</p><input className="form__input" type="text" name="otherInputQ2" placeholder="Enter response"/></div>
                        </div>
                    </li>
                    <li className="form__question">
                        Which of the following themes would you like the work event to focus on? (Select all that apply)
                        <div className="form__options">
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb1Q3" value="Creativity and innovation"/><p>Creativity and innovation</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb2Q3" value="Communication and collaboration"/><p>Communication and collaboration</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb3Q3" value="Leadership and management"/><p>Leadership and management</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb4Q3" value="Diversity, equity, and inclusion"/><p>Diversity, equity, and inclusion</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb5Q3" value="Wellness and self-care"/><p>Wellness and self-care</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb6Q3" value="Other: (specify)"/><p>Other: (specify)</p><input className="form__input" type="text" name="otherInputQ3" placeholder="Enter response"/></div>
                        </div>
                    </li>
                    <li className="form__question">
                        What type of work event would you like to participate in next?
                        <div className="form__options">
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb1Q4" value="Team-building activity"/><p>Team-building activity</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb2Q4" value="Networking event"/><p>Networking event</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb3Q4" value="Volunteer opportunity"/><p>Volunteer opportunity</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb4Q4" value="Professional development workshop"/><p>Professional development workshop</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb5Q4" value="Other: (please specify)"/><p>Other: (please specify)</p><input className="form__input" type="text" name="otherInputQ4" placeholder="Enter response"/></div>
                        </div>
                    </li>
                    <li className="form__question">
                        What is your preferred time of day to participate in team-building relationship activities?                        <div className="form__options">
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb1Q5" value="Morning"/><p>Morning</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb2Q5" value="Afternoon"/><p>Afternoon</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb3Q5" value="Evening"/><p>Evening</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb4Q5" value="No preference"/><p>No preference</p></div>
                        </div>
                    </li>
                    <li className="form__question">
                        How long would you prefer team-building relationship activities to be?
                        <div className="form__options">
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb1Q6" value="Less than one hour"/><p>Less than one hour</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb2Q6" value="One to two hours"/><p>One to Half daytwo hours</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb3Q6" value="Half day"/><p>Half day</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb4Q6" value="Full day"/><p>Full day</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb5Q6" value="Multiple Days"/><p>Multiple Days</p></div>
                        </div>
                    </li>
                    <li className="form__question">
                        How important is it to you that team-building relationship activities are inclusive and accessible to all team members?
                        <div className="form__options">
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb1Q7" value="Very important"/><p>Very important</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb2Q7" value="Somewhat important"/><p>Somewhat important</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb3Q7" value="Indifferent"/><p>Indifferent</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb4Q7" value="Somewhat unimportant"/><p>Somewhat unimportant</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb5Q7" value="Not important at all"/><p>Not important at all</p></div>
                        </div>
                    </li>
                    <li className="form__question">
                        What is your preferred method for providing feedback on team-building relationship activities after they take place?
                        <div className="form__options">
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb1Q8" value="Less than one hour"/><p>In-person discussion with manager or HR representative</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb2Q8" value="Online survey"/><p>Online survey</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb3Q8" value="Anonymous feedback box"/><p>Anonymous feedback box</p></div>
                            <div className="form__option"><input className="form__checkbox" type="checkbox" name="cb4Q8" value="Other: (please specify)"/><p>Other: (please specify)</p><input className="form__input" type="text" name="otherInputQ4" placeholder="Enter response"/></div>
                        </div>
                    </li>
                    <li className="form__question">
                        Do you have any suggestions or further comments?
                        <div className="form__options">
                            <textarea className="form__textarea" name="textarea" placeholder="Write here..."></textarea>
                        </div>
                    </li>
                </ol>
                <div className="form__buttonContainer">
                    <button className="form__button" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default EmployeeForm;