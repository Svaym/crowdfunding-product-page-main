export default function Button({ children, backgroundColor, onClick, display }) {
  return (
    <>
      <button onClick={onClick} className={`text-white px-6 rounded-full pb-4 pt-3 transition-colors duration-200 ease-linear ${display} ${backgroundColor} hover:bg-teal-700`}>{ children }</button>
    </>
  )
}
