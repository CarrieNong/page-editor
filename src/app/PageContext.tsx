import { createContext, useContext, useReducer } from "react"

const PageContext = createContext(null)
const PageDispatchContext = createContext(null)

export function PageProvider({ children }) {
  const [page, dispatch] = useReducer(pageReducer, initialPage)

  return (
    <PageContext.Provider value={page}>
      <PageDispatchContext.Provider value={dispatch}>
        {children}
      </PageDispatchContext.Provider>
    </PageContext.Provider>
  )
}

export function usePage() {
  return useContext(PageContext)
}

export function usePageDispatch() {
  return useContext(PageDispatchContext)
}

function pageReducer(page, action) {
  switch (action.type) {
    case "added": {
      return [
        ...page,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    }
    case "changed": {
      return { ...page, ...action.page }
    }
    case "deleted": {
      return page.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}

const initialPage = {
  pageSetting: {
    title: "页面标题",
    isBack: true,
    isDefaultColor: "2",
    bgColor: "#f7f8fa",
  },
  componentList: [],
}
