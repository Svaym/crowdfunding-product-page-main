export default function Button({ children, backgroundColor }) {
  return (
    <>
      <button className={`text-white px-6 rounded-full pb-4 pt-3 transition-colors duration-200 ease-linear ${backgroundColor} hover:bg-teal-700`}>{ children }</button>
    </>
  )
}
