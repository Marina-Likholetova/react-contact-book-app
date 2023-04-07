import { useState, useRef, useEffect, RefObject, ReactEventHandler} from "react";

const defaultImage: string = "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png";

type Ref = RefObject<HTMLImageElement> | null;


type ImageLoaded = {
    ref: Ref;
    loading: boolean;
    onLoad: () => void;
    onError: ReactEventHandler<HTMLImageElement>
}


export default function useImageLoaded(): ImageLoaded {
    const [loading, setLoading] = useState<boolean>(true);
    const ref = useRef() as Ref;

    const onLoad = (): void => {
       setLoading(prev => prev ? !prev : prev);
    };

    const onError: ReactEventHandler<HTMLImageElement> = (e) => {
        const target = e.target as HTMLImageElement;
        target.src = defaultImage;
    };

    useEffect(() => {
        if (ref && ref.current && ref.current.complete) {
            onLoad();
        }
    });

    return {ref, loading, onLoad, onError};
}
