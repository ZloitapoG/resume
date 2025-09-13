import './ContentStyles.css';
export function ContentList (props){
    return (
        <div className='head-container'>
        <p className='head'>
            <div>{props.list.sername} {props.list.name}</div>
            <div>{props.list.patronymic}</div>
        </p>
        <div className='photo'>
             <img src={props.list.photo} alt="Фото" />
        </div>
        <div>
            Желаемая должность: <span className='vacancy'>{props.list.vacancy}</span>
        </div>
        <div>
            Город: <span className='vacancy'>{props.list.locality}</span>
        </div>
         <div>
            Дата рождения: <span className='vacancy'>{props.list.birthday}</span>
        </div>
        </div>
      
    )
}
export function ContactList (props){
    return (
        <div>
        <div>
             <img className='icon' src={props.list.image} alt={props.list.title} />
             <span className='vacancy'>{props.list.value}</span>
        </div>
        </div>
    )
}
export default ContentList;