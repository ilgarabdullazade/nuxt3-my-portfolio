const PAGE_TRANSITION_TIME = 500

const useAfterOutIn = (callback: () => void) => {
  const initDOM = () => {
    setTimeout(() => {
      callback()
    }, PAGE_TRANSITION_TIME * 2)
  }

  return {
    initDOM,
  }
}

export default useAfterOutIn
