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
export function Hardskills(props) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className='row-left'>
                            <div className='row ficha-hd'>
                                Профессиональные
                                <br />
                                навыки
                            </div>
                        </td>
                        <td className='row-right'>
                            {props.list.map((item) => (
                                <div key={item.key}>
                                    <img className='icon' src={item.ico}/>
                                    <span>{item.portfolio}</span>
                                    <ul>
                                        {
                                            item.skills.map((dutu, index) => (
                                                <li key={index.key}>{dutu}</li>
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
export function Softskills(props) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className='row-left'>
                            <div className='row ficha-sf'>
                                Личные качества
                            </div>
                        </td>
                        <td className='row-right'>
                            {props.list.map((item) => (
                                <div key={item.key}>
                                    <ul>
                                        {
                                            item.softskills.map((dutu, index) => (
                                                <li key={index.key}>{dutu}</li>
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
export function About(props) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className='row-left'>
                            <div className='row ficha-fm'>
                                Дополнительная
                                <br/>
                                информация
                            </div>
                        </td>
                        <td className='row-right'>
                            {props.list.map((item) => (
                                <div key={item.key}>
                                <strong>Уровень английского: </strong>{item.english}
                                <br/>
                                <strong>Цель по курсу: </strong>{item.target}
                                <br/>
                                <strong>Информация о курсе из: </strong>{item.way}
                                <br/>
                                 <strong>Хобби: </strong>{item.hobbi}
                                 <br/>
                                 <strong>Семейное положение: </strong>{item.family}
                                </div>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}