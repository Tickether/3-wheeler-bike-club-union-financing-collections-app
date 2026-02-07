import Motor from "@/model/motor";
import connectDB from "@/utils/db/mongodb";
import { middleware } from "@/utils/db/middleware";


export async function POST(
    req: Request,
) {
    const authResponse = middleware(req);
    if (authResponse.status !== 200) {
        return authResponse;
    }

    try {
        await connectDB();
        const motor = await Motor.find({});


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
        return new Response(
            JSON.stringify({
                error: "Failed to fetch motor",
                details: error
            }),
            { status: 500 }
        );

    }
}