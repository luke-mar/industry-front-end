import "./EmployeeForm.scss";

function EmployeeForm() {

    const submitHandler = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <form className="form" onSubmit={submitHandler}>
                <h1 className="form__h1">
                    Team Event Review
                </h1>
                <ol>
                    <li className="form__question">
                        Did you attend the last workplace event?
                        <div className="form__options">
                            <div className="form__option"><input type="checkbox" name="cb1Q1" value="Yes"/><p>Yes</p></div>
                            <div className="form__option"><input type="checkbox" name="cb2Q1" value="No"/><div>No</div></div>
                        </div>
                    </li>
                    <li className="form__question">
                        On a scale of 1-5, how enjyable was the last event?
                        <div className="form__options">
                            <div className="form__option"><input type="checkbox" name="cb1Q2" value="Not at all enjoyable"/><p>Not at all enjoyable</p></div>
                            <div className="form__option"><input type="checkbox" name="cb2Q2" value="Slightly enjoyable"/><p>Slightly enjoyable</p></div>
                            <div className="form__option"><input type="checkbox" name="cb3Q2" value="Moderately enjoyable"/><p>Moderately enjoyable</p></div>
                            <div className="form__option"><input type="checkbox" name="cb4Q2" value="Very enjoyable"/><p>Very enjoyable</p></div>
                            <div className="form__option"><input type="checkbox" name="cb5Q2" value="Extremely enjoyable"/><p>Extremely enjoyable</p></div>
                        </div>
                    </li>
                    <li className="form__question">
                        On a scale of 1-5, how useful was the last event in promoting team building?
                        <div className="form__options">
                            <div className="form__option"><input type="checkbox" name="cb1Q3" value="Not at all useful"/><p>Not at all useful</p></div>
                            <div className="form__option"><input type="checkbox" name="cb2Q3" value="Slightly useful"/><p>Slightly useful</p></div>
                            <div className="form__option"><input type="checkbox" name="cb3Q3" value="Moderately useful"/><p>Moderately useful</p></div>
                            <div className="form__option"><input type="checkbox" name="cb4Q3" value="Very useful"/><p>Very useful</p></div>
                            <div className="form__option"><input type="checkbox" name="cb5Q3" value="Extremely useful"/><p>Extremely useful</p></div>
                        </div>
                    </li>
                    <li className="form__question">
                        Which of the following activities did you enjoy the most at the last event? (Select all that apply)
                        <div className="form__options">
                            <div className="form__option"><input type="checkbox" name="cb1Q4" value="Games"/><p>Games</p></div>
                            <div className="form__option"><input type="checkbox" name="cb2Q4" value="Sports"/><p>Sports</p></div>
                            <div className="form__option"><input type="checkbox" name="cb3Q4" value="Food and drinks"/><p>Food and drinks</p></div>
                            <div className="form__option"><input type="checkbox" name="cb4Q4" value="Networking opportunities"/><p>Networking opportunities</p></div>
                            <div className="form__option"><input type="checkbox" name="cb5Q4" value="Other: (please specify)"/><p>Other: (please specify)</p><input type="text" name="otherInputQ4" placeholder="Enter activity"/></div>
                        </div>
                    </li>
                    <li className="form__question">
                        Which of the following activities did you enjoy the least at the last event? (Select all that apply)
                        <div className="form__options">
                            <div className="form__option"><input type="checkbox" name="cb1Q5" value="Not at all likely"/><p>Not at all likely</p></div>
                            <div className="form__option"><input type="checkbox" name="cb2Q5" value="Slightly likely"/><p>Slightly likely</p></div>
                            <div className="form__option"><input type="checkbox" name="cb3Q5" value="Moderately likely"/><p>Moderately likely</p></div>
                            <div className="form__option"><input type="checkbox" name="cb4Q5" value="Very likely"/><p>Very likely</p></div>
                            <div className="form__option"><input type="checkbox" name="cb5Q5" value="Other: (please specify)"/><p>Other: (please specify)</p> <input type="text" name="otherInputQ5" placeholder="Enter activity"/></div>
                        </div>
                    </li>
                    <li className="form__question">
                        On a scale of 1-5, how likely are you to attend future workplace events?
                        <div className="form__options">
                            <div className="form__option"><input type="checkbox" name="cb1Q6" value="Not at all likely"/><p>Not at all likely</p></div>
                            <div className="form__option"><input type="checkbox" name="cb2Q6" value="Slightly likely"/><p>Slightly likely</p></div>
                            <div className="form__option"><input type="checkbox" name="cb3Q6" value="Moderately likely"/><p>Moderately likely</p></div>
                            <div className="form__option"><input type="checkbox" name="cb4Q6" value="Very likely"/><p>Very likely</p></div>
                            <div className="form__option"><input type="checkbox" name="cb5Q6" value="Extremely likely"/><p>Extremely likely</p></div>
                        </div>
                    </li>
                    <li className="form__question">
                        Do you have any suggestions for improving future workplace events?
                        <div className="form__options">
                            <textarea name="textarea" placeholder="Write here..."></textarea>
                        </div>
                    </li>
                </ol>
                <button className="form__button" type="submit">Submit Response</button>
            </form>
        </>
    )
}

export default EmployeeForm;