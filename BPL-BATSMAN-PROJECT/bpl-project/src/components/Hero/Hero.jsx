import PropTypes from 'prop-types';
import banner from '../../assets/banner-main.png'
// import bg from '../../../assets/bg-shadow.png'
import ('./Hero.css')

const Hero = ({onClaimFreeCredit}) => {
    return (
        <div className='container mx-auto border-none rounded-3xl text-center py-16 mb-[91px] background bg-cover bg-no-repeat bg-black '>
            <div className='flex justify-center pb-6'>
                <img src={banner} alt="" />
            </div>
            <div className='space-y-5'>
                <h1 className='font-bold text-[40px] text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='font-medium text-2xl text-[#b8b8b8] '>Beyond Boundaries Beyond Limits</p>
                <button onClick={onClaimFreeCredit} className='font-bold text-black bg-[#E7FE29] rounded-xl btn px-5 py-3'>Claim Free Credit</button>
            </div>
        </div>
    );
};

Hero.propTypes ={
    onClaimFreeCredit: PropTypes.func.isRequired
}

export default Hero;