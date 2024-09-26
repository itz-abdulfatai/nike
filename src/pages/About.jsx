import { abdul } from "../assets/images"
import { socialMediaAlt } from "../constants"

function About() {
  return (
   <main id="home" className=" min-h-screen padding max-container font-montserrat  text-slate-gray">
    <h1 className="text-[60px] uppercase  font-palanquin font-extrabold absolute pt-1 sm:hidden"> ABOUT ME</h1>
    <div className=" flex flex-col md:flex-row items-stretch md:h-[70vh]">

    <div className="  flex-1 box-border">
        <div className="w-[90%] mx-auto md:aspect-auto lg:aspect-square aspect-square border-2 overflow-hidden rounded-full">

        <img src={abdul}  className=" cover scale-150 translate-y-20 wide:translate-y-28" alt="my face" />
        </div>
    </div>
    <div className="  flex-1 p-4 flex flex-col justify-start items-start md:justify-end md:items-end">
    <h1 className="text-[60px] uppercase  font-palanquin font-extrabold pt-1 max-sm:hidden sm:-translate-x-36 md:-translate-x-60 lg:-translate-x-72 xl:-translate-x-96 wide:-translate-x-[450px] -z-10"> ABOUT ME</h1>

    <p className=" break-words text-sm  ">
    <span className=" text-coral-red text-4xl ">   Hi </span>I am Abdulfatai aliyu a frontend developer.  I can develop, maintain and deploy web Applications. I have extensive experience of more than 2 years and a firm grip over leading client-side languages and frameworks and libraries like <span className=" text-coral-red ">Next.js</span>, HTML, CSS, <span className=" text-coral-red ">javascript</span>, <span className=" text-coral-red ">typescript</span>, bootstrap, <span className=" text-coral-red ">TailwindCSS</span>, <span className=" text-coral-red ">React.js</span>, etc..
        <br/>
        <br/>
         I am currently open and willing to work. Contact me for frontend dev of your e-commerce sites, blog sites, sales funnels, Landing pages, Business sites etc.. Kindly contact me <span className=" text-coral-red">below </span>
    </p>
    </div>

    </div>
    <div className=" flex w-full p-5  justify-center items-center gap-4" >
        {
            socialMediaAlt.map((icon, index) => (
                <a href={icon.href} key={index} className=" p-2 rounded-full bg-slate-gray hover:bg-[#7d7d7d] md:hover:scale-105" target="blank">
                    <img src={icon.src} alt={icon.alt} className=" w-7 object-cover"/>
                </a>

            ))
        }
    </div>

   </main>
  )
}

export default About