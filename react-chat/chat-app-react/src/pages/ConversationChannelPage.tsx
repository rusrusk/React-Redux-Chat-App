import { ConversationChannelPageStyle } from '../utils/styles';
import { useParams } from "react-router-dom"

export const ConversationChannelPage = () => {
	console.log(useParams());	
	return (
		<ConversationChannelPageStyle>Channel page</ConversationChannelPageStyle>
		
	)
}