import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: 32px;
`;

export const ChatSenderMessage = styled.div`
	background-color: ${(props) => props.theme.colors.chatSender};
	padding: 14px;
	border-radius: 8px 8px 0px 8px;
	margin-top: 8px;
	max-width: 50%;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;
