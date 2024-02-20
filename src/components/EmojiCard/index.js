import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClick} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickingEmoji = () => {
    emojiClick(id)
  }
  return (
    <li>
      <button type="button" className="emoji-button" onClick={onClickingEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
