import { faFacebook, faGithub, faTwitch} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialButton = ({facebook, github, twitch, text}) => {
  return (
    <>
      {facebook && <FontAwesomeIcon icon={faFacebook} style={{color: "#006cfa",}} size="3x"  />}
      {github && <FontAwesomeIcon icon={faGithub} size="3x" />}
      {twitch && <FontAwesomeIcon icon={faTwitch} style={{color: "##9a1d8a",}} size="3x" />} 
      <p>{text} </p>
    </>
  )
}

export default SocialButton
