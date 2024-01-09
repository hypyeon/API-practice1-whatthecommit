export default class WhatTheCommit {
    static async getMessage() {
        try {
            const response = await fetch(`https://whatthecommit.com/index.txt`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.text();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
}