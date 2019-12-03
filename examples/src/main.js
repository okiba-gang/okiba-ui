import './styles/main.scss'

__webpack_public_path__ = window.publicScriptsPath

const root = document.getElementById('app')

if (root && root.dataset.pageCtrl) { 
  import(/* webpackChunkName: "[request]" */ `./pages/${root.dataset.pageCtrl}`)
}

if (module.hot) {
  module.hot.accept()
}
