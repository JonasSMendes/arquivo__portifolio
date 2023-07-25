import Slide from 'react-awesome-reveal'

export const Sobre = () => {
    return (

        <div
        id='Sobre'
            style={{
                backgroundImage: 'url()',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh', // Altura da tela inteira
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            

            <Slide triggerOnce>
        <div
            id="Sobre"
            className="flex justify-center items-center md:w-full md:m-auto h-screen"
        >
            
            <section className=" flex w-10/12">
                <div className="flex  flex-row items-center card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className="md:h-96 hidden md:block " src="https://i.pinimg.com/736x/b0/a2/71/b0a2713459d31e3f57db19bb5428714e.jpg" alt="Album" /></figure>
                    <div className=" xl:w-10/12 w-9/12 card-body">
                        <h1 className="p-2 bg-[#570df8] text-black dark:text-white dark:bg-[#dc944c] font-[Maria] text-3xl card-title">Quem sou eu?</h1>
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

        </Slide>
        </div>

    )
}