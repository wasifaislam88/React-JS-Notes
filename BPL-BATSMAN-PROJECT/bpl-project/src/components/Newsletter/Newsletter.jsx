
function Newsletter() {
    return (
 
     <div className="relative">
         <form className='container mx-auto flex flex-col items-center space-y-5 rounded-3xl lg:px-60 lg:py-20 
         relative z-50 top-40 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 '>
             <div>
                 <h6 className="text-xl md:text-3xl  md:text-center font-semibold text-center">Subscribe to our Newsletter</h6>
             </div>
 
             <fieldset className="form-control items-center">
                 <label className="label pb-5">
                     <span className="font-medium md:3text-xl text-black pt-2 md:pt-4 pb-4  text-center mx-5">Get the latest updates and news right in  bryour inbox!</span>
                 </label>
 
                 <div className="flex  gap-4">
                     <input type="text" placeholder="Enter your email" className="input lg:w-96 md:w-50 input-bordered join-item"/>
                     <button className="btn font-bold text-black join-item border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Subscribe</button>
                 </div>
             </fieldset>
         </form>
     </div>
    );
 }
 
 
 export default Newsletter;