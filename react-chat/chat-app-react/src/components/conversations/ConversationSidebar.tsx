import { ConversationSidebarStyle } from "../../utils/styles"
import { FC, useState } from 'react';
import { ConversationType } from "../../utils/types";
import { ConversationSidebarContainer, ConversationSidebarUnit, ConversationSidebarHeader } from '../../utils/styles/index';
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { TbEdit } from 'react-icons/tb';
import { Overlay } from "../Overlay";
import React, {Fragment} from "react";
import { CreateConversationModal } from '../modals/CreateConversationModal';

//the prop type value passed to ConversationSidebar will be the same ConversType that i created
type Props = {
	conversations: ConversationType[];
};

export const ConversationSidebar: FC<Props> = ({
	conversations
}) => {

	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			{showModal && <CreateConversationModal setShowModal = {setShowModal}></CreateConversationModal>} 
			<ConversationSidebarStyle>
				<ConversationSidebarHeader>
					<h1>Conversations</h1>
					<div onClick={() => {
 						setShowModal(!showModal)
					}}> 
						<TbEdit size={40}/>
					</div>
				</ConversationSidebarHeader>
				<ConversationSidebarContainer>
					{conversations.map((conversation) => (
						<ConversationSidebarUnit onClick={() => navigate(`/conversations/${conversation.id}`)}>
							<div className={styles.conversationAvatar}></div>
							<div>
								<span className={styles.conversationName}>{conversation.name}</span>
								<span className={styles.conversationLastMsg}>{conversation.lastMsg}</span>
							</div>
						</ConversationSidebarUnit>
					) )}
				</ConversationSidebarContainer>
			</ConversationSidebarStyle>
		</>
	)
}