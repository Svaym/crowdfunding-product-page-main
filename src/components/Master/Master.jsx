import { useState } from "react";
import Button from "../Button/Button"
import { info } from "./data"
import Modal from "../Modal/Modal";

export default function Master() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <section className="">
      <div className="container">
        <div className="bg-white rounded-md w-1/2 left-1/2 -translate-x-1/2 p-5 relative -top-20 lg:w-2/3 md:w-4/5 sm:w-[95%]">
          <svg className="absolute left-1/2 -translate-x-1/2 -top-7" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>
          <h1 className="text-center font-bold text-3xl mt-5 lg:text-2xl md:text-xl">Mastercraft Bamboo Monitor Riser</h1>
          <p className="font-light text-center text-neutral-500 mt-2 sm:text-[15px]">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className="flex items-center justify-between mt-6 sm:flex-col sm:gap-y-2">
            <Button onClick={openModal} backgroundColor='bg-moderateCyan'>Back this project</Button>
            <div className="bg-gray-100 rounded-full flex items-center gap-x-3 pr-5 cursor-pointer transition duration-300 ease-out hover:contrast-50">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
              <h2 className="">Bookmark</h2>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md w-1/2 p-5 -mt-12 mx-auto lg:w-2/3 md:w-4/5 sm:w-[95%]">
          <div className="flex items-center sm:flex-col sm:gap-y-4">
            <div className="relative mr-20 after:absolute after:block after:top-0 after:-right-10 after:w-[2px] after:h-full after:bg-gray-300 md:mr-14 md:after:-right-6 sm:mr-0 sm:-right-0 sm:after:w-0 sm:after:h-0 sm:text-center">
              <h2 className="font-bold text-3xl lg:text-2xl md:text-xl">
                $89,914
              </h2>
              <p className="font-light text-neutral-500">
              of $100,000 backed
              </p>
            </div>
            <hr className="hidden sm:block sm:w-32 sm:bg-gray-300" />
            <div className="relative mr-28 after:absolute after:block after:top-0 after:-right-20 after:w-[2px] after:h-full after:bg-gray-300 md:mr-16 md:after:-right-14 sm:mr-0 sm:-right-0 sm:after:w-0 sm:after:h-0 sm:text-center">
              <h2 className="font-bold text-3xl lg:text-2xl md:text-xl">
              5,007
              </h2>
              <p className="font-light text-neutral-500">
              total backers
              </p>
            </div>
            <hr className="hidden sm:block sm:w-32 sm:bg-gray-300" />
            <div className="sm:text-center">
              <h2 className="font-bold text-3xl lg:text-2xl md:text-xl">
              56
              </h2>
              <p className="font-light text-neutral-500">
              days left
              </p>
            </div>
          </div>
          <div className="w-full h-2 bg-gray-300 rounded-full mt-3">
            <div className="w-3/4 h-2 bg-moderateCyan rounded-full"></div>
          </div>
        </div>
        <div className="bg-white rounded-md w-1/2 p-5 mt-8 mx-auto lg:w-2/3 md:w-4/5 sm:w-[95%]">
          <h3 className="font-bold text-lg">
          About this project
          </h3>
          <p className="font-light text-neutral-500 mt-6">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p className="font-light text-neutral-500 mt-5">
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
          <div className="flex flex-col gap-y-4 mt-7">
            {info.map((item, id) => (
              <>
                <div key={item.id} className={id===2 ? 'rounded-md border-2 border-gray-300 p-3 contrast-0 ' : 'rounded-md border-2 border-gray-300 p-3'}>
                  <div className="flex justify-between items-center sm:flex-col sm:items-start">
                    <h4 className="font-bold">{item.title}</h4>
                    <h4 className="text-moderateCyan font-bold">{item.subtitle}</h4>
                  </div>
                  <p className="font-light text-neutral-500 my-5 xs:text-[15px]">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-y-2">
                    <div className="flex items-center gap-x-1">
                      <h4 className="font-bold text-3xl sm:text-2xl">
                        {item.number}
                      </h4>
                      <span className="font-light text-neutral-500">left</span>
                    </div>
                    <Button onClick={openModal} backgroundColor={'bg-moderateCyan'}>{item.btn}</Button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </section>
    </>
  )
}
