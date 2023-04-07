import { useEffect, useState } from 'react';

const defaultImage: string = "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png";

export default function useImageCheck(url: string) {
    const [urlChecked, setUrl] = useState<string | null>(null);

    useEffect(() => {
        const getImg = (url: string): Promise<string> => {
            return new Promise((res, rej) => {
                const img = new Image();
                img.src = url;

                img.onload = () => {
                    setTimeout(() => {
                        res(url);
                    }, 700)
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
