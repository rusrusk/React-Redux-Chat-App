import { InputContainer, InputField, InputLabel } from "../../utils/styles"
import styles from './index.module.scss'

export const RegisterForm = () => {
	return (
		<form className={styles.form}>
			<InputContainer>
				<InputLabel>Email</InputLabel>
				<InputField />
			</InputContainer> 
		</form>
	)
}
