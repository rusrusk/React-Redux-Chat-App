import { InputField } from "../../utils/styles"
import { InputContainer, InputLabel, TextField, ButtonStyle } from '../../utils/styles/index';
import styles from "./index.module.scss"

export const CreateConversationForm = () => {
	return (
		<form className={styles.createConversationForm}>
			<section>
				<InputContainer backgroundColor = '#161616'>
					<InputLabel>Recipients</InputLabel>
					<InputField />
				</InputContainer>
			</section>
			<section className={styles.message}>	
				<InputContainer backgroundColor = '#161616'>
					<InputLabel>Message Input</InputLabel>
					<TextField > </TextField>
				</InputContainer>
			</section>
			<ButtonStyle>Create Conversation</ButtonStyle>
		</form>
	)
}