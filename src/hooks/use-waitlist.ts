import { useState } from 'react';
import { db, collection, addDoc, serverTimestamp } from '../lib/firebase';

interface UseWaitlistReturn {
    submitEmail: (email: string) => Promise<void>;
    isLoading: boolean;
    error: string | null;
    success: boolean;
}

export const useWaitlist = (): UseWaitlistReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const submitEmail = async (email: string) => {
        setIsLoading(true);
        setError(null);

        try {
            await addDoc(collection(db, "waitlist"), {
                email,
                createdAt: serverTimestamp(),
                source: window.location.hostname
            });
            setSuccess(true);
        } catch (err) {
            console.error("Error adding document: ", err);
            setError("Failed to join waitlist. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return { submitEmail, isLoading, error, success };
};
