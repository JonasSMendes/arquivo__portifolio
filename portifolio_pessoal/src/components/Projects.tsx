

export const Project = () => {
    return (

        <div id="projetos" className="pb-10 flex flex-col h-full md:h-screen p-2">
            <section className="flex justify-center items-center">
                <h1 className="pb-10 md:mr-0 md:text-5xl font-semibold p-2 rounded text-3xl font-[Maria]">Projetos</h1>
            </section>
            <section className=" flex flex-col  justify-center items-center
            z-auto w-10/12 m-auto md:m-auto h-auto
            md:flex-row md:flex-wrap md:justify-around">


                <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mb-3">
                    <div className="h-96 w-72">
                        <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition
                             duration-500 " src="/assets/Canil_pjt.png" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent
                            via-transparent to-black group-hover:from-black/70 group-hover:via-black/60
                            group-hover:to-black/70"></div>
                    <div className="absolute h-full inset-0 flex flex-col items-center justify-center px-9 text-center
                            translate-y-[60%] hover:translate-y-0 transition-all">
                        <h1 className="text-3xl font-bold text-white">CanilDev</h1>
                        <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 duration-300">
                            Site CanilDev <br />,projeto de estudos para busca de Animais em um canil virtual
                        </p>
                        <div className="card-actions">
                            <a href="https://web-production-61fe.up.railway.app/" target="_blank" className="btn btn-primary">Visite</a>
                        </div>
                    </div>
                </div>

                <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mb-3">
                    <div className="h-96 w-72">
                        <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition
                             duration-500 " src="https://i.pinimg.com/originals/8d/da/aa/8ddaaa6c732debcbd43351d36de6bb49.gif" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent
                            via-transparent to-black group-hover:from-black/70 group-hover:via-black/60
                            group-hover:to-black/70"></div>
                    <div className="absolute h-full inset-0 flex flex-col items-center justify-center px-9 text-center
                            translate-y-[50%] hover:translate-y-0 transition-all">
                        <h1 className="text-3xl font-bold text-white">Em breve!!</h1>
                        <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 duration-300">
                            Carregando...
                        </p>
                        <div className="card-actions">
                            <a href="https://web-production-61fe.up.railway.app/" target="_blank" className="btn btn-primary">Visite</a>
                        </div>
                    </div>
                </div>

            </section>
        </div>


    )
}