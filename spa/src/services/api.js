const api_url = 'https://jsonplaceholder.typicode.com/users'

export const userData = async () => {
    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Hubo un problema con la solicitud:", error);
        throw error;
    }
};