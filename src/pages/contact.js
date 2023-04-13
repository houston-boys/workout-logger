
export default function ContactPage() {

    return (
        
        <div className="flex justify-center items-center bg-white bg-opacity-70 h-3/4">
                <div id='phone' className='mr-20'>
                    <h2 className="flex justify-center text-2xl">By Phone</h2>
                    <small className="flex justify-center">(Monday to Friday, 9am to 6pm PST)</small>
                    <div>
                        <div className="flex justify-center">North America Toll-Free:</div>
                        <div className="flex justify-center">1-877-930-7483</div>
                        <div className="flex justify-center">International:</div>
                        <div className="flex justify-center">1-604-637-0780</div>
                    </div>
                </div>
                <div id='email'>
                    <h2 className="flex justify-center mt-4 text-2xl">Email Us</h2>
                    <p className="flex justify-center mt-2 text-slate-700">Luisndrn@gmail.com</p>
                </div>
                <div id='github' className='ml-20'>
                    <h2 className="flex justify-center text-2xl mt-4">Find Us On Github</h2>
                    <p className="flex justify-center mt-2 text-slate-700">@WorkoutLogger</p>
                </div>
        </div>
    )
}
