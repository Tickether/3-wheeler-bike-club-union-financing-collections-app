"use server"

export async function getMotorsAction() {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/motors/getMotors`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            }
        })
        if (!response.ok) {
            throw new Error("Failed to get motors")
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}
