import { useEffect, useState } from "react";

function Modal({ isError }) {
    const [isVisible, setIsVisible] = useState(isError===null ? false : true);
    console.log(isVisible);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsVisible(false);
        },5000)
        return ()=>{
            clearInterval(timer);
        }
    },[isVisible])
	return (
		<>
            {isVisible && <div
			className="error-modal"
			style={{
				opacity: isError ? "1" : "0",
			}}>
			<div>Request failed (ERROR {isError}) </div>
		</div>}
        </>
	);
}
export default Modal;
