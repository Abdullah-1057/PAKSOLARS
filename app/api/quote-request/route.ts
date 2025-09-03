import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, timestamp, source } = await request.json()

    // Here you would integrate with your email service
    // For now, we'll simulate sending an email to abdullah177.hkt@gmail.com
    
    console.log('Quote request received:', {
      email,
      timestamp,
      source,
      contactEmail: 'abdullah177.hkt@gmail.com'
    })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In a real implementation, you would:
    // 1. Send email to abdullah177.hkt@gmail.com with the lead details
    // 2. Optionally send confirmation email to the customer
    // 3. Store the lead in your database

    return NextResponse.json({ 
      success: true, 
      message: 'Quote request submitted successfully' 
    })
  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process quote request' },
      { status: 500 }
    )
  }
}
