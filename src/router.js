export class Router {
  routes = {}
  body = document.querySelector("body")
  add(routeName, page){
    this.routes[routeName] = page //adicionar propiedade no objeto como string e atribuir o valor
  }

  route(event){
    event = event || window.event
    event.preventDefault()//não fazer o padrão de recarregar a página
    window.history.pushState({}, '', event.target.href) //pegar o href e adicionar no histórico
  
    this.handle() 
  }

  handle(){
    const {pathname} = window.location //saber onde está
    
    const route = this.routes[pathname] || this.routes[404]
    this.body.style.backgroundImage = `url(../assets/${pathname}.png)`
    
    
    fetch(route).then(data => data.text())//pegar os dados, transformar em text,
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}
