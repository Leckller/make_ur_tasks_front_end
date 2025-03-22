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
}
