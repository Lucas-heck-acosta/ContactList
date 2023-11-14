import * as enums from '../utils/enums/Group'

class Contact {
  name: string
  phone: string
  email: string
  group: enums.Group
  id: number

  constructor(
    name: string,
    phone: string,
    email: string,
    group: enums.Group,
    id: number
  ) {
    this.name = name
    this.phone = phone
    this.email = email
    this.group = group
    this.id = id
  }
}

export default Contact
