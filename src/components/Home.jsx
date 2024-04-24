import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../styles/home.css";
import img from "../assets/img.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg"; 
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.png";


function Home() {
return (
    <section>
        <div className="home" id="home">
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                interval={1500}
            >
                <div>
                    <img src={img} alt="img"/>
                </div>
                <div>
                    <img
                        src={img3}
                        alt="img"
                    />
                    {/* <p className="legend">Secure Your Data</p> */}
                </div>
                <div>
                    <img src={img2} alt="img" />
                </div>
                <div>
                    <img src={img4} alt="img" />
                </div>
            </Carousel>
        </div>

        {/* -------------------------------------------------------------------------------------------------------------------- */}

        <section className="bg-white dark:bg-orange-700" id="company">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Quiz app 
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      QuizHub revolutionizes the educational landscape by offering a seamless, all-in-one platform for students, teachers, and administrators. Empowering teachers to craft engaging quizzes tailored to their curriculum and track student progress in real-time, QuizHub fosters a dynamic learning environment. Meanwhile, administrators gain invaluable insights through comprehensive analytics, enabling informed decisions to optimize educational outcomes. With QuizHub, learning transcends boundaries, offering users an immersive, interactive experience that redefines education. Join us today and embark on a journey where knowledge meets innovation, shaping the future of learning for generations to come.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        Get started
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Speak to us
      </a>
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img
    //   className="motion-safe:animate-spin h-5 w-5 mr-3 ..." viewBox="100 100 100 100"
        id="last"
        src={img5}
        alt="mockup" 
      />
    </div>
  </div>
</section>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}

<section className="bg-white dark:white" id="features">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-black-500 sm:text-lg dark:text-black-700">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Embrace the future of meetings and worker's opinions !
      </h2>
      <p className="mb-4">
      QuizHub serves as an invaluable resource for students, offering a dynamic platform where learning becomes engaging and interactive. Through QuizHub, students gain access to a diverse range of quizzes crafted by dedicated educators, covering various subjects and topics. With quizzes tailored to their curriculum, students can reinforce their understanding of key concepts, test their knowledge, and identify areas for improvement. Real-time feedback and progress tracking empower students to monitor their performance and track their growth over time. By providing a stimulating learning environment, QuizHub equips students with the tools they need to succeed academically and develop a lifelong love for learning.
      </p>
      <p>
      By embracing this collaborative approach, you unlock the collective genius of your team, ensuring every voice shapes strategic decisions.  This, HR, is the breeding ground for industry giants!
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
      <img
        className="w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        alt="office content 1"
      />
      <img
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
        alt="office content 2"
      />
    </div>
  </div>
</section>

{/* ------------------------------------------------------------------------------------------------------------------------------------ */}

<section className="bg-white dark:bg-orange-00" id="price">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Designed for business teams like yours
      </h2>
      <p className="mb-5 font-dark text-black-500 sm:text-xl dark:text-black-400">
        Here, we focus on transparent opinions where technology, people, and data converge.  We offer a collective platform for teachers, students and administrators to interact through quiz and track real time progress.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Student</h3>
              <div className="flex justify-center items-baseline my-8">
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Login as Student
              </a>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Teacher</h3>
              
              <div className="flex justify-center items-baseline my-8">
                
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  
                  
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Login in Teacher
              </a>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Admin</h3>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
              
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Login as Admin
              </a>
            </div>
          </div>
        </div>
      </section>
</section>
);
}

export default Home;
























