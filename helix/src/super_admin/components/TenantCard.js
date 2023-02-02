import './stylesheets/tenantCard.scss';
import RightArrow from '../../components/assets/icons/caret-right-light.png';
import { useNavigate } from 'react-router-dom';
const TenantCard = (props) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate('/tenants/'+props.tenant.tenanT_KEY)} className='tenantContainer'>
            <div className='nameBox'>
                <p className='nameBoxLetter'>{props.tenant.tenanT_NM[0]}</p>
            </div>
            <p>{props.tenant.tenanT_NM}</p>
            <div className='roundedIcon'>
                <img src={RightArrow} />
            </div>
        </div>
    )
}

export default TenantCard;