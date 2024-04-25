
import  connectDB  from '@/config/connection';
import Note from '@/models/noteModel';
import { NextResponse } from 'next/server';
export async function GET() {
    try {
      await connectDB();
     const allNotes= await Note.find({});
      return NextResponse.json({ message: "Notes selected successfully!",allNotes },
      { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET', 'Access-Control-Allow-Headers': 'Content-Type' } });
    } catch (error) {
      console.error('Error selecting notes:', error);
      return NextResponse.error('Internal Server Error', 500);
    }
  }


