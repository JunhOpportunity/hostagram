import { getAllPost } from "../api/sanity/route"

export default  function  TestPage () {
  const onClick = async () => {
    await getAllPost()
  }
  return(
    <>
      <div onClick={onClick}>
        absdcva
      </div>
    </>
  )
}