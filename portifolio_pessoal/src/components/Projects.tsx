

export const Project = () => {
    return (
        
        <div id="projetos" className="  flex flex-col h-auto p-2">
        <section className="flex justify-center items-center mb-10">
            <h1 className="font-normal p-2 rounded text-6xl font-[Maria]">Projetos</h1>
        </section>
        <section className=" flex flex-col mt-2 justify-center items-center
         z-auto w-10/12 m-auto md:m-auto h-auto
         
         md:flex-row md:flex-wrap md:justify-around">

            
            <div className="mt-5  card w-8/12 md:w-4/12 m-2 md:h-80 glass shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                <figure><img src="https://i.pinimg.com/originals/c5/d6/8e/c5d68e3f92b74f875e9eaa71e7afaf72.gif" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className=" card-title text-black dark:text-black">Life hack</h2>
                    <p className="dark:text-black text-black">How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>

            <div className="mt-5 card w-8/12 m-2 md:w-4/12 md:h-80 glass shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                <figure><img src="https://i.pinimg.com/originals/41/f1/d2/41f1d2563876646fe57f3345be41b194.gif" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className=" card-title text-black dark:text-black">Life hack</h2>
                    <p className="dark:text-black text-black">How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>

            </section>
        </div>
       
        
    )
}