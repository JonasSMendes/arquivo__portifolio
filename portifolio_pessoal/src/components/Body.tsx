import { TypeAnimation } from 'react-type-animation';
import React from 'react';

export const Body = () => {

    return (

        <div
            id='Home'
            style={{
                backgroundImage: 'url(https://i.pinimg.com/originals/61/8f/08/618f083c61a7460ce0a6064319af41bd.gif)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                width: '100%',
                height: '100vh', // Altura da tela inteira
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Conteúdo da home */}

            <div className="md:w-5/12  h-auto md:card md:mt-30 flex
             flex-row lg:card-side bg-base-100 shadow-xl">

                <div className="card-body md:mr-0">
                    <h2 className=' xl:mt-10 text-center text-xl'>ola, meu nome é <span className=' p-1 rounded-lg
                      text-black dark:text-white font-bold'>Jonas Mendes</span></h2>


                    <div className=" xl:mt-20 card-actions justify-end">
                        <section className=" flex-1 flex flex-col w-80">
                            <img className="w-96 h-auto" src="#" alt="" />

                            <div className='flex justify-center items-center mb-5'>
                                <a href='https://github.com/JonasSMendes' target="_blank" className='ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" ionicon h-10  " viewBox="0 0 512 512">
                                        <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56
                            0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4
                            102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3
                            23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6
                            23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015
                            -.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1
                            56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23
                            36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3
                            63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7
                            480 134.9 379.7 32 256 32z"/></svg>
                                </a>

                                <a href='https://www.linkedin.com/in/jonassmendes/' target="_blank" className='ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon h-10" viewBox="0 0 512 512">
                                        <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28
                            480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 
                            373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42
                            34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74
                            0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/></svg>
                                </a>

                                <a href='https://wa.me/5581983920205' target="_blank" className='ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon h-10" viewBox="0 0 512 512"><path
                                        d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 
                            111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0
                            01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 
                            185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54
                            2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56
                            5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73
                            95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fill-rule="evenodd" /></svg>
                                </a>

                            </div>

                            <TypeAnimation
                                sequence={
                                    [
                                        'software developer',
                                        1000,
                                        'computer science student',
                                        1000,
                                        'web development',
                                        1000,
                                    ]
                                }

                                wrapper='span'
                                speed={30}
                                style={{ fontSize: '18px', display: 'inline-block', textAlign: 'center' }}
                                repeat={Infinity}
                            />

                            <div className='mt-8 flex flex-col items-center justify-center'>
                                <img className="animate-bounce  w-8 h-auto" src="/assets/seta-para-baixo.png" alt="" />
                            </div>
                        </section>
                    </div>
                </div>
            </div>


        </div>

    )
}