export const Sobre = () => {
    return (
        <div
            id="Sobre"
            className="bg-[#23120e] flex justify-center items-center md:w-full md:m-auto h-screen"
        >
            <section className="flex w-10/12">
                <div className="flex flex-row items-center card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className="md:h-96 hidden md:block " src="https://i.pinimg.com/1200x/d5/96/a0/d596a0b84cb5081a514755ef867924a1.jpg" alt="Album" /></figure>
                    <div className=" xl:w-10/12 w-9/12 card-body">
                        <h1 className="p-2 bg-[#ef9995] text-black dark:text-white dark:bg-[#dc944c]  card-title">Quem sou eu?</h1>
                        <p> Oi, me chamo Jonas e estou no primeiro semestre de Ciência da Computação.
                            Sou um entusiasta da programação e estou constantemente explorando novas tecnologias
                            e linguagens de programação. Tenho um grande interesse em desenvolver soluções inovadoras
                            e eficientes para os desafios do mundo digital. Estou sempre buscando oportunidades para 
                            aprimorar minhas habilidades e colaborar em projetos empolgantes.
                            estou determinado a me tornar um desenvolvedor de software de sucesso. Estou animado para embarcar
                            nesta jornada emocionante e contribuir para o avanço da tecnologia.
                            venho melhorando e me desafiando cada vez mais nesse universo da tecnologia,
                            aprendendo linguagens como <span className="font-bold">JavaScript</span>, <span className="font-bold">Java</span>
                            , <span className="font-bold">Ruby</span>, <span className="font-bold">PhP</span>. 
                            e bibliotecas como <span className="font-bold">React</span> e <span className="font-bold">Next</span>
                            </p>
                  
                    </div>
                </div>
            </section>
        </div>
    )
}