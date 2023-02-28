import { useEffect, useState } from 'react';

const defaultImage = "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png";

export default function useImageCheck(url) {
    const [urlChecked, setUrl] = useState(null);

    useEffect(() => {
        const getImg = (url) => {
            return new Promise((res, rej) => {
                const img = new Image();
                img.src = url;

                img.onload = () => {
                    res(url);
                }

                img.onerror = () => {
                    rej(defaultImage);
                }
            })
        }
        getImg(url)
            .then(res => setUrl(res))
            .catch(er => setUrl(er));
    }, [url])

    return { urlChecked }
}
