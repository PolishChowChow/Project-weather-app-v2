import { useState } from "react";

function Form({ onSubmit }) {
	const [inputVal, setInputVal] = useState("");
	const handleSubmit = async(e) => {
		e.preventDefault();
        if(inputVal === null || inputVal === ""){
            return;
        }
		await onSubmit(inputVal);
        setInputVal("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputVal}
				onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type city"
			/>
			<button type="submit" className="border">Check</button>
		</form>
	);
}
export default Form;
