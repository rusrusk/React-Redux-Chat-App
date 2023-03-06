import styled, { StyledComponent } from 'styled-components'
import { PageProps, InputContainerProps } from './styleTypes';
import { ConversationChannelPage } from '../../pages/ConversationChannelPage';
import { Overlay } from '../../components/Overlay';
import { ModalHeader, ModalContainer, ModalBody } from '../../components/modals/index';

export const SIDEBAR_WIDTH = 400;

export const InputField = styled.input`
	background: inherit;
	outline: none; 
	border: none;
	color: #fff;
	font-family: 'Inter';
	padding: 0;
	margin: 4px 0;
	box-sizing: border-box;
	width: 100%;
	font-size: 18px;
`; 

export const InputContainer = styled.div<InputContainerProps>`
	background-color: ${(prop) => prop.backgroundColor ||
	 '#131313'};
	padding: 12px 16px;
	border-radius: 10px;
	width: 100%;
	box-sizing: border-box;
`;

export const InputLabel = styled.label`
	display: block;
	color: #8f8f8f;
	font-size: 14px;
	margin: 4px 0;
`;

// export const Page = styled.div<PageProps>`
// 	background-color: #1a1a1a;
// 	height: 100%;
// 	display: ${(props) => props.display};
// 	justify-content: ${(props) => props.justifyContent};
// 	align-items: ${(props) => props.alignItems}; 
// `;

export const Page = styled.div<PageProps>`
  background-color: #1a1a1a;
  height: 100%;
  display: ${(props) => props.display || 'flex'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
`;

export const ConversationSidebarStyle = styled.aside`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: ${SIDEBAR_WIDTH}px;
	background-color: #1a1a1a;
	border-right: 1px solid #5454543d;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ConversationSidebarHeader = styled.header`
	position: fixed;
	width: ${SIDEBAR_WIDTH}px;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	padding: 0 32px;
	align-items: center;
	background-color: #151515;
	height: 100px;
	border-bottom: 1px solid #5454543d;
	box-sizing: border-box;
	& h1 {
		font-weight: 400;
	}
`;

export const ConversationChannelPageStyle = styled.div`
	height: 100%;
	margin-left: ${SIDEBAR_WIDTH}px;
`;


export const ConversationSidebarContainer = styled.div`
	
`;

export const ConversationSidebarUnit = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 20px 32px;
	border-bottom: 1px solid #5454543d;
	background-color: #131313;
`;

export const OverlayStyle = styled.div`
	height: 100%;
	width: 100%;	
	background-color: #000000c4;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;	
	z-index: 99;

`;

export const ModalHeaderStyle = styled.header`
	color: #fff; 
	width: 100%;
	padding: 10px 20px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px
	& h2 {
		font-weight: 500;
		margin: 0;
	}
`;

export const ModalContainerStyle = styled.div`
	background-color: #121212;
	width: 650px;
	box-sizing: border-box;
	border-radius: 10px;
`;

export const ModalBodyStyle = styled.div`
	padding: 20px;
`;

export const TextField = styled.textarea`
	background: inherit;
	outline: none; 
	border: none;
	color: #fff;
	font-family: 'Inter';
	padding: 0;
	margin: 4px 0;
	box-sizing: border-box;
	width: 100%;
	font-size: 18px;
	resize: none;
`;

export const ButtonStyle = styled.button`
	width: 100%;
	color: #fff;
	background-color: #12553f;
	font-family: 'Inter';
	font-size: 18px;
	border-radius: 10px;
	padding: 18px;

`;