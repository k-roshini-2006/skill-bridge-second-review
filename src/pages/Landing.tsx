import React from 'react'
import { LandingNav } from '@/components/landing/LandingNav'
import { LandingSections } from '@/components/landing/LandingSections'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNav />
      <LandingSections />
    </div>
  )
}
