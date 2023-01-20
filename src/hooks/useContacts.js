import { useState, useEffect } from "react";
import axios from "axios";

const useContacts = (urlData) => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [actionText, setActionText] = useState(null);
   

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getContacts = async (url) => {
            setLoading(true);
            setError(false);

            try {
                const response = await axios.get(url, {
                    signal: controller.signal,
                    params: { _limit: 5 },
                });

                if (isMounted) {
                    setContacts(response.data);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error.message);
                }
            } finally {
                setTimeout(() => setLoading(false), 800);
            }
        };

        getContacts(urlData);

        const cleanUp = () => {
            controller.abort();
            isMounted = false;
        };

        return cleanUp;

    }, [urlData]);

    const addContact = async (name, username, phone) => {
        setLoading(true);
        setActionText(null);

        try {
            const response = await axios.post(urlData, { name, username, phone });
            setContacts((prev) => [...prev, response.data]);
            setActionText("saved")
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteContact = async (id) => {
        setLoading(true);
        setActionText(null);

        try {
            await axios.delete(urlData + id);
            setContacts((prev) => prev.filter((contact) => contact.id !== id));
            setActionText("deleted");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { contacts, error, loading, addContact, deleteContact, actionText };
};

export default useContacts;
