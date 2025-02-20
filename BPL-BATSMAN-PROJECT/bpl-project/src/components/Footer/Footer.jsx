import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className="bg-black relative ">

            <div className='container mx-auto pt-60 pb-[72px]'>
                <div className='flex justify-center mb-16'>
                    <img src={footerLogo} alt="" />
                </div>

        <div className='flex flex-col gap-5 lg:flex-row justify-between'>
        <div className='space-y-4 '>
            <h6 className="font-semibold text-lg text-white mx-6">About Us</h6>
                <p className='text-[#9b9da3] mx-6 font-semibold'>We are a passionate team<br></br> dedicated to providing the best<br></br> services to our customers.</p>
                </div>

    <div className='space-y-4 mx-6'>
        <h6 className="font-semibold text-lg text-white">Quick Links</h6>
        <li className='text-[#9b9da3]'><a className="link link-hover">Home</a></li>
        <li className='text-[#9b9da3]'><a className="link link-hover">Services</a></li>
        <li className='text-[#9b9da3]'><a className="link link-hover">About</a></li>
         <li className='text-[#9b9da3]'><a className="link link-hover">Contact</a></li>
        </div>

        <div>
        <form className='space-y-4'>
         <h6 className="font-semibold text-lg text-white mx-5">Subscribe</h6>
         <fieldset className="form-control lg:w-80">
        <label className="label pb-5">
     <span className="label-text text-[#9b9da3] font-semibold mx-5">Subscribe to our newsletter for <br /> the latest updates.</span>
                           
     </label>
        <div className="join">
            <input type="text" placeholder="Enter your email" className="input input-bordered join-item mx-2"/>
        <button className="btn font-bold text-black join-item border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Subscribe</button>
                </div>
                </fieldset>
                 </form>
                </div>
                </div>
            </div>

    <div className='text-center font-bold py-8 text-[#9b9da3] border-t border-white/25'>
        <span>@2025 All Rights Reserved by Wasifa</span>
        </div>
        </div>
    );
};

export default Footer;