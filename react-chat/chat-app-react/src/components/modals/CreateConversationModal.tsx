import { OverlayStyle } from '../../utils/styles/index';
import { CreateConversationForm } from '../forms/CreateConversationForm';
import { ModalHeader, ModalContainer, ModalBody } from './index';
import { createRef, useEffect, FC } from "react";
import { MdClose } from 'react-icons/md';

type Props = {
	//to identify datatype of this property, just hover over setShowModal declaration and paste the content
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}


export const CreateConversationModal: FC<Props> = ({
	setShowModal
}) => {
	//use ref to close the modal
	//add it to overlaystyle,which is entire background
	//whenever click background, compare ref = target, and close it 	 
	const ref = createRef<HTMLDivElement>();
	
	useEffect(() => {
		// console.log(ref);
		const handleKeyDown = (e: KeyboardEvent) => {
			e.key === 'Escape' && setShowModal(false);
		}
		window.addEventListener('keydown', handleKeyDown);
		//need to have cleanup function to remove eventListener, otherwise event can be triggered twice  
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		}
	}, []);

	const handleOverlayClick = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { current } = ref;
		if (current === e.target)
		{
			// console.log("The Modal has been closed here")
			setShowModal(false);
		}
	}
	return (
		<OverlayStyle ref={ref} onClick={handleOverlayClick}
		>
			<ModalContainer>
				<ModalHeader>
					<h2>Create a Conversation</h2>
					<MdClose size={28} onClick={() => {
						setShowModal(false);
					}}/>
				</ModalHeader>
				<ModalBody>
					<CreateConversationForm/>
				</ModalBody>
			</ModalContainer>
		</OverlayStyle>
	)
}