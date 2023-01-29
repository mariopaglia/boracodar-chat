import Head from 'next/head';
import Image from 'next/image';
import ChatReceiver from './ChatReceiver';
import ChatSender from './ChatSender';
import {
	ChatAvatarName,
	ChatCloseButton,
	ChatHeader,
	ChatInput,
	ChatInputWrapper,
	ChatMessagesWrapper,
	ChatNameStatus,
	ChatSendIcon,
	ChatWrapper,
	Container,
	StatusIcon,
} from './styles';

const Chat = (): JSX.Element => {
	return (
		<Container>
			<Head>
				<title>#boraCodar - Chat</title>
			</Head>

			<ChatWrapper>
				<ChatHeader>
					<ChatAvatarName>
						<Image src="https://github.com/mariopaglia.png" width={48} height={48} alt="" />
						<ChatNameStatus>
							<p>Mario Paglia</p>
							<span>
								<StatusIcon /> Online
							</span>
						</ChatNameStatus>
					</ChatAvatarName>
					<div>
						<ChatCloseButton />
					</div>
				</ChatHeader>

				<ChatMessagesWrapper>
					<ChatReceiver name="Mario Paglia" time="11:30" message="Tive uma ideia incrível para um projeto! 😍" />
					<ChatSender time="11:32" message="Sério? Me conta mais." />
					<ChatReceiver
						name="Mario Paglia"
						time="11:34"
						message="E se a gente fizesse um chat moderno e responsivo em apenas uma semana?"
					/>
					<ChatSender time="11:36" message="#boraCodar! 🚀" />
				</ChatMessagesWrapper>

				<ChatInputWrapper>
					<ChatInput placeholder="Digite sua mensagem" />
					<ChatSendIcon onClick={() => console.log('Enviar mensagem')} />
				</ChatInputWrapper>
			</ChatWrapper>
		</Container>
	);
};

export default Chat;
