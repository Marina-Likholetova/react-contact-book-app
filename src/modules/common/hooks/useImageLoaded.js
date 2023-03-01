import { useState, useRef, useEffect } from "react";

const defaultImage = "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png";


export default function useImageLoaded() {
    const [loading, setLoading] = useState(true);
    const ref = useRef();

    const onLoad = () => {
       setLoading(prev => prev ? !prev : prev);
    };

    const onError = (e) => {
        e.target.src = defaultImage;
    };

    useEffect(() => {
        if (ref.current && ref.current.complete) {
            onLoad();
        }
    });

    return [ref, loading, onLoad, onError];
}
