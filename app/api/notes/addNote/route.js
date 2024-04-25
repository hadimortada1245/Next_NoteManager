
import  connectDB  from '@/config/connection';
import Note from '@/models/noteModel';
import { NextResponse } from 'next/server';
export async function POST(request) {
    try {
      const { title, content } = await request.json();
      if(!title || !content)throw Error("All fields must be filled")
      await connectDB();
     const newNote= await Note.create({ title, content });
     const [note]= await Note.find({_id:newNote._id})
      return NextResponse.json({ message: "A new note has been added successfully!",note}, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    } catch (error) {
      console.error('Error adding note:', error);
      return NextResponse.error('Internal Server Error', 500,error.me);
    }
  }