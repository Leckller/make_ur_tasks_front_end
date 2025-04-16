import Swal from 'sweetalert2'

export default class ValidateStatus {
  static validateStatus (status, response) {
    // Bad Request -> invalid inputs
    if (status === 400) {
      const text = Object.values(response).reduce((pv, cr) => {
        const text = `${pv} and ${cr}`
        return text
      })

      Swal.fire({ icon: 'error', title: 'Oops...', text })
      return true
    }

    // Forbidden -> user already exists
    if (status === 403) {
      const text = Object.values(response).reduce((pv, cr) => {
        const text = `${pv} and ${cr}`
        return text
      })

      Swal.fire({ icon: 'error', title: 'Oops...', text })
      return true
    }

    // Internal Error
    if (status === 500) {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Hmmm... parece que ocorreu um erro no servidor.' })
      return true
    }

    return false
  }

  static popSucess (title, text) {
    Swal.fire({
      icon: 'success',
      title,
      text,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500
    })
  }

  static popBad () {
    Swal.fire({
      icon: 'error',
      title: 'Epa, acho que o dev esqueceu de fazer alguma coisa... 🤓',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500
    })
  }

  static popLoading () {
    Swal.fire({
      title: 'Carregando!',
      imageUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExem02Z29tZXd6Ym1ic2x1djRyN2V3ODI4eWFrdWRhcWx3cmxsdjlwMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0Gqz6wHk6BqX4i4M/giphy.gif',
      text: 'Às vezes, o servidor tira um cochilo, mas ele já está acordando... 😅'
    })
  }
}
