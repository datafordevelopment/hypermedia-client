import Input from './inputs/input'
import HtmlContent from './html-content'
import Link from './link'
import Section from './section'
import List from './list'
import Plain from './plain'

export default property => {
  if (property.links.navigate) {
    return Link
  }

  switch (property.type) {
    case 'html': return HtmlContent
    case 'plain': return Plain
    case 'object': return Section
    case 'array' : return List
    default: return Input
  }

  throw Error(`Unsupported element type '${property.type}'`)
}
