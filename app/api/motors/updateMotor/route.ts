import connectDB from "@/utils/db/mongodb"
import { middleware } from "@/utils/db/middleware"
import Motor from "@/model/motor"

export async function POST(
    req: Request,
) {
    const authResponse = middleware(req)
    if (authResponse.status !== 200) {
        return authResponse
    }

    const { _id } = await req.json()

    try {
        await connectDB()
        const motor = await Motor.findByIdAndUpdate({_id:_id}, { 
            status: "out of stock",
        }, { new: true })

        if (!motor) {
            return new Response(
                JSON.stringify({
                    error: "Motor not found",
                }),
                { status: 404 }
            );
        }


        return new Response(
            JSON.stringify(motor),
            { status: 200 }
        );

    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 })
    }
}
