import './EducationStyles.css';
export function EducationList(props) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className='row-left'>
                            <div className='row ficha'>
                                Образование
                            </div>
                        </td>
                        <td className='row-right'>
                            {props.list.map((item) => (
                                <div key={item.key}> 
                                    {item.qualification}
                                    <br/>
                                    {item.title} {item.locality} {item["year graduation"]} 
                                    <br/>
                                    {item.faculty}
                                    <br/>
                                    {item.speciality}
                                </div>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}