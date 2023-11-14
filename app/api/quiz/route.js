import connectMongoDB from "@/libs/mongodb"
import Quiz from "@/models/quiz";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description, isComplete, isActive } = await request.json();
    await connectMongoDB();
    await Quiz.create({ title, description, isComplete, isActive });
    return NextResponse.json({ message: "Quiz Created" }, { status: 201 });

}

export async function GET() {
    await connectMongoDB();
    const quizzes = await Quiz.find();
    return NextResponse.json({ quizzes })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Quiz.findByIdAndDelete(id);
    return NextResponse.json({message: "Quiz Deleted."}, {status: 200} );
}