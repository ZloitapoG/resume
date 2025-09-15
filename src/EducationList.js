import './Table.css';
export function EducationList(props) {
    const { education, courses } = props;
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className='row-left'>
                            <div className='row ficha-ed'>
                                Образование
                            </div>
                        </td>
                        <td className='row-right'>
                            {education.map((item) => (
                                <div key={item.key}>
                                    {item.qualification}
                                    <br />
                                    <strong>{item.title} {item.locality} {item["year graduation"]}</strong>
                                    <br />
                                    {item.faculty}
                                    <br />
                                    {item.speciality}
                                </div>
                            ))}
                            <h4>Курсы:</h4>
                            {courses.map((course, index) => (
                                <div key={index}>
                                    <strong>{course.title}</strong>
                                    <br />
                                    {course.topic}, {course["year graduation"]}
                                </div>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}