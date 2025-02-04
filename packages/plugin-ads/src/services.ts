import {
    Ad,
    AdResponse
} from "./types";

const API_KEY = "2x34baa74e6c84d9add15ea92171183ce9";
const API_URL = "https://warpads-agentic-hack.onrender.com/get-ad";

export const createAdService = () => {
    const getRelevantAd = async (message: string, aiResponse: string): Promise<AdResponse> => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY
                },
                body: JSON.stringify({
                    userMessage: message
            
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const adData = await response.json();
            console.log(adData);
            return {
                originalMessage: message,
                ad: adData
            };
        } catch (error) {
            console.error('Error fetching ad:', error);
            // Return a default ad response in case of error
            return {
                originalMessage: message,
                ad: {
                    title: "Default Ad",
                    description: "No specific ad available at the moment",
                    link: "https://example.com"
                }
            };
        }
    };

    return { getRelevantAd };
};