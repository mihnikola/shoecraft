const Toast = ({ text }) => {
    return (
        <div id="toast-top-left" className="select-none animate-bounce fixed flex items-center w-full max-w-xs p-4 mt-[100px] space-x-4 text-gray-500 bg-white  rounded-lg shadow top-5 right-5 dark:text-gray-400 " role="alert">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#ff4040" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div className="text-sm font-normal">{text}</div>
        </div>
    )
}

export default Toast