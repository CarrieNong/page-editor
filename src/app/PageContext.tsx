import { createContext, useContext, useReducer, useEffect } from "react"

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
    case "inserted": {
      return {
        ...page,
        insertInfo: action.insertInfo,
      }
    }
    case "added": {
      return {
        ...page,
        componentList: action.componentList,
      }
    }
    case "changed": {
      return { ...page, ...action.page }
    }
    case "deleted": {
      page.componentList.splice(action.index, 1)
      return { ...page }
    }
    case "set": {
      page.activeComponent = action.activeComponent
      return { ...page }
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}

export function activeComponentChange(callback) {
  const { activeComponent } = useContext(PageContext)

  useEffect(() => {
    callback(activeComponent)
  }, [activeComponent, callback])
}

const initialPage = {
  insertInfo: {
    index: null,
    position: null,
  },
  pageSetting: {
    title: "页面标题",
    isBack: true,
    isDefaultColor: "2",
    bgColor: "#f7f8fa",
  },
  activeComponent: null,
  componentList: [],
}
