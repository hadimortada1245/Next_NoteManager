import connectDB from '@/config/connection';
import Note from '@/models/noteModel';
import { NextResponse } from 'next/server';

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Note.findByIdAndDelete(id); 
    return NextResponse.json({ message: "A note deleted successfully!" }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error) {
    console.error('Error deleting a note:', error);
    return NextResponse.error('Internal Server Error', 500);
  }
}
