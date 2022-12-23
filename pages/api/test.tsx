import { NextResponse } from 'next/server';

export const config = { runtime: 'edge' };

export default function handler() {
  const response = new NextResponse('Hello World');
  return response;
}
