import close from '../../assets/icon-close-modal.svg'
import check from '../../assets/icon-check.svg'
import Button from '../Button/Button'

export default function ModalCompleted({isCompletedOpen, isCompletedClose}) {
  return (
    <>
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-75 z-10"
      ></div>
      <div className='bg-white rounded-md w-2/3 p-5 absolute z-20 top-1/2 -translate-y-1/2 animate-blurred-fade-in lg:w-4/5 md:w-5/6 xs:w-[90%]'>
        <button>
          <img src={close} onClick={isCompletedClose} alt="close" />
        </button>
        <img src={check} className='mx-auto' alt="check" />
        <h2 className='font-bold text-xl mt-1 text-center'>Thanks for your support!</h2>
        <p className='font-light text-neutral-500 my-2 text-center lg:xl:text-[15px]'>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
        an email once our campaign is completed.
        </p>
        <Button display={"block mx-auto"} onClick={isCompletedClose} backgroundColor={"bg-moderateCyan"}>Got it!</Button>
      </div>
    </>
  )
}

