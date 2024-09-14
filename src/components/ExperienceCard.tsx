type ExperienceCardProps = {
  role: string,
  enterprise: string,
  time: string,
  description: string
}

export default function ExperienceCard({ role, enterprise, time, description }: ExperienceCardProps) {


  return (
    <>
      <div className="card">
        <header>
          <span className="dot"></span>
          <h5 className="role">{role}</h5>
          <h6 className="enterprise">{enterprise}</h6>
          <span className="time">{time}</span>
        </header>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}
