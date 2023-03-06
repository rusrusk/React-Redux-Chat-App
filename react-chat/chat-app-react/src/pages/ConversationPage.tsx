import { Page } from "../utils/styles"
import { ConversationSidebar } from "../components/conversations/ConversationSidebar"
import { Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"
import { ConversationPanel } from '../components/conversations/ConversationPanel';
import mockConversations from '../_mocks/conversations';

export const ConversationPage = () => {
	const { id } = useParams();	
	console.log(id);
	return (
		<Page>
			<ConversationSidebar conversations={mockConversations} />
			{!id && <ConversationPanel />}
			<Outlet />
		</Page>
	)
}