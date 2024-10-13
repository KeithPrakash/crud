import { NextRequest, NextResponse } from "next/server";
import connectMongoDb from "../../../../libs/mongodb"
import Topic from "../../../../models/topic";



export async function POST(request : NextRequest) {

    const {title,desc} = await request.json()
    await connectMongoDb();
    await Topic.create({title,desc});
    return NextResponse.json({message:"Topic created successfully"},{status:201});
}


export async function GET() {
    
    return NextResponse.json({ message: "Hello from Next.js API" });

}