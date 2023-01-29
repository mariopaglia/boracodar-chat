import { GrStatusGoodSmall } from 'react-icons/gr';
import { IoSend } from 'react-icons/io5';
import { TfiClose } from 'react-icons/tfi';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	padding: 32px 72px;

	@media (max-width: 768px) {
		padding: 32px 24px;
	}
`;

export const ChatWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const ChatHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ChatAvatarName = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const ChatNameStatus = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	p {
		font-size: 16px;
		font-weight: 700;
	}

	span {
		font-size: 12px;
		color: ${(props) => props.theme.colors.online};
		display: flex;
		align-items: center;
		gap: 4px;
	}
`;

export const StatusIcon = styled(GrStatusGoodSmall)`
	width: 12px;
	height: 12px;
`;

export const ChatCloseButton = styled(TfiClose)`
	width: 20px;
	height: 20px;
	cursor: pointer;
	color: #ffffff;
`;

export const ChatMessagesWrapper = styled.div`
	height: 100%;
	margin: 32px 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	overflow-y: auto;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const ChatInputWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
`;

export const ChatInput = styled.input`
	background-color: ${(props) => props.theme.colors.input};
	width: 100%;
	height: 52px;
	padding: 14px 24px;
	border-radius: 999px;
	color: ${(props) => props.theme.colors.text};

	&::placeholder {
		color: ${(props) => props.theme.colors.text};
	}
`;

export const ChatSendIcon = styled(IoSend)`
	width: 24px;
	height: 24px;
	position: absolute;
	right: 24px;
	cursor: pointer;
	color: ${(props) => props.theme.colors.text};
`;
