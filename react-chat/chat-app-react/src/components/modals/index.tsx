import { FC, PropsWithChildren } from "react"
import { ModalContainerStyle } from "../../utils/styles"
import { ModalHeaderStyle, ModalBodyStyle } from '../../utils/styles/index';


export const ModalHeader: FC<PropsWithChildren> = ({
	children
}) => {
	return (
		<ModalHeaderStyle>
			{children}
		</ModalHeaderStyle>
	)
} 

export const ModalBody: FC<PropsWithChildren> = ({
	children }) => {
		 return <ModalBodyStyle>{children}</ModalBodyStyle>
	}

export const ModalContainer: FC<PropsWithChildren> = ({
	children }) => {
		return (
			<ModalContainerStyle>{children}</ModalContainerStyle>
		)		
	}