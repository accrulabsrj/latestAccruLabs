"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { Button } from "./Button";
import { Card } from "./Card";

export interface CalendarEvent {
  id: string;
  date: Date;
  time: string;
  title: string;
  instructor?: string;
  topic?: string;
  description?: string;
  registrationUrl?: string;
}

export interface CalendarProps {
  events: CalendarEvent[];
  onRegister?: (eventId: string) => void;
  className?: string;
}

export function Calendar({ events, onRegister, className }: CalendarProps) {
  const { isMobile, isTablet } = useResponsive();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Group events by date
  const eventsByDate = events.reduce((acc, event) => {
    const dateKey = event.date.toISOString().split("T")[0];
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, CalendarEvent[]>);

  // Mobile: List view
  if (isMobile) {
    return (
      <div className={cn("space-y-4", className)}>
        {events.map((event) => (
          <Card key={event.id} hover className="p-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-text-tertiary">
                  {event.date.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="text-primary font-semibold">{event.time}</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">
                  {event.title}
                </h3>
                {event.instructor && (
                  <p className="text-sm text-text-secondary">
                    Instructor: {event.instructor}
                  </p>
                )}
                {event.topic && (
                  <p className="text-sm text-text-secondary">Topic: {event.topic}</p>
                )}
                {event.description && (
                  <p className="text-sm text-text-tertiary mt-2">
                    {event.description}
                  </p>
                )}
              </div>
              {event.registrationUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => onRegister?.(event.id)}
                >
                  Register
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    );
  }

  // Desktop: Grid view
  return (
    <div className={cn("space-y-6", className)}>
      {Object.entries(eventsByDate).map(([dateKey, dateEvents]) => (
        <div key={dateKey}>
          <h3 className="text-lg font-semibold mb-4 text-text-primary">
            {new Date(dateKey).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h3>
          <div
            className={cn(
              "grid gap-4",
              isTablet ? "grid-cols-2" : "grid-cols-3"
            )}
          >
            {dateEvents.map((event) => (
              <Card key={event.id} hover className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-primary font-semibold mb-1">
                      {event.time}
                    </p>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {event.title}
                    </h3>
                    {event.instructor && (
                      <p className="text-sm text-text-secondary">
                        {event.instructor}
                      </p>
                    )}
                    {event.topic && (
                      <p className="text-sm text-text-tertiary mt-1">
                        {event.topic}
                      </p>
                    )}
                  </div>
                  {event.description && (
                    <p className="text-sm text-text-tertiary">
                      {event.description}
                    </p>
                  )}
                  {event.registrationUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      onClick={() => onRegister?.(event.id)}
                    >
                      Register
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

