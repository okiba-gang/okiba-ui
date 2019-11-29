const root = document.getElementById('app')

if (root && root.dataset.pageCtrl) { 
  import(`./pages/${root.dataset.pageCtrl}`)
}

if (module.hot) {
  module.hot.accept()
}
