const main = () => {
  // menu
  const sidebar = document.querySelector(".sidebar")
  const menu = document.querySelector(".sidebar__menu")

  menu.onclick = () => {
    sidebar.classList.toggle("sidebar--active")
  }

  // header
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    if (window.pageYOffset) {
      header.classList.add("header--scrolling")
    } else {
      header.classList.remove("header--scrolling")
    }
  })

  header.style.width = `${document.querySelector('.coupons-wrapper').clientWidth}px`
  
  window.onresize = () => header.style.width = `${document.querySelector('.coupons-wrapper').clientWidth}px`

  // tabs
  const title = document.querySelector('.header__title')
  const titlePlaceholder = document.querySelector('.header__title-placeholder')

  const handleClick = (id) => {
    tabButtons.forEach(item => {
      if (item.id === id) {
        item.button.classList.add('tab--active')

        if (title.innerHTML !== item.title) {
          title.innerHTML = item.title
          titlePlaceholder.style.animation = 'appearanceDown .7s ease forwards'
          title.style.animation = 'appearanceUp .7s ease forwards'
          
          setTimeout(() => {
            titlePlaceholder.style.animation = ''
            title.style.animation = ''
            titlePlaceholder.innerHTML = item.title
          }, 500)
        }

      } else {
        item.button.classList.remove('tab--active')
      }
      if (innerWidth >= 500) {
        sidebar.classList.remove('sidebar--active')
      } else {
        setTimeout(() => sidebar.classList.remove('sidebar--active'), 300)
      }
    })
  }

  const tabButtons = [
    {
      button: document.querySelector(".tab-catalog"),
      id: 0,
      title: 'Каталог'
    },
    {
      button: document.querySelector(".tab-health"),
      id: 1,
      title: 'Здоровье'
    },
    {
      button: document.querySelector(".tab-beauty"),
      id: 2,
      title: 'Красота'
    },
    {
      button: document.querySelector(".tab-enjoy"),
      id: 3,
      title: 'Развлечения'
    },
    {
      button: document.querySelector(".tab-car"),
      id: 4,
      title: 'Авто'
    },
  ]

  for (const { button, id } of tabButtons) {
    button.onclick = () => handleClick(id)
  }
}

main()
