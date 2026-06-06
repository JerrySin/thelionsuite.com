'use client'

import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { format } from 'date-fns'

export function BookingWidget({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()

  const handleBookNow = () => {
    // Build the booking URL with parameters
    const baseUrl = 'https://direct-book.com/properties/theliontaverninnltd'
    const params = new URLSearchParams()

    if (checkIn) {
      params.append('checkInDate', format(checkIn, 'yyyy-MM-dd'))
    }
    if (checkOut) {
      params.append('checkOutDate', format(checkOut, 'yyyy-MM-dd'))
    }

    const url = params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (variant === 'compact') {
    return (
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <h3 className="font-serif text-xl text-card-foreground mb-4">Check Availability</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs text-muted-foreground">Check In</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal h-10 text-sm"
                  >
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    {checkIn ? format(checkIn, 'MMM d') : 'Select'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Check Out</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal h-10 text-sm"
                  >
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    {checkOut ? format(checkOut, 'MMM d') : 'Select'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date < (checkIn || new Date())}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button
            onClick={handleBookNow}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Check Availability
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full h-10 border-border text-foreground hover:bg-accent text-sm"
          >
            <a href="tel:250-788-9990">Book via Call: 250-788-9990</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border p-6 lg:p-8">
      <h3 className="font-serif text-2xl text-card-foreground mb-6 text-center">
        Book Your Stay
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Check In */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Check In</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal h-12"
                >
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  {checkIn ? format(checkIn, 'MMM d, yyyy') : 'Select date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check Out */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Check Out</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal h-12"
                >
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  {checkOut ? format(checkOut, 'MMM d, yyyy') : 'Select date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2 space-y-2">
          <Button
            onClick={handleBookNow}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-medium"
          >
            Check Availability
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full h-12 border-border text-foreground hover:bg-accent text-base font-medium"
          >
            <a href="tel:250-788-9990">Book via Call: 250-788-9990</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
