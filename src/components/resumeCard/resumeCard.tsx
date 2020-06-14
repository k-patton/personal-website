import React, { useState } from "react"
import "./resumeCard.scss"

interface ResumeCardProps {
  company: string
  city: string
  title: string
  dates: string
  bulletPoints: string[]
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  company,
  city,
  title,
  dates,
  bulletPoints,
}: ResumeCardProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div
      className="resume-card"
      onClick={() => {
        setOpen(!open)
      }}
    >
      <div className="d-flex justify-content-between">
        <div className="title"> {company} </div>
        <div className="d-none d-md-block  title"> {city} </div>
      </div>
      <div className="d-flex justify-content-between">
        <i> {title} </i>
        <div className="d-none d-md-block "> {dates} </div>
      </div>
      <div
        className="d-flex justify-content-center"
        onClick={() => {
          setOpen(true)
        }}
      >
        {!open && <p className="details"> Show details + </p>}
      </div>
      <div className="d-flex justify-content-start">
        {open && (
          <ul>
            {bulletPoints.map(point => {
              return <li> {point} </li>
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
