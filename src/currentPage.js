
export {pageHome, pageUniverse, pageExploration, alterPageHome, alterPageUniverse, alterPageExploration}
const pageHome = document.querySelector(".aHome")
const pageUniverse = document.querySelector(".aUniverse")
const pageExploration = document.querySelector(".aExploration")

function alterPageHome(){
  pageHome.classList.add("currentPage")
  pageUniverse.classList.remove("currentPage")
  pageExploration.classList.remove("currentPage")
}
function alterPageUniverse(){
  pageHome.classList.remove("currentPage")
  pageUniverse.classList.add("currentPage")
  pageExploration.classList.remove("currentPage")
}
function alterPageExploration(){
  pageHome.classList.remove("currentPage")
  pageUniverse.classList.remove("currentPage")
  pageExploration.classList.add("currentPage")
}

