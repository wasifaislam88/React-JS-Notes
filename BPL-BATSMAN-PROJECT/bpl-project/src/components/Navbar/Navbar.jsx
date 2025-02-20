import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'
import PropTypes from 'prop-types';

const Navbar = ({coins}) => {
    return (
        <div className='container mx-auto w-full flex justify-between mt-12 mb-6 sticky top-0 bg-white z-10 shadow-md">
            <div >
                <img src={logo} alt="Logo" />'>
            <div>
                <img src={logo} alt="" />
            </div>

            <div className='list-none flex items-center gap-12'>
                <div className='flex gap-12 text-[#5a5a5a]'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                </div>

                <div className='flex gap-2 items-center border rounded-xl px-5 py-4 font-semibold text-black'>
                    <h2> {coins.toLocaleString()} Coin</h2> 
                    <img src={coin} alt="dollar-coin" /> </div>
                </div>
        </div>
    );
};

Navbar.propTypes = {
    coins: PropTypes.number.isRequired
}

export default Navbar;