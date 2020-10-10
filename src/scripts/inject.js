{
  function initialize() {
    const reactRoot = document.getElementById('react-root')
    if ('_reactRootContainer' in reactRoot) {
      const store = Object.entries(reactRoot.children[0])
        .filter(([k, v]) => /^__reacteventhandlers\$/i.test(k))
        .pop()
        .pop().children.props.children.props.store
      const state = store.getState()
      if ('project_friday_enabled' in state.featureSwitch.config) {
        state.featureSwitch.config.project_friday_enabled.value = false
        console.debug('Return Retweet: disabled "project friday"')
      }
    } else {
      setTimeout(initialize, 500)
    }
  }
  initialize()
}
