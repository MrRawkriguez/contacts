import Phone from './phone.png'
import Mail from './mail.png'

function Contacts (props) {
    console.log(props)
    return (
        <div className="contacts">
            <article className="contact-card">
                <div className='img-container'>
                    <img
                        className='contact-card-img'
                        src={props.img}
                        alt="Photo of Mr. Whiskerson"
                    />
                </div>
                <div className='info-container'>
                <h3 className='contact-card-name'>{props.name}</h3>
                <div className="info-group">
                    <img
                        className='info-group-icon'
                        src={Phone}
                        alt="phone icon"
                    />
                    <p>{props.phone}</p>
                </div>
                <div className='info-group'>
                    <img
                        className='info-group-icon'
                        src={Mail}
                        alt="mail icon"
                    />
                    <p className='contact-card-email'>{props.email}</p>
                </div>
                </div>

            </article>
        </div>
    )
}

export default Contacts