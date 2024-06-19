import { useEffect, useRef, useState } from "react";
import "./cursorAnimado.css"; // 

const AnimatedCursor = () => {
    const cursorRef = useRef(null);
    const [isMoving, setIsMoving] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cursor = cursorRef.current;
            if (cursor) {
                cursor.style.top = e.pageY + "px";
                cursor.style.left = e.pageX + "px";
            }
            setIsMoving(true);

            
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            
            timeoutRef.current = setTimeout(() => {
                setIsMoving(false);
            }, 500);
        };

        document.addEventListener("mousemove", handleMouseMove);

        
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return <div ref={cursorRef} className={`cursor ${isMoving ? 'active' : ''}`}></div>;
};

export default AnimatedCursor;