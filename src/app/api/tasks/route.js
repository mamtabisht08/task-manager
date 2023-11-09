import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const tasks = await Task.find();
    console.log("Fetched tasks:", tasks);
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json({
      message: 'Failed to get tasks',
      success: false
    });
  }

};





export const POST = async (request) => {
  const { title, content, userId } = await request.json();

  const task = new Task({
    title,
    content,
    userId,
  });

  try {

    await task.save()

    return NextResponse.json({
      message: 'task created successfully',
      status: true
    })

  } catch (error) {

    return NextResponse.json({
      message: 'failed to add task',
      status: false
    })
  }
};
