import { ChatSenderProps } from '@/@types/interfaces';
import { ChatSenderMessage, Container } from './styles';

const ChatSender = (props: ChatSenderProps): JSX.Element => {
	return (
		<Container>
			<span>{`Você - ${props.time}`}</span>
			<ChatSenderMessage>
				<p>{props.message}</p>
			</ChatSenderMessage>
		</Container>
	);
};

export default ChatSender;
