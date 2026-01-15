import { contact } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
        <h1 className="my-10 text-center text-4xl ">Get in touch</h1>
        <div className="text-center tracking-tight ">
            <p className="my-4">{contact.address}</p>
            <p className="my-4">{contact.phoneNumber}</p>
            <p className="my-4"><a href="#">{contact.email}</a></p>
        </div>
    </div>
  )
}

export default Contact