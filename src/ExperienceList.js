import './Table.css';
export function ExperienceList(props) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className='row-left'>
                            <div className='row ficha-ex'>
                                Опыт работы
                            </div>
                        </td>
                        <td className='row-right'>
                            {props.list.map((item) => (
                                <div key={item.key}>
                                    {item["job title"]}
                                    <br />
                                    {item.organization}
                                    {item.locality}
                                    <br />
                                    {item.start} {item.end}
                                    <h4>Функциональные обязанности:</h4>
                                    <ul>
                                        {item.functional.map((duty, index) => (
                                            <li key={index}>{duty}</li>
                                        ))}
                                    </ul>
                                    <h4>Достижения:</h4>
                                    <ul>
                                        {item.achievements.map((index) => (
                                            <li key={index.key}>
                                                {index.title}
                                                <br />
                                                <strong>Тема: </strong>{index.topic}
                                                <br />
                                                {index.year}
                                                <br />
                                                <strong>Технология: </strong>{index.techologies}
                                                <br />
                                                <strong>Номинация/место: </strong>{index.nomination}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}