

export const Project = () => {
    return (

        <div id="projetos" className="  flex flex-col h-screen p-2">
            <section className="flex justify-center items-center">
                <h1 className="font-normal p-2 rounded text-6xl font-[Maria]">Projetos</h1>
            </section>
            <section className=" flex flex-col  justify-center items-center
         z-auto w-10/12 m-auto md:m-auto h-auto
         
         md:flex-row md:flex-wrap md:justify-around">

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/assets/Canil_pjt.png" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Canil</h2>
                        <p>Site de Canil, projeto de Site para busca de Animais</p>
                        <div className="card-actions justify-end">
                        <a href="https://web-production-61fe.up.railway.app/" className="btn btn-primary">Visite</a>
                        </div>
                    </div>
                </div>

            </section>
        </div>


    )
}