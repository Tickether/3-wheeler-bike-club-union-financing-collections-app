"use server"

export async function updateMotorAction(
    _id: string,
) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/motors/updateMotor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            },
            body: JSON.stringify({ 
                _id: _id,
            })
        })
        if (!response.ok) {
            throw new Error("Failed to update motor")
        }
        return response.json()
    } catch (error) { 
        console.log(error)
    }
}
