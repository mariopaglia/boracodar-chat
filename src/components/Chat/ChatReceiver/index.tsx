import { ChatReceiverProps } from '@/@types/interfaces';
import { ChatReceiverMessage, Container } from './styles';

const ChatReceiver = (props: ChatReceiverProps): JSX.Element => {
	return (
		<Container>
			<span>{`${props.name} - ${props.time}`}</span>
			<ChatReceiverMessage>
				<p>{props.message}</p>
			</ChatReceiverMessage>
		</Container>
	);
};

export default ChatReceiver;
