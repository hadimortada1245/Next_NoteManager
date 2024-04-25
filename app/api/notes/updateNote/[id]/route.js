
import  connectDB  from '@/config/connection';
import Note from '@/models/noteModel';
import { NextResponse } from 'next/server';
export async function PUT(request,{params}) {
    try {
        const {id} =params;
        const {title,content}=await request.json();
      await connectDB();
     await Note.findByIdAndUpdate({ _id: id },{ title, content});
        const note= await Note.findById(id);
      return NextResponse.json({ message: "A note updated successfully!",note }, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Headers': 'Content-Type' } });
    } catch (error) {
      console.error('Error while updating notes:', error);
      return NextResponse.error('Internal Server Error', 500);
    }
  }
