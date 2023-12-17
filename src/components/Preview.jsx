export default function Preview({ name, email, phone, education, work }){
    return(
        <div className='preview'>
            <div className="header">
                <div className="name">{name}</div>
                <div className="subheader">
                    <div className="email">{email}</div>
                    <div className="phone">{phone}</div>
                </div>
            </div>
            {console.log(education)}
            <div className="education-details">
                { education.map((education) =>(
                    <div key={education.institute.name}>
                    <div className="name">{education.institute.name}</div>
                    <div className="start-date">{ education.institute.startDate }</div>
                    <div className="end-date">{ education.institute.endDate }</div>
                    </div>
                ))}
            </div>
            <div className="work-details">
                <div className="name">{work.company.name}</div>
                <div className="start-date">{ work.company.startDate }</div>
                <div className="end-date">{ work.company.endDate }</div>
                <div className="summary">{ work.company.summary }</div>
            </div>
        </div>
    )
}