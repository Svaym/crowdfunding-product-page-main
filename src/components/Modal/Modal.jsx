import { info } from "../Master/data";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import ModalCompleted from "./ModalCompleted";

export default function Modal({ isOpen, onClose }) {
  // Модальное окно при успешной отправки суммы
  const [isCompleted, setIsCompleted] = useState(false)
  const [option, setOption] = useState(null);
  //  Введенное число
  const [sum, setSum] = useState('')
  function openCompletedModal() {
    setIsCompleted(true)
    setSum('')
  }
  function closeCompletedModal() {
    setIsCompleted(false)
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 z-10"
      ></div>
      <div className="flex justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-fade-in">
        <div className="bg-white w-full p-5 h-[30rem] overflow-y-scroll rounded-md">
          <button onClick={onClose}>
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                fill="#000"
                fill-rule="evenodd"
                opacity=".4"
              />
            </svg>
          </button>
          <h3 className="font-bold text-xl mt-1">Back this project</h3>
          <p className="font-light text-neutral-500 mt-2">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="flex flex-col gap-y-4 mt-4">
            {info.map((item, id) => (
              <>
                <div
                  key={id}
                  onClick={() => setOption(id)}
                  className={
                    id === 2
                      ? "rounded-md border-2 border-gray-300 p-4 contrast-0 "
                      : option === id
                      ? "rounded-md border-2 border-moderateCyan p-4 cursor-pointer animate-slide-in-top"
                      : "rounded-md border-2 border-gray-300 p-4 transition duration-300 ease-in-out cursor-pointer hover:brightness-125"
                  }
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                      <h4 className="font-bold text-lg transition-colors duration-300 ease-in-out cursor-pointer hover:text-moderateCyan">
                        {item.title}
                      </h4>
                      <h4 className="text-moderateCyan font-bold text-lg">
                        {item.subtitle}
                      </h4>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <h4 className="font-bold text-lg">{item.number}</h4>
                      <span className="font-light text-neutral-500">left</span>
                    </div>
                  </div>
                  <p className="font-light text-neutral-500 my-5">
                    {item.description}
                  </p>
                  {(option===id && id!==2) &&
                    <div className="flex items-center justify-between animate-zoom-in">
                      <h4 className="font-light text-neutral-500">
                        Enter your pledge
                      </h4>
                      <div className="flex items-center gap-x-1">
                        <input
                          type="number"
                          className="px-4 w-28 rounded-full text-black py-3 outline outline-1 outline-moderateCyan"
                          placeholder="$"
                          value={sum}
                          onChange={(eve) => setSum(eve.target.value)}
                        />
                        <Button onClick={openCompletedModal} backgroundColor={"bg-moderateCyan"}>
                          Continue
                        </Button>
                      </div>
                    </div>
                  }
                </div>
              </>
            ))}
          </div>
        </div>
        {isCompleted && <ModalCompleted isCompletedOpen={openCompletedModal} isCompletedClose={closeCompletedModal} />}
      </div>
    </>
  );
}
