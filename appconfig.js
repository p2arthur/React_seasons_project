//Project setup to hot reload the app
function HotReload() {
  if (module.hot) {
    module.hot.accept();
  }
}
//Export hot reload setup
export default HotReload;
