import connectDB from '@/config/connection';
import Note from '@/models/noteModel';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    console.log(id);
    await connectDB();
    const note = await Note.findById(id);
    return NextResponse.json(
      { message: "A note selected successfully!", note },
      { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET', 'Access-Control-Allow-Headers': 'Content-Type' } }
    );
  } catch (error) {
    console.error('Error while selecting a note:', error);
    return NextResponse.error('Internal Server Error', 500);
  }
}

// import  connectDB  from '@/config/connection';
// import Note from '@/models/noteModel';
// import { NextResponse } from 'next/server';
// export async function GET(request,{params}) {
//     try {
//         const {id} =params;
//         console.log(id)
//       await connectDB();
//         const note= await Note.findById(id);
//       return NextResponse.json({ message: "A note selected successfully!",note });
//     } catch (error) {
//       console.error('Error while selecting a note:', error);
//       return NextResponse.error('Internal Server Error', 500);
//     }
//   }
